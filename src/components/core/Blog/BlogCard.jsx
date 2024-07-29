import { Link } from "react-router-dom";

const BlogCard = ({ id, image, title, tag, created }) => {
  return (
    <Link to={id}>
      <div className="w-[360px] px-4 py-4 border rounded-lg">
        <img src={image} alt="blog" className="w-[350px] h-[180px] rounded-lg" />
        <h2 className="text-[24px] font-bold mt-[16px]">{title}</h2>

        <div className="flex items-center justify-between gap-2">
          <p className="text-[16px] text-gray-500">{tag}</p>

          <p className="text-[10px] text-gray-500">{created}</p>

        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
