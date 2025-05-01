import { Link, useParams } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import { project } from "../dataMapping/data";

export default function MyProject() {
  const tes = useParams();

  console.log(tes.id);
  return (
    <MainLayout propsTitle="My Project">
      <div className="mt-16 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 md:mx-0 lg:mx-10">
        <div className="flex items-center justify-evenly flex-wrap gap-y-10 max-[640px]:flex-col">
          {project.map((item) => (
            <Link
              className="basis-2/5 hover:scale-105 transition-all cursor-pointer"
              to={`/detailproject/${item.id}`}
              key={item.id}
            >
              <img
                src={item.sourceImage}
                alt={item.alt}
                className="w-full bg-cover rounded-t-xl"
              />
              <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
                <h1 className="text-white font-semibold text-xl">
                  {item.titleProject}
                </h1>
                <p className="text-slate-300 font-medium mt-2 text-justify">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
          {/* <div className="basis-2/5">
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
          </div> */}
        </div>
      </div>
    </MainLayout>
  );
}
