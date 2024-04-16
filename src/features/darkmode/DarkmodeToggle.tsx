import { MdOutlineWbSunny } from "react-icons/md";
import { useAppSelector } from "../../state/hooks";
import { isDark } from "./DarkModeSlice";
import { FaRegMoon } from "react-icons/fa";
import { useEffect } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";


function DarkmodeToggle() {
  const isDarkMood = useAppSelector(isDark);

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDaskMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, setIsDarkMode]);
  console.log("dark", isDarkMood);

  function toggleDarkMode() {
    setIsDarkMode((isDark:boolean) => !isDark);
  }

  

//   const dispatch = useAppDispatch();

//   const handleToggle = () => {
//     dispatch(toggleMode());
//     console.log("clicked");
//   };

  return (
    <div className=" cursor-pointer" onClick={toggleDarkMode}>
      {isDarkMode ? <MdOutlineWbSunny color="#0080CF" size={25} /> : <FaRegMoon size={22} color="#0080CF" />}
    </div>
  );
}

export default DarkmodeToggle;
