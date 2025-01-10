import Navbar from "../components/navbar";

export default function ContactMe() {
  return (
    <div className="w-[73%] bg-gray-700 rounded-xl pb-10 h-screen">
      <div className="flex justify-end relative">
        <div className="absolute left-10 top-8">
          <div className="text-2xl text-slate-200 theLine font-bold">
            My Projects
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
