"use client";

import Header from "@/components/Header/Header";
import { ThemeProvider } from "@gravity-ui/uikit";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme, THEME_PERSISTENT_STATE } from "@/store/theme.slice";
import { loadState } from "@/store/storage";

export default function ThemeProviderWrapper({
 children,
}: {
 children: React.ReactNode;
}) {
 const [mounted, setMounted] = useState(false);
 const theme = useSelector((state: RootState) => state.theme.mode);
 const dispatch = useDispatch();

useEffect(() => {
 const savedTheme = loadState(THEME_PERSISTENT_STATE);
 if (savedTheme) {
   dispatch(setTheme(savedTheme));
 }
 setMounted(true);
}, [dispatch]);

if (!mounted) {
 return null;
}


 return (
   <ThemeProvider theme={theme}>
    <Header />
    {children}
   </ThemeProvider>
 );
}
