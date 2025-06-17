import { Link } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase/dataSupabase";
import { Helmet } from "react-helmet-async";

export default function MyProject() {
  const [dataProject, setDataProject] = useState([]);

  useEffect(() => {
    async function getDataProject() {
      const { data, error } = await supabase
        .from("for_Portfolio_myProject")
        .select("*");

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }
      setDataProject(data);
    }
    getDataProject();
  }, []);

  return (
    <>
      <Helmet>
        <title>Project | Portfolio Galuh Panca Wirasa</title>
        <meta
          name="description"
          content="berbagai proyek website dan aplikasi yang telah saya kembangkan, mulai dari landing page, sistem informasi, hingga aplikasi berbasis API dengan teknologi modern seperti React dan Next.js"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Proyek | Portfolio Galuh Panca Wirasa"
        />
        <meta
          property="og:description"
          content="Kumpulan proyek unggulan yang mencerminkan keterampilan saya dalam pengembangan web front-end dan back-end, menggunakan teknologi modern dan responsif."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Helmet>
      <MainLayout propsTitle="My Project">
        <div className="mt-16 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 md:mx-0 lg:mx-10">
          <div className="flex items-center justify-evenly flex-wrap gap-y-10 max-[640px]:flex-col">
            {dataProject.length > 0
              ? dataProject.map((item) => (
                  <Link
                    className="basis-2/5 hover:scale-105 transition-all cursor-pointer"
                    to={`/Project/detailProject/${item.id}`}
                    key={item.id}
                  >
                    <img
                      src={item.source_image}
                      alt={item.alt}
                      className="w-full rounded-t-xl hover:opacity-75 object-cover h-64"
                    />
                    <div className="bg-slate-600 px-6 py-5 rounded-b-lg">
                      <h1 className="text-white font-semibold text-xl">
                        {item.titleProject}
                      </h1>
                      <p className="text-slate-300 font-medium mt-2 text-justify">
                        {item.desc_project.substring(0, 100)}
                      </p>
                    </div>
                  </Link>
                ))
              : Array.from({ length: 4 }).map((_, i) => (
                  <div
                    className="w-2/5 h-72 rounded-lg bg-slate-500 p-4 animate-pulse"
                    key={i}
                  >
                    <div className="bg-slate-400 h-40 w-full rounded-lg"></div>
                    <div className="bg-slate-400 h-20 mt-3 rounded-lg"></div>
                  </div>
                ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
