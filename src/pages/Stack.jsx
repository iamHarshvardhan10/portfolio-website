import { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Loading from "../components/common/Loading";
import toast, { Toaster } from "react-hot-toast";

const Stack = () => {
  const [stack, setStack] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiURL}/api/portfolio/getportfolio`);
        const data = await res.json();
        if (res.ok) {
          setStack(data.data.stack);
        } else {
          setError(true);
          toast.error("Error While Fetching Data");
        }
      } catch (error) {
        console.log(error.message);
        setError(true);
        toast.error("Error While Fetching Data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiURL]);

  return (
    <div className="px-[36px]">
      {loading && <Loading />}
      <Toaster />
      <h1 className="text-[48px] font-semibold">Stack</h1>
      <p className="text-[16px] mt-[24px] font-medium">
        TechStack / Tools I use & love that you should check out.
      </p>
      <div className="mt-[52px] flex items-center flex-wrap gap-2 min-w-[750px] ">
        {stack &&
          stack.length > 0 &&
          stack.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-2 mt-2 border px-2 py-2 w-[220px] rounded-md hover:bg-gray-200 cursor-pointer"
            >
              <img
                src={item.stackLogo}
                alt="stack"
                className="w-[50px] h-[50px] rounded-md border bg-gray-950 object-fill"
              />
              <div>
                <h2 className="text-[14px] uppercase font-bold">
                  {item.stackName}
                </h2>
                <p className="text-[12px] text-[#747679] capitalize font-semibold">
                  {item.stackDescription}
                </p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Stack;
