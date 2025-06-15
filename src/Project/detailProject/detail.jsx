import { useParams } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase/dataSupabase";

export default function DetailProject() {
  const { id } = useParams();
  const [detailProject, setDetailProject] = useState([]);

  async function getSingelDataProject() {
    const { data, error } = await supabase
      .from("for_Portfolio_myProject")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    setDetailProject(data);
  }

  useEffect(() => {
    getSingelDataProject();
  }, [id]);

  console.log(detailProject);

  return (
    <MainLayout propsTitle="My Project">
      <div className="mt-16 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 md:mx-0 lg:mx-10">
        {id === "1" ? (
          <>
            <div className="flex items-center justify-center">
              <img
                src="/images/project_me2.jpg"
                alt="project_1"
                className="object-cover rounded-xl w-full max-h-80"
              />
            </div>
            <div className="px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 1</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Fugit iste quasi reiciendis perferendis unde aspernatur
                quos nam distinctio veritatis, ex recusandae eaque dolore ea
                provident officia laudantium, reprehenderit dicta id.
              </p>
            </div>
          </>
        ) : id === "2" ? (
          <>
            <div className="flex items-center justify-center">
              <img
                src="/images/project_me3.png"
                alt="project_3"
                className="object-cover rounded-xl w-full max-h-96"
              />
            </div>
            <div className="px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project 2</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eum, quia?
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center">
              <img
                src="/images/project_me1.jpg"
                alt="project_1"
                className="object-cover rounded-xl w-full max-h-96"
              />
            </div>
            <div className="px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">Project any</h1>
              <p className="text-slate-300 font-medium mt-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                minima debitis rem hic, voluptatibus quasi accusamus quidem
                corporis
              </p>
            </div>
          </>
        )}
        <Link
          className="bg-slate-500 py-1.5 px-6 rounded-lg hover:bg-slate-600 text-white"
          to="/Project"
        >
          Back
        </Link>
      </div>
    </MainLayout>
  );
}
