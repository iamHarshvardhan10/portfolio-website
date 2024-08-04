import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { VscArrowLeft, VscHeart, VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { formatDate } from "../../../utils/formatDate";
import Loading from "../../common/Loading";
import toast, { Toaster } from "react-hot-toast";
const BlogPage = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(blogData);
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiURL}/api/portfolio/getblog/${blogId}`);
        const data = await res.json();
        if (res.ok) {
          setLoading(false);
          setBlogData(data.data);
        }
      } catch (error) {
        console.log(error.message);
        setLoading(error.message);
      }
    };
    fetchData();
  }, []);

  const handleNavigate = () => {
    navigate("/writing");
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
        <h1 className="w-[70%] text-6xl font-semibold capitalize">
          {blogData?.blogTitle}
        </h1>
        <p className="my-2 text-gray-400 text-end">
          {formatDate(blogData?.createdAt)}
        </p>
        <img
          src={blogData?.blogImage}
          alt="image"
          className="mt-[32px] rounded-xl border min-w-[750px]"
        />
        <div className="my-4 mx-4">
          <span className="border px-2 py-2 rounded-md bg-purple-600">
            #{blogData?.blogTag}
          </span>
        </div>
        <p className="text-md my-8 text-gray-400 text-start">
          {blogData?.blogDescription}
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
