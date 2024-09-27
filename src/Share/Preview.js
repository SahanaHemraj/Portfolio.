import React from "react";
import homeonelight from "../assets/images/preview/homeonelight.png";
import homeonedark from "../assets/images/preview/homeonedark.png";
import hometwolight from "../assets/images/preview/hometwolight.png";
import hometwodark from "../assets/images/preview/hometwodark.png";
import previewimg from "../assets/images/preview/preview.png";

// ******************************************************
import reactLogo from "../assets/images/preview/fatures/1.png";
import reactRouterLogo from "../assets/images/preview/fatures/2.png";
import tailwindLogo from "../assets/images/preview/fatures/3.png";
import reactHooksLogo from "../assets/images/preview/fatures/4.png";
import apiReadyLogo from "../assets/images/preview/fatures/5.png";
import reactIconLogo from "../assets/images/preview/fatures/6.png";
import reactHelmetLogo from "../assets/images/preview/fatures/7.png";
import reactToastifyLogo from "../assets/images/preview/fatures/8.png";
import workingForm from "../assets/images/preview/fatures/9.png";

// ***************************************************
import { Link } from "react-router-dom";
import UseData from "../Hooks/UseData";
import PageTitle from "./PageTitle";
// ***************************************************

const Preview = () => {
  const { handleTheme } = UseData();

  // dark and light mode control

  const handle = (e) => {
    handleTheme(e);
  };

  // preview Home page element

  const previewArray = [
    {
      img: homeonelight,
      title: "Box Layout (Light)",
      link: "/homeTwo",
      id: "1",
    },
    {
      img: homeonedark,
      title: "Box Layout (Dark)",
      link: "/homeTwo",
      id: "2",
    },
    {
      img: hometwolight,
      title: "Regular Layout (Light)",
      link: "/home",
      id: "3",
    },
    {
      img: hometwodark,
      title: "Regular Layout (Dark)",
      link: "/home",
      id: "4",
    },
  ];

  // features array

  const features = [
    {
      icon: reactLogo,
      dataDealy: "0",
      title: "React v18+",
      description:
        "We used latest react vertion ^18. Max Components are Reusable for you. It's a awesome design made by React.",
    },
    {
      icon: reactRouterLogo,
      dataDealy: "100",
      title: "React Router v6+",
      description:
        "It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling",
    },
    {
      icon: tailwindLogo,
      dataDealy: "200",
      title: "Tailwind v3+",
      description:
        "Tailwind CSS is basically a modern,trending and utility-first CSS framework for rapidly building custom user interfaces.",
    },

    {
      icon: reactIconLogo,
      dataDealy: "200",
      title: "React Icon",
      description:
        "React-icons uses ES6 features to import the icons into your React app. And it makes it so that only the icons you actually use from each library get imported.",
    },
    {
      icon: reactHooksLogo,
      dataDealy: "0",
      title: "React Hooks",
      description:
        "It allows you to use state and other React features without writing a class. Hooks are the functions which hook into React state and lifecycle features from function components.",
    },
    {
      icon: apiReadyLogo,
      dataDealy: "100",
      title: "Api Ready Code",
      description:
        "We made all the code with Array of Object based. so you can prepare for your api call whenever you want for it",
    },

    {
      icon: reactHelmetLogo,
      dataDealy: "0",
      title: "React Helmet-Async",
      description:
        "React Helmet Async is a component which lets you control your document head using their React component. With this plugin, attributes you add in their component, e.g. title, meta attributes",
    },
    {
      icon: reactToastifyLogo,
      dataDealy: "100",
      title: "React Toastify",
      description:
        "React-Toastify allows you to add notifications to your app with easy and comfortable way",
    },
    {
      icon: workingForm,
      dataDealy: "200",
      title: "Working Contact Form",
      description:
        "You will get working contact form without any type of Bakcend. We integrated it With Email js. just follow our documentation and integrate it easy way",
    },
  ];

  return (
    <>
      <PageTitle title="Preview"></PageTitle>
     
      {/* End .bg-previewBg */}

      <section
        className="bg-[#000000] bg-no-repeat bg-center bg-cover bg-fixed"
        id="demo"
      >
        
        {/* End .container */}

        <div
          className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-auto gap-5 md:gap-[40px] pb-[100px]  "
          data-aos="fade"
        >
          {/* previewimg element start */}
          {previewArray.map((item) => {
            const mode = item.id % 2 === 0 ? "dark" : "light";
            return (
              <div
                onClick={() => handle(mode)}
                className="text-center w-full mx-auto shadow-zinc-400  rounded-[12px] border-4 border-slate-800 border-solid duration-500 transition   hover:border-slate-500"
                key={item.id}
              >
                <Link to={item.link} target="_blank">
                  <img
                    className=" w-full  cursor-pointer "
                    src={item.img}
                    alt=""
                  />
                </Link>
                <h3 className="bg-gradient-to-r bg-slate-900 rounded-b-[6px] w-full font-medium text-white capitalize py-4  text-[20px]    ">
                  {item.title}
                </h3>
              </div>
            );
          })}

          {/* previewimg element start */}
        </div>
      </section>

      {/* Features section start */}
      <section className="bg-[#111111]">
        <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
          <h1 className="text-[#FA5252] text-[32px] md:text-[45px] font-semibold ">
            Salient Features
          </h1>
          <img className=" block mx-auto " src={previewimg} alt="" />
        </div>
        {/* End .container  */}

        <div className=" container px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-[100px] ">
          {/* features element */}
          {features.map((item) => (
            <div
              key={Math.random()}
              className="bg-slate-800 text-center rounded-xl transition-all duration-300 ease-linear group p-8"
              data-aos="fade"
              data-aos-delay={item.dataDealy}
            >
              <div className="w-20 h-20 mx-auto rounded-full flex justify-center items-center transition-all duration-300 ease-linear bg-[#33343a] mb-5 group-hover:bg-[#525252]">
                <img className="w-12" src={item?.icon} alt="" />
              </div>
              <h3 className="text-white text-[24px] font-medium">
                {item?.title}
              </h3>
              <p className="text-[#9197a0] transition-all duration-300 ease-linear mt-3 group-hover:text-[#aaa] ">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Features section start */}

      {/* Start Call To Actions */}
      
      {/* End call to action */}

      {/* Start Footer */}
      
      {/* End footer */}
    </>
  );
};

export default Preview;
