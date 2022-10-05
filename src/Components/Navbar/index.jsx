import { RiMoonClearLine } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";
import { NavLink } from "react-router-dom";
import useDarkMode from "../../Hooks/useDarkMode";
import { navbarConfig as navbar } from "../../Data/config";

const Switcher = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <WiDaySunny size="25" className="top-navigation-icon" />
      ) : (
        <RiMoonClearLine size="20" className="top-navigation-icon" />
      )}
    </span>
  );
};

export default function Navbar() {

  return (
    <header className="mx-auto max-w-xl px-2 py-4">
      <nav>
        <div className="flex justify-center">
          <a className="no-underline" href="#">
            <h1 className="top-navigation-h1 text-xl font-black italic text-black dark:text-stone-300">
              {navbar.title}
            </h1>
          </a>
        </div>
        <ul className="flex grid-flow-row justify-evenly mb-6 mt-6">
          <li className="font-bold text-base">
            <NavLink
              className={({ isActive }) =>
                "top-navigation-text text-black border-black dark:text-stone-400" +
                (isActive ? " border-b dark:border-stone-400 dark:text-stone-200" : "")
              }
              to="/home"
            >
              About
            </NavLink>
          </li>
          <li className="font-bold text-base">
            <NavLink
              className={({ isActive }) =>
                "top-navigation-text text-black border-black dark:text-stone-400" +
                (isActive ? " border-b dark:border-stone-400 dark:text-stone-200" : "")
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="font-bold text-base">
            <NavLink
              className={({ isActive }) =>
                "top-navigation-text text-black border-black dark:text-stone-400" +
                (isActive ? " border-b dark:border-stone-400 dark:text-stone-200" : "")
              }
              to="/contact"
            >
              Reach Me!
            </NavLink>
          </li>
          <Switcher />
        </ul>
      </nav>
    </header>
  );
}
