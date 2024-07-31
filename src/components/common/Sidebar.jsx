import { Outlet } from "react-router-dom";
import Sidenavigation from "../core/SidebarDash/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={`relative ${theme}  flex min-h-[100vh]`}>
      <Sidenavigation />
      <div className="h-[100vh] flex-1 overflow-auto">
        <div className="pt-[120px] px-[244px]">
          <Outlet />
        </div>
      </div>
      <button
        className="absolute bg-green-200 right-12 top-8 text-2xl border rounded-full px-2 py-2"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme && theme === "light" ? <FaMoon /> : <FaSun className="text-black"/>}
      </button>
    </div>
  );
};

export default Sidebar;
