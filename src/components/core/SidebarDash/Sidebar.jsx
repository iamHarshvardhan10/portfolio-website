import { NAVLINKS } from "../../../utils/index";
import Sidebarlinks from "./Sidebarlinks";
import profilelogo from "../../../assets/profile-logo.jpeg";
import Follow from "./Follow";
import { useEffect, useState } from "react";
const Sidebar = () => {
  const [introData, setIntroData] = useState("");
  const [error, setError] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(introData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setIntroData(data.data.portfolio);
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-[#f5f5f5] px-6 py-6 border-r-2">
      <div className="flex items-center gap-2 mt-4 cursor-pointer">
        <img
          src={introData?.portfolioImage}
          alt=""
          className="w-[50px] h-[50px] rounded-full border-2 border-black"
        />
        <div>
          <h2 className="text-[14px]">Harshvardhan Bhosale</h2>
          <span className="text-[14px] text-[#747679] hover:text-gray-900 font-medium uppercase">
            Mern Developer
          </span>
        </div>
      </div>
      <div className="mt-10 mb-8">
        {NAVLINKS.map((link, index) => {
          return <Sidebarlinks key={index} link={link} iconName={link.icon} />;
        })}
      </div>
      <Follow />
    </div>
  );
};

export default Sidebar;
