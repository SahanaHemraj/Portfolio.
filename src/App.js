import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./Context/ContextProvider";
import About from "./Pages/About/About";
import AboutTwo from "./Pages/About/AboutTwo";
import Blog from "./Pages/Blog/Blog";
import BlogTwo from "./Pages/Blog/BlogTwo";
import Contact from "./Pages/Contact/Contact";
import ContactTwo from "./Pages/Contact/ContactTwo";
import Home from "./Pages/Home/Home";
import HomePage from "./Pages/Home/HomePage";
import HomeTwo from "./Pages/Home/HomeTwo";
import Portfilo from "./Pages/Portfilo/Portfilo";
import PortfiloTwo from "./Pages/Portfilo/PortfiloTwo";
import Resume from "./Pages/Resume/Resume";
import ResumeTwo from "./Pages/Resume/ResumeTwo";
import NotFound from "./Share/NotFound";
import Preview from "./Share/Preview";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<HomeTwo />}>
              <Route index element={<AboutTwo />} />
              <Route path="/homeTwo/about" element={<AboutTwo />} />
              <Route path="/homeTwo/resume" element={<ResumeTwo />} />
              <Route path="/homeTwo/contact" element={<ContactTwo />} />
              <Route path="/homeTwo/blogs" element={<BlogTwo />} />
              <Route path="/homeTwo/works" element={<PortfiloTwo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
