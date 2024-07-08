import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useEffect } from "react";
import { isDark, toggleMode } from "./DarkModeSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../state/hooks";

function DarkmodeToggle() {
  const dispatch = useDispatch();

  const mood = useAppSelector(isDark);
  useEffect(() => {
    if (mood) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mood]);

  function toggleDarkMode() {
    // setIsDarkMode((isDark:boolean) => !isDark);
    dispatch(toggleMode());
  }

  //   const dispatch = useAppDispatch();

  //   const handleToggle = () => {
  //     dispatch(toggleMode());
  //     console.log("clicked");
  //   };

  return (
    <div className=" cursor-pointer" onClick={toggleDarkMode}>
      {mood ? (
        <MdOutlineWbSunny color=" #0075BF" size={25} />
      ) : (
        <FaRegMoon size={22} color=" #0075BF" />
      )}
    </div>
  );
}

export default DarkmodeToggle;
