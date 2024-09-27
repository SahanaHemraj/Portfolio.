import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import UseData from "../../Hooks/UseData";

const ResumeCardTwo = () => {
  const { experiencesArray } = UseData(); // Only keep experiencesArray
  const { local } = UseData();

  return (
    <div>
      {/* Experience section */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-7xl text-[#F95054]">
          <MdOutlineBusinessCenter />
        </div>
        <h4 className="text-7xl dark:text-white font-medium">Experience</h4>
      </div>

      {experiencesArray.map((item) => (
        <div
          className="py-6 pl-6 pr-4 space-y-2 mb-6 rounded-lg transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-700 dark:border-[#212425] dark:border-2"
          style={{
            background: local === "dark" ? "transparent" : item?.bg,
          }}
          key={item.id}
        >
          <span className="text-sm text-gray-lite dark:text-[#b7b7b7]">
            {item.date}
          </span>
          <h3 className="text-2xl font-semibold dark:text-white">{item.title}</h3>
          <p className="text-lg dark:text-[#b7b7b7]">{item.place}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeCardTwo;
