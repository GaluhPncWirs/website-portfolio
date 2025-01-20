import MainLayout from "../layout/main-layout";

export default function MyProject() {
  return (
    <MainLayout propsTitle="My Project">
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
              alt="project_2"
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
              alt="project_3"
              className="w-full bg-cover rounded-t-xl"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 3</h1>
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
              alt="project_4"
              className="w-full bg-cover rounded-t-xl"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 4</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
