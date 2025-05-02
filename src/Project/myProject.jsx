import { Link } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import { project } from "../dataMapping/data";

export default function MyProject() {
  return (
    <MainLayout propsTitle="My Project">
      <div className="mt-16 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 md:mx-0 lg:mx-10">
        <div className="flex items-center justify-evenly flex-wrap gap-y-10 max-[640px]:flex-col">
          {project.map((item) => (
            <Link
              className="basis-2/5 hover:scale-105 transition-all cursor-pointer"
              to={`/Project/detailProject/${item.id}`}
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
        </div>
      </div>
    </MainLayout>
  );
}
