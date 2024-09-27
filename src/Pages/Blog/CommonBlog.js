import React from "react";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
import { MdOutlineLightbulb } from "react-icons/md";
import PageTitle from "../../Share/PageTitle";

const CommonBlog = ({ items, count }) => {
  const { local } = UseData();
  const { singleData, handleBlogsData } = UseData();

  const blogDescriptionSplit = singleData?.description?.split("\n");

  return (
    <>
      <PageTitle title="Blog" />

      <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {/* Skills section */}
              <div className="col-span-1 pt-12 mb-12"> {/* Added pt-12 for padding above */}
                <div className="flex items-center space-x-2 mb-6"> {/* Space below title */}
                  <div className="text-7xl text-[#F95054]">
                    <MdOutlineLightbulb />
                  </div>
                  <h4 className="text-7xl dark:text-white font-medium">Skills</h4>
                </div>
                {/* Knowledge items */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <button className="resume-btn">AWS</button>
                  <button className="resume-btn">Flask</button>
                  <button className="resume-btn">Django</button>
                  <button className="resume-btn">PowerBI</button>
                  <button className="resume-btn">Tableau</button>
                  <button className="resume-btn">Git</button>
                  <button className="resume-btn">Pandas</button>
                  <button className="resume-btn">Numpy</button>
                  <button className="resume-btn">Postgresql</button>
                  <button className="resume-btn">MS Project</button>
                  <button className="resume-btn">Scikit-learn</button>
                  <button className="resume-btn">Tensorflow</button>
                </div>
              </div>
            </div>
          </div>
          {/* End .container */}
          {/* Common Footer call here */}
          <Footer condition={true} bg={"#F8FBFB"} />
        </div>
      </section>
    </>
  );
};

export default CommonBlog;
