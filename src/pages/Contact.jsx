import { useState } from "react";
import { useEffect } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import IconBtn from "../components/common/IconBtn";
import Footer from "../components/common/Footer";
const Contact = () => {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [contactData, setContactData] = useState("");
  console.log(contactData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiURL}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setContactData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-[1029px] max-h-screen  px-[48px] py-[48px] border rounded-3xl bg-black bg-opacity-95">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={contactData?.data?.portfolio?.portfolioImage}
            alt="image"
            className="w-[156px] h-[156px] rounded-full shadow-md border-white border-2"
          />
          <h3 className="flex  items-center gap-3 my-6 text-3xl text-white font-bold">
            {contactData?.data?.portfolio?.firstName}{" "}
            <VscVerifiedFilled className="text-blue-800" />
          </h3>
          <p className="px-[60px] text-start text-sm text-gray-200 opacity-70">
            With over a year of practical experience in MERN stack development,
            I have successfully worked on more than 10 projects that highlight
            my skills and creativity. My professional journey includes
            internships at Prodigy, Octanet, and Pinnacle Labs, where I took on
            roles as both a frontend and full-stack developer. These experiences
            have significantly enriched my technical expertise and project
            management skills
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
