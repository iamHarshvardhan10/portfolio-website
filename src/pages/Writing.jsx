import { useEffect, useState } from "react";
import BlogCard from "../components/core/Blog/BlogCard";
import { formatDate } from "../utils/formatDate";
import Footer from "../components/common/Footer";

const Writing = () => {
  const [blogData, setBloData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  console.log(blogData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${apiURL}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setLoading(false);
          setBloData(data.data.blogs);
        }
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-[48px] font-semibold">Writing</h2>
      <p className="text-[16px] font-medium">
        sometimes I also writes some useful things
      </p>
      <div className="mt-[32px] flex items-center justify-between flex-wrap  max-w-[750px] gap-4">
        {blogData &&
          blogData.length > 0 &&
          blogData.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              image={blog.blogImage}
              title={blog.blogTitle}
              tag={blog.blogTag}
              created={formatDate(blog.createdAt)}
            />
          ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Writing;
