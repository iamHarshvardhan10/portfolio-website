import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Boutique from "./pages/Boutique";
import Writing from "./pages/Writing";
import Stack from "./pages/Stack";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sidebar from "./components/common/Sidebar";
import ProjectPage from "./components/core/Project/ProjectPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Sidebar />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
