import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import toast, { Toaster } from "react-hot-toast";
import IconBtn from "../components/common/IconBtn";
import { FaClipboard, FaPhone } from "react-icons/fa";
import Footer from "../components/common/Footer";
import Accordion from "../components/core/Accordion/Accordion";
import ProjectCard from "../components/core/Project";
import Loading from "../components/common/Loading";
import { BsChevronBarRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { VscProject } from "react-icons/vsc";

const Home = () => {
  const [introData, setIntroData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [stack, setStack] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${apiUrl}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setIntroData(data.data);
          setProject(data.data.projects);
          setStack(data.data.stack);
        } else {
          setError(true);
        }
      } catch (error) {
        console.log("Error fetching data:", error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleClick = () => {
    navigate("/contact");
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(introData?.portfolio?.email);
    toast.success("Email Copied");
  };

  return (
    <div className="px-[48px]">
      {loading && <Loading />}
      {error && <p>There was an error fetching the data.</p>}
      <Toaster />
      {introData && (
        <>
          <h1 className="text-[48px] font-semibold">
            Hey, I'm {introData.portfolio?.firstName}
          </h1>
          <h2 className="flex gap-2 text-[48px] font-semibold">
            I Design{" "}
            <Typewriter
              options={{
                strings: introData.portfolio?.roles || [],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="mt-[24px] text-[14px] text-gray-600 font-medium w-[80%]">
            {introData.portfolio?.bio}
          </p>
          <div className="flex items-center gap-4">
            <IconBtn
              onClick={handleClick}
              text={"Contact"}
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
          <h2 className="my-10 text-xl font-semibold">What's New</h2>
          <div className="my-4">
            {project &&
              [...project]
                .reverse()
                .slice(0, 2)
                .map((card) => {
                  return (
                    <ProjectCard
                      key={card._id}
                      id={card._id}
                      image={card.projectImageUrl[0]}
                      projectDesc={card.projectDescription}
                      projectTag={card.projectTechnologies}
                    />
                  );
                })}
          </div>
          <Link
            to={"/projects"}
            className="flex items-center justify-center gap-4 font-semibold border py-2 rounded-md"
          >
            All Projects <VscProject className="text-xl" />
          </Link>
        </>
      )}
      <div className="my-16 px-8 py-4 border-2 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl  font-semibold">Stack</h2>
          <Link
            to={"/stack"}
            className="flex items-center gap-2 border px-4 py-1 rounded-md"
          >
            All Stacks <BsChevronBarRight className="text-xl" />
          </Link>
        </div>
        <p className="text-gray-500 my-2">Langauges I use Regulary</p>
        <div className="">
          {stack &&
            stack.slice(0, 4).map((stack) => {
              return (
                <div
                  key={stack._id}
                  className="flex items-center gap-6 my-4 border px-2 py-2 rounded-xl"
                >
                  <img
                    src={stack.stackLogo}
                    alt="image"
                    className="w-[60px] h-[50px] rounded-full"
                  />
                  <div>
                    <p className="text-lg font-semibold">{stack.stackName}</p>
                    <p className="text-sm text-gray-400 capitalize">
                      {stack.stackDescription}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
