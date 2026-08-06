import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { datasProject } from "../../../data/dataProject";

export default function DetailProject() {
  const { id } = useParams();
  const myProject = datasProject.find((item) => item.id === id);

  return (
    <div className="mt-24 sm:mt-14">
      {myProject ? (
        <div key={myProject.id}>
          <Link
            className="transition-all hover:opacity-75"
            to={myProject.link_website}
            target="_blank"
          >
            <img
              src={myProject.source_image}
              alt={myProject.alt}
              className="object-cover rounded-xl"
              loading="eager"
            />
          </Link>
          <div className="py-5 rounded-b-lg">
            <h1 className="text-xl font-semibold text-white">
              {myProject.title_project}
            </h1>

            <p className="mt-2 font-medium text-justify text-slate-300">
              {myProject.desc_project}{" "}
              {myProject.id === "project1" && (
                <Link
                  to="https://trilogi.ac.id/journal/ks/index.php/JISA/article/view/2201"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  To Journal.
                </Link>
              )}
              {myProject.id === "project2" && (
                <div className="mt-3">
                  <h1>To try out the system, here is email and password:</h1>
                  <div className="flex flex-wrap items-center gap-5 mt-4">
                    <div>
                      <h1 className="mb-1 text-xl font-semibold">
                        Account Student
                      </h1>
                      <ul>
                        <li>Email : pelajar@gmail.com</li>
                        <li>Password : testPelajar123</li>
                      </ul>
                    </div>
                    <div>
                      <h1 className="mb-1 text-xl font-semibold">
                        Account Teacher
                      </h1>
                      <ul>
                        <li>Email : guruKu123@gmail.com</li>
                        <li>Password : myTeacher456</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>
          <Link
            className="bg-slate-500 py-1.5 px-6 rounded-lg hover:bg-slate-600 text-white"
            to="/Projects"
          >
            Back
          </Link>
        </div>
      ) : (
        <div className="h-[27rem] rounded-lg w-11/12 mx-auto p-7 animate-pulse mb-5">
          <div className="w-11/12 h-56 mx-auto rounded-lg bg-slate-500 mb-7"></div>
          <div className="flex flex-col w-11/12 h-32 mx-auto rounded-lg bg-slate-500 justify-evenly">
            <h1 className="w-1/4 h-5 rounded-lg bg-slate-400 ml-7"></h1>
            <p className="w-11/12 h-16 mx-auto rounded-lg bg-slate-400"></p>
          </div>
        </div>
      )}
    </div>
  );
}
