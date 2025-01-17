import "./styles.css";
import Background from "./components/Background";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#090B1F] text-white relative overflow-hidden">
      <Background />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14">
        <Header />
        <div id="about">
          <Hero />
        </div>

        <div className="mt-14">
          <div id="experience">
            <WorkExperience />
          </div>
        </div>
        <div className="mt-14">
          <div id="tech">
            <TechStack />
          </div>
        </div>
        <div className="mt-14">
          <Projects />
        </div>
        <div className="mt-14">
          <div id="certificates">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
