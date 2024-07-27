import { Link } from "react-router-dom";

const ProjectCard = ({ id, image, projectTitle, projectDesc, projectTag }) => {
  return (
    <Link to={`${id}`}>
      <div className="flex items-center gap-8 mt-[32px] py-[12px] px-[12px] border-2 shadow-lg rounded-xl">
        <img
          src={image}
          alt="project"
          className="w-[200px] h-[150px] rounded-xl"
        />
        <div className="">
          <h2 className="text-[18px] font-bold uppercase text-gray-650">
            {projectTitle}
          </h2>
          <p className="text-[16px] text-gray-500 capitalize mb-6">
            {projectDesc}
          </p>

          <span className="capitalize px-[12px] py-[4px]  rounded-[5px] bg-green-400 max-w-[80px]">
            #{projectTag}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
