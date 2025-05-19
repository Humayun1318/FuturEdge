import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";
import MainSection from "../components/MainSection/MainSection";
import NavBar from "../components/Header/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <header className="  bg-[#244135]">
        <nav className="w-11/12 mx-auto">
          <NavBar></NavBar>
        </nav>
      </header>

      <main className="relative -top-1">
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
