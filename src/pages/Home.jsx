import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import IconBtn from "../components/common/IconBtn";
import { FaClipboard, FaPhone } from "react-icons/fa";
import Footer from "../components/common/Footer";

const Home = () => {
  const [introData, setIntroData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(introData);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${apiUrl}/api/portfolio/getportfolio`);

        const data = await res.json();
        if (res.ok) {
          setIntroData(data);
        } else {
          setError(true);
        }
      } catch (error) {
        // console.log("Error fetching data:", error.message);
        setError(true);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {};

  const copyToClipBoard = () => {};

  return (
    <div className="px-[48px]">
      <h1 className="text-[48px] font-semibold">
        Hey, I'm {introData?.data?.portfolio?.firstName}
      </h1>
      <h2 className="flex gap-2 text-[48px] font-semibold">
        I Design{" "}
        <Typewriter
          options={{
            strings: `${introData?.data?.portfolio?.roles}`,
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p className="mt-[24px] text-[16px] font-medium w-[70%]">
        {introData?.data?.portfolio?.bio}
      </p>
      <div className="flex items-center gap-4">
        <IconBtn
          onClick={handleClick}
          text={"contact"}
          bg={true}
          type={"button"}
          icon={<FaPhone />}
        />
        <IconBtn
          onClick={copyToClipBoard}
          text={"E-mail"}
          bg={false}
          type={"button"}
          icon={<FaClipboard />}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
