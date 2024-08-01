import React, { useState } from "react";
import { ACCORDION } from "../../../utils";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { useSelector } from "react-redux";

const Accordion = () => {
  const { theme } = useSelector((state) => state.theme);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="my-12">
        <h2
          className={`text-4xl font-semibold ${
            theme === 'light' ? "text-black" : "text-green-600"
          }`}
        >
          Frequently Asked Questions
        </h2>
        <div className="my-8 flex flex-col items-start">
          {ACCORDION.map((accordionList, index) => (
            <div
              key={accordionList.id}
              className={`w-full flex flex-col items-start justify-between ${theme === 'light' ? 'border' : 'border border-green-500'} px-4 py-4 rounded-lg`}
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between w-full"
              >
                <span className="text-md font-semibold">
                  {accordionList.question}
                </span>
                <span>
                  {activeIndex === index ? (
                    <CiCircleChevDown className="text-2xl" />
                  ) : (
                    <CiCircleChevUp className="text-2xl" />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="grid overflow-hidden mt-2 transition-all ease-in-out duration-200">
                  <p className="text-sm text-gray-400 opacity-80">
                    {accordionList.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
