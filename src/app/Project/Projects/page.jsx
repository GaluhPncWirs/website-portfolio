import { Link } from "react-router-dom";
import { datasProject } from "../../../data/dataProject";

export default function Projects() {
  return (
    <div className="mt-24 sm:mt-14">
      <div className="grid grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        {datasProject.map((item) => (
          <Link
            className="w-10/12 transition-all cursor-pointer hover:scale-105"
            to={`/Projects/detailProject/${item.id}`}
            key={item.id}
          >
            <img
              src={item.source_image}
              alt={item.alt}
              className="object-cover w-full hover:opacity-75 h-52 rounded-t-md"
              loading="eager"
            />
            <div className="px-6 py-5 border shadow-2xl bg-slate-900/80 backdrop-blur-xl rounded-b-3xl border-white/30">
              <h1 className="text-xl font-semibold text-white">
                {item.title_project.substring(0, 45)} . . .
              </h1>
              <p className="mt-2 font-medium text-justify text-slate-300">
                {item.desc_project.substring(0, 150)} . . .
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
