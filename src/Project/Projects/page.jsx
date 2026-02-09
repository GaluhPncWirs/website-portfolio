import { Link } from "react-router-dom";
import { datasProject } from "../../data/dataProject";

export default function Projects() {
  return (
    <div className="mt-24 sm:mt-14">
      <div className="grid place-items-center grid-cols-1 gap-y-10 lg:grid-cols-2">
        {datasProject.map((item) => (
          <Link
            className="w-10/12 hover:scale-105 transition-all cursor-pointer"
            to={`/Projects/detailProject/${item.id}`}
            key={item.id}
          >
            <img
              src={item.source_image}
              alt={item.alt}
              className="w-full hover:opacity-75 object-cover h-52 rounded-t-md"
              loading="eager"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-md">
              <h1 className="text-white font-semibold text-xl">
                {item.title_project.substring(0, 45)} . . .
              </h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                {item.desc_project.substring(0, 150)} . . .
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
