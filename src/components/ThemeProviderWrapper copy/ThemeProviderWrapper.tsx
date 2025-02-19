"use client";

import { createContext, useState } from "react";
import Header from "../Header/Header";
import { ThemeProvider } from "@gravity-ui/uikit";


interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <ThemeProvider theme={theme}>
     <Header/>
      {children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
