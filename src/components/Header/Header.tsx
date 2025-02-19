import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { Link } from "@gravity-ui/uikit";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";


export default function Header() {

  return (
    <header className={cn(styles.header)}>
      <Logo />
      <div className={cn(styles["header-right"])}>
        <Link href="/about" view="primary">
          Обратная связь
        </Link>
        <ThemeSwitch/>
      </div>
    </header>
  );
}
