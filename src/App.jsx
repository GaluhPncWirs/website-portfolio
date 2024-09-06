import MainContent from "./components/mainContent";
import SideBar from "./components/sidebar";

export default function App() {
  return (
    <div>
      <div className="bg-slate-800 h-screen flex justify-center gap-5 w-full py-5 font-quickSand">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}
