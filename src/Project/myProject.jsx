import Navbar from "../components/navbar";

export default function MyProject() {
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
      <div className="mt-16">
        <div className="flex justify-evenly">
          <img
            src="./images/project_me1.jpg"
            alt="project_1"
            className="w-1/3 rounded-xl"
          />
          <img
            src="./images/project_me1.jpg"
            alt="project_1"
            className="w-1/3 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
