import { useParams } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import { project } from "../../dataMapping/data";

export default function DetailProject() {
  const { id } = useParams();

  const detail = project.find((p) => p.id === id);

  if (!detail) return <h1>tidak ditemukan</h1>;

  return (
    <MainLayout propsTitle="My Project">
      <div className="mt-16 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 md:mx-0 lg:mx-10">
        {/* <div className="flex items-center justify-evenly flex-wrap gap-y-10 max-[640px]:flex-col">
          <a
            className="basis-2/5 hover:scale-105 transition-all cursor-pointer"
            href=""
          >
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
          </a>
        </div> */}
        testing
      </div>
    </MainLayout>
  );
}
