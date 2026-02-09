import { Link } from "react-router-dom";
import { datasProject } from "../../data/dataProject";

export default function Projects() {
  return (
    <div className="mt-16 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 sm:mx-12 lg:mx-0">
      <div className="flex items-center justify-evenly flex-wrap gap-y-10 max-[640px]:flex-col sm:flex-col lg:flex-row">
        {datasProject.map((item) => (
          <Link
            className="basis-2/5 hover:scale-105 transition-all cursor-pointer"
            to={`/Projects/detailProject/${item.id}`}
            key={item.id}
          >
            <img
              src={item.source_image}
              alt={item.alt}
              className="w-full hover:opacity-75 object-cover h-52 rounded-t-lg"
              loading="eager"
            />
            <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
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
