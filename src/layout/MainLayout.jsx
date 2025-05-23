import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";
import MainSection from "../components/MainSection/MainSection";
import NavBar from "../components/Header/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

const sectionTitles = {
  about: "About Us | FutureEdge",
  service: "Services | FutureEdge",
  footer: "Contact Us | FutureEdge",
};

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract hash from URL
    const hash = location.hash ? location.hash.substring(1) : "";
    if (location.pathname === "/") {
      if (hash && sectionTitles[hash]) {
        document.title = sectionTitles[hash];
      } else {
        document.title = "FutureEdge";
      }
    }

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Use smooth scroll
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      // once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="">
      <header className="  bg-[#244135]">
        <nav className="w-11/12 mx-auto fixed top-2 left-0 right-0 z-200 bg-[#244135e1] rounded-full">
          <NavBar></NavBar>
        </nav>
      </header>

      <main className="relative ">
        <MainSection></MainSection>
      </main>

      <footer className=" bg-[#f1f7fa]">
        <section className=" w-11/12 mx-auto">
          <Footer></Footer>
        </section>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
