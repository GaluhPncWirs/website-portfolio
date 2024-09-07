import MainContent from "./components/mainContent";
import SideBar from "./components/sidebar";

export default function App() {
  return (
    <div className="bg-slate-800">
      <div className="flex justify-end p-5 font-quickSand">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}
