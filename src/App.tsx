import { Navbar, Welcome, Dock } from "#components/index";
import { Terminal, Safari } from "#windows/index";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
    </main>
  );
};

export default App;
