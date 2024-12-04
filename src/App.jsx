import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./About_Me/mainContent";
import SideBar from "./SideBar/sidebar";
import Resume from "./resume/education";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="flex">
          <SideBar />
          <div className="flex w-full justify-end p-5 font-quickSand bg-slate-800">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
