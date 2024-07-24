import { FOLLOW } from "../../../utils";
import * as Icons from "react-icons/fa";
const Follow = () => {
  return (
    <div className="flex items-center px-4">
      {FOLLOW.map((ele, index) => {
        return (
          <div key={index}>
            <h1 className="uppercase text-[12px] font-bold text-[#747679]">
              {ele.tag}
            </h1>
            {ele.followList.map((follow) => {
              const Icon = Icons[follow.icon];
              return (
                <div
                  key={follow.name}
                  className="mt-4 text-[14px] text-[#747679] font-medium hover:text-gray-900"
                >
                  <a href={follow.path} className="flex items-center gap-2">
                    <Icon />
                    {follow.name}
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Follow;
