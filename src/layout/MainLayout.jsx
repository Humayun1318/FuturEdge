
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";
import MainSection from "../components/MainSection/MainSection";


const MainLayout = () => {
  return (
    <div className="space-y-4 ">
      <header className="  bg-[#244135]">
        <nav className="w-11/12 mx-auto border border-red-500">
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="border border-yellow-500 w-11/12 mx-auto">
        <MainSection></MainSection>
      </main>
      <footer className=" bg-[#f1f7fa]">
        <section className="border border-green-500 w-11/12 mx-auto">
          <Footer></Footer>
        </section>
      </footer>
    </div>
  );
};

export default MainLayout;