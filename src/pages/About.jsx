import { useState } from "react";
import aboutImageBanner from "../assets/aboutImageBanner.jpeg";
import { useEffect } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  // console.log(aboutData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${apiURL}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setLoading(false);
          setAboutData(data.data.about);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="px-[24px]">
      <h1 className="text-[48px] font-semibold">About Harshvardhan</h1>
      <p className="text-[16px] font-medium mt-[16px]">{aboutData?.title}</p>
      <img
        src={aboutImageBanner}
        alt="aboutBanner"
        className="w-[720px] h-[450px] mt-[32px] rounded-[6px]"
      />
      <p className="mt-[32px] text-[14px] text-[#747679]">
        {aboutData?.aboutContent}
      </p>
    </div>
  );
};

export default About;
