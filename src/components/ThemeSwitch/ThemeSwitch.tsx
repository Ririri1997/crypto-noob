"use client";
import cn from "classnames";
import styles from "./ThemeSwitch.module.css";
import { Switch } from "@gravity-ui/uikit";
import {RootState} from '@/store/store';
import { useSelector } from "react-redux";
import { toggleTheme } from "@/store/theme.slice";
import { useDispatch } from "react-redux";

export default function ThemeSwitch() {
const theme = useSelector((state: RootState)=> state.theme.mode)
const dispatch = useDispatch();


 return (
  <div className={cn(styles["radio-theme"])}>
   <Switch
    size="l"
    checked={theme === "dark"} 
    onUpdate={() => dispatch(toggleTheme())}
   >
   {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
   </Switch>
  </div>
 );
}
