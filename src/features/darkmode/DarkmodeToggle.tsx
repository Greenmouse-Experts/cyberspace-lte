import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useEffect } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { toggleMode } from "./DarkModeSlice";
import { useDispatch } from "react-redux";


function DarkmodeToggle() {
const dispatch = useDispatch()
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

  function toggleDarkMode() {
    setIsDarkMode((isDark:boolean) => !isDark);
    dispatch(toggleMode())
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
