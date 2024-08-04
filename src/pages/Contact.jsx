import { useState } from "react";
import { useEffect } from "react";
import {
  VscFileSymlinkDirectory,
  VscMail,
  VscVerifiedFilled,
} from "react-icons/vsc";
// import IconBtn from "../components/common/IconBtn";
import { FOLLOW } from "../utils/index";
import * as Icons from "react-icons/fa";
import Footer from "../components/common/Footer";
import Loading from "../components/common/Loading";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [contactData, setContactData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(contactData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${apiURL}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setLoading(false);
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
      {loading && <Loading />}
      {error && toast.error("Error While Fetching Data")}
      <Toaster />
      <div className="max-w-[1029px]  px-[48px] py-[48px] border rounded-3xl bg-black bg-opacity-95">
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
          <p className="px-[40px] text-start text-sm text-gray-200 opacity-70">
            With over a year of practical experience in MERN stack development,
            I have successfully worked on more than 10 projects that highlight
            my skills and creativity. My professional journey includes
            internships at Prodigy, Octanet, and Pinnacle Labs, where I took on
            roles as both a frontend and full-stack developer. These experiences
            have significantly enriched my technical expertise and project
            management skills
          </p>
        </div>
        <div className="px-[40px] py-[40px]">
          <a
            href="mailto:shreeharshpb11@gmaili.com"
            className="mt-4 flex items-center justify-between cursor-pointer text-[18px] text-[#747679] font-medium hover:text-gray-900 border py-4 px-4 rounded-lg"
          >
            <div className="flex items-center gap-5">
              <VscMail />
              Email It
            </div>
            <VscFileSymlinkDirectory />{" "}
          </a>
          {FOLLOW.map((ele, index) => {
            return (
              <div key={index} className="">
                {ele.followList.map((follow) => {
                  const Icon = Icons[follow.icon];
                  return (
                    <a
                      key={follow.name}
                      href={follow.path}
                      target="_blank"
                      className="mt-4 flex items-center justify-between cursor-pointer text-[18px] text-[#747679] font-medium hover:text-gray-900 border py-4 px-4 rounded-lg"
                    >
                      <div className="flex items-center gap-5">
                        <Icon />
                        {follow.name}
                      </div>
                      <VscFileSymlinkDirectory />
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
