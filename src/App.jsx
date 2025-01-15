import "./styles.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090B1F] text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14">
        <Header />
        <div className="mt-14">
          <WorkExperience />
        </div>
        <div className="mt-14">
          <TechStack />
        </div>
        <div className="mt-14">
          <Projects />
        </div>
        <div className="mt-14">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
