import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import useDarkMode from "../../Hooks/useDarkMode";

const Switcher = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <RiSunLine size="20" className="top-navigation-icon" />
      ) : (
        <RiMoonClearLine size="20" className="top-navigation-icon" />
      )}
    </span>
  );
};

export default function Navbar() {
  const data = {
    name: "Ardy Pranata",
    born: "August 14, 2002",
    age: "20",
    skill: "Web Developer",
    email: "ardiprana90@gmail.com",
    instagram: "https://www.instagram.com/_ardipranata_",
    facebook: "https://www.facebook.com/ardi.pranata.330",
    github: "https://github.com/ardipranata89",
    twitter: "https://twitter.com/ardipranata89",
  };

  return (
    <header className="mx-auto max-w-xl px-2 py-4">
      <nav>
        <div className="flex justify-center">
          <a className="no-underline" href="#">
            <h1 className="top-navigation-h1 text-xl font-extrabold text-medium italic text-black dark:text-stone-400">
              {data.name}
            </h1>
          </a>
        </div>
        <ul className="flex grid-flow-row justify-evenly mb-6 mt-6">
          <li className="font-bold text-base">
            <NavLink
              className={({ isActive }) =>
                "top-navigation-text text-black border-black dark:text-stone-400" +
                (isActive ? " border-b dark:border-stone-400 dark:text-stone-300" : "")
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
                (isActive ? " border-b dark:border-stone-400 dark:text-stone-300" : "")
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
                (isActive ? " border-b dark:border-stone-400 dark:text-stone-300" : "")
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
