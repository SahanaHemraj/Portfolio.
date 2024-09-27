import React from "react";
import PageTitle from "../../Share/PageTitle";
import ResumeCardTwo from "./ResumeCardTwo"; // Assuming this is where your experience code is defined
import Footer from "../../Share/Footer";
const ContactTwo = () => {
  return (
    <>
      <PageTitle title="Experience" />
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
          {/* End .container */}

          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  );
};

export default ContactTwo;


