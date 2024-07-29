import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { VscArrowLeft, VscHeart, VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { formatDate } from "../../../utils/formatDate";
const ProjectPage = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(projectData);
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${apiURL}/api/portfolio/getproject/${projectId}`
        );
        const data = await res.json();
        if (res.ok) {
          setLoading(false);
          setProjectData(data.data);
        }
      } catch (error) {
        console.log(error.message);
        setLoading(error.message);
      }
    };
    fetchData();
  }, []);

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <div>
      <IconBtn
        onClick={handleNavigate}
        type={"button"}
        icon={<VscArrowLeft />}
        bg={true}
        text={"All Projects"}
      />

      <div className="mt-[24px]">
        <h1 className="w-[70%] text-6xl font-semibold capitalize">
          {projectData?.projectName}
        </h1>
        <p className="my-2 text-gray-400 text-end">{formatDate(projectData.projectDate)}</p>
        <img
          src={projectData.projectImageUrl}
          alt="image"
          className="mt-[32px] rounded-xl border"
        />
        <div className="my-4 mx-4 flex items-center justify-end gap-4">
          <a href={projectData.projectGithubLink} target="_blank">
            <FaGithub className="text-4xl border px-2 rounded-md shadow-lg border-black" />
          </a>
          <a href={projectData.projectLink} target="_blank">
            <VscPreview className="text-4xl border px-2 rounded-md shadow-lg border-black" />
          </a>
          <span>
            <VscHeart className="text-4xl border px-2 rounded-md shadow-lg border-black" />
          </span>
        </div>
        <p className="text-md my-8 text-gray-400 text-start">{projectData.projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
