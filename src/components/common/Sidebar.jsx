import { Outlet } from "react-router-dom";
import Sidenavigation from "../core/SidebarDash/Sidebar";
const Sidebar = () => {
  return (
    <div className="relative flex min-h-[100vh]">
      <Sidenavigation />
      <div className="h-[100vh] flex-1 overflow-auto">
        <div className="py-[120px] px-[244px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
