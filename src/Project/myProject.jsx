import Navbar from "../components/navbar";

export default function MyProject() {
  return (
    <div className="w-[73%] bg-gray-700 rounded-xl pb-10">
      <div className="flex justify-end relative">
        <div className="absolute left-10 top-8">
          <div className="text-2xl text-slate-200 theLine font-bold">
            My Projects
          </div>
        </div>
        <Navbar />
      </div>
      <div className="mt-16 mx-10">
        <div className="flex items-center justify-evenly flex-wrap gap-y-10">
          <div className="basis-2/5">
            <img
              src="./images/project_me1.jpg"
              alt="project_1"
              className="w-full bg-cover rounded-t-xl"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 1</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis
              </p>
            </div>
          </div>
          <div className="basis-2/5">
            <img
              src="./images/project_me1.jpg"
              alt="project_1"
              className="w-full bg-cover rounded-t-xl"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 2</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis
              </p>
            </div>
          </div>
          <div className="basis-2/5">
            <img
              src="./images/project_me1.jpg"
              alt="project_1"
              className="w-full bg-cover rounded-t-xl"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 1</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis
              </p>
            </div>
          </div>
          <div className="basis-2/5">
            <img
              src="./images/project_me1.jpg"
              alt="project_1"
              className="w-full bg-cover rounded-t-xl"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 2</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
