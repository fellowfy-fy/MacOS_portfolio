import { Navbar, Welcome, Dock } from "#components/index";
import { Terminal, Safari, Resume, Calender } from "#windows/index";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      {/* UI Components */}
      <Navbar />
      <Welcome />
      <Dock />
      {/* Windows */}
      <Terminal />
      <Safari />
      <Resume />
      <Calender />
    </main>
  );
};

export default App;
