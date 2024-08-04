import React, { useEffect, useState } from "react";
import ProjectCard from "../components/core/Project";
import Footer from "../components/common/Footer";
import Loading from "../components/common/Loading";
import toast, { Toaster } from "react-hot-toast";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedTags, setSelectedTags] = useState(["All"]);
  const [availableTags, setAvailableTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

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
          const tags = data.data.projects.flatMap(
            (project) => project.projectTechnologies
          );
          setAvailableTags(["All", ...new Set(tags)]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleTagClick = (tag) => {
    setCurrentPage(1); // Reset to the first page when filtering
    if (tag === "All") {
      setSelectedTags(["All"]);
    } else {
      const newSelectedTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags.filter((t) => t !== "All"), tag];
      setSelectedTags(newSelectedTags.length > 0 ? newSelectedTags : ["All"]);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(filteredProjects.length / pageSize))
    );
  };

  const filteredProjects = selectedTags.includes("All")
    ? projects
    : projects.filter((project) =>
        selectedTags.every((tag) => project.projectTechnologies.includes(tag))
      );

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      {loading && <Loading />}
      {error && toast.error("Error While Fetching Data")}
      <Toaster />
      <h1 className="text-[48px] font-semibold ">Projects</h1>
      <p className="text-[16px] font-medium">
        My Own Creation and Experience I have Put on to develop this!
      </p>
      <div className="flex flex-wrap gap-2 my-4">
        {availableTags.map((tag, index) => (
          <button
            key={index}
            className={`px-6 py-1 border capitalize rounded-md ${
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white"
                : "bg-green-500"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div>
        {paginatedProjects &&
          paginatedProjects.length > 0 &&
          paginatedProjects.map((project) => (
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
      <div className="flex justify-center my-4">
        <button
          className="px-6 py-2 mx-2 text-lg rounded-md bg-green-400"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="px-6 py-2 mx-2 text-lg  rounded-md bg-green-400"
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(filteredProjects.length / pageSize)
          }
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
