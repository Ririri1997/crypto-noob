"use client";
import cn from "classnames";
import styles from "./ThemeSwitch.module.css";
import { Switch } from "@gravity-ui/uikit";
import { useContext} from "react";
import { ThemeContext } from "../ThemeProviderWrapper copy/ThemeProviderWrapper";


export default function ThemeSwitch() {
 const {theme, toggleTheme } = useContext(ThemeContext);


 return (
  <div className={cn(styles["radio-theme"])}>
   <Switch
    size="l"
    checked={theme === "dark"} 
    onUpdate={toggleTheme}
   >
   {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
   </Switch>
  </div>
 );
}
