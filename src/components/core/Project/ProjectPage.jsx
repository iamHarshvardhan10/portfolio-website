import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { VscArrowLeft, VscHeart, VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { formatDate } from "../../../utils/formatDate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import Loading from "../../common/Loading";
import toast, { Toaster } from "react-hot-toast";
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
      {loading && <Loading />}
      {error && toast.error("Error While Fetching Data")}
      <Toaster />
      <IconBtn
        onClick={handleNavigate}
        type={"button"}
        icon={<VscArrowLeft />}
        bg={true}
        text={"All Projects"}
      />

      <div className="mt-[24px]">
        <h1 className="text-5xl font-semibold capitalize">
          {projectData?.projectName}
        </h1>
        <p className="my-4 text-gray-400 text-end">
          {formatDate(projectData.projectDate)}
        </p>
        <Swiper
          modules={[Pagination, Autoplay, Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={() => console.log("slides")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {projectData.projectImageUrl &&
            projectData.projectImageUrl.map((photo, index) => (
              <SwiperSlide key={index}>
                <img src={photo} alt={photo} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="my-4 mx-4 flex items-center justify-end gap-4">
          <a href={projectData.projectGithubLink} target="_blank">
            <FaGithub className="text-4xl border px-2 rounded-md shadow-lg border-black" />
          </a>
          <a href={projectData.projectLink} target="_blank">
            <VscPreview className="text-4xl border px-2 rounded-md shadow-lg border-black" />
          </a>
        </div>
        <p className="text-md my-8 text-gray-400 text-start">
          {projectData.projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
