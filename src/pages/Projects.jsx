import React, { useEffect, useState } from "react";
import ProjectCard from "../components/core/Project";

const Projects = () => {
  const [projects, setProjects] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(projects);

  const apiURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiURL}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setError(false);
          setLoading(false);
          setProjects(data.data.projects);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-[48px] font-semibold ">Projects</h1>
      <p className="text-[16px] font-medium">My Own Creation and Experience I have Put on to develop this!</p>
      <div>
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              image={project?.projectImageUrl[0]}
              projectTitle={project?.projectName}
              projectDesc={project?.projectDescription}
              projectTag={project?.projectTechnologies}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
