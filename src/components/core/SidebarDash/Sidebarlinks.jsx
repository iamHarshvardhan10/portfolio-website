/* eslint-disable react/prop-types */
import * as Icons from "react-icons/vsc";
import { NavLink, matchPath, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebarlinks = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    if (!route) {
      return false;
    }
    return matchPath({ path: route }, location.pathname);
  };

  return (
    // eslint-disable-next-line react/prop-types
    <NavLink to={link.path}>
      <div
        className={`flex items-center gap-2 px-4 py-2 mb-1 text-[#747679] font-medium hover:text-gray-900 ${
          matchRoute(link?.path) ? "border rounded-md bg-white shadow-sm" : "border-none"
        } transition-all duration-200`}
      >
        <Icon />
        <span className="text-[14px]">{link.name}</span>
      </div>
    </NavLink>
  );
};

export default Sidebarlinks;
