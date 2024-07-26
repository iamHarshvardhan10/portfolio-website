import React from "react";
import Typewriter from "typewriter-effect";
import IconBtn from "../components/common/IconBtn";
import { FaClipboard, FaPhone } from "react-icons/fa";
const Home = () => {
  const handleClick = () => {};

  const copyToClipBoard = () => {};
  return (
    <div className="px-[48px]">
      <h1 className="text-[48px] font-semibold">Hey, I'm Harshvardhan</h1>
      <h2 className="flex gap-2 text-[48px] font-semibold">
        I Design{" "}
        <Typewriter
          options={{
            strings: ["Website", "apps", "Software"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p className="mt-[24px] text-[16px] font-medium w-[70%]">
        Harshvardhan is an experienced Developer based in the India known for
        creating website and apps.
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
    </div>
  );
};

export default Home;
