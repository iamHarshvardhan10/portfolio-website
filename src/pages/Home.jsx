import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import IconBtn from "../components/common/IconBtn";
import { FaClipboard, FaPhone } from "react-icons/fa";
import Footer from "../components/common/Footer";
import Accordion from "../components/core/Accordion/Accordion";
import ProjectCard from "../components/core/Project";

const Home = () => {
  const [introData, setIntroData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [error, setError] = useState(false);
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

  const handleClick = () => {};

  const copyToClipBoard = () => {};

  return (
    <div className="px-[48px]">
      {loading && <p>Loading...</p>}
      {error && <p>There was an error fetching the data.</p>}
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
              project
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
        </>
      )}
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
