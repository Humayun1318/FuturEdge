
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";
import MainSection from "../components/MainSection/MainSection";


const MainLayout = () => {
  return (
    <div className="space-y-4 ">
      <header className="border border-red-500 w-11/12 mx-auto">
        <NavBar></NavBar>
      </header>
      <main className="border border-yellow-500 w-11/12 mx-auto">
        <MainSection></MainSection>
      </main>
      <footer className="border border-green-500 w-11/12 mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;