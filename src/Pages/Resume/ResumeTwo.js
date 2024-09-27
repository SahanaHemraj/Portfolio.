import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import LineItem from "./LineItem";
import ResumeCardTwo from "./ResumeCardTwo";
import { MdOutlineBusinessCenter } from "react-icons/md";

const ResumeTwo = () => {
  const { lineArray } = UseData();
  return (
    <>
      <PageTitle title="Resume" />
      {/* End pagetitle */}

      <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="py-5 px-4 md:px-0">
    
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-6 mt-[30px]">
                {/* Resume items map */}
                <ResumeCardTwo />
              </div>
            </div>
          </div>
          
          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  );
};

export default ResumeTwo;
