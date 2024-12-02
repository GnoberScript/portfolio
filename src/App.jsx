import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-[#090B1F] h-full overflow-x-hidden">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <Header />

        <div className="mt-14">
          <WorkExperience />
        </div>
        <div className="mt-14">
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default App;
