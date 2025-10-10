import { useParams } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import { Link } from "react-router-dom";
import { datasProject } from "../../data/dataProject";

export default function DetailProject() {
  const { id } = useParams();
  const myProject = datasProject.find((item) => item.id === id);

  return (
    <MainLayout propsTitle="My Project">
      <div className="mt-16 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 sm:mx-3 md:mx-5 lg:mx-10">
        {myProject ? (
          <div key={myProject.id} className="mb-5">
            <Link
              className="flex items-center justify-center hover:opacity-75 transition w-11/12 mx-auto"
              to={myProject.link_website}
              target="_blank"
            >
              <img
                src={myProject.source_image}
                alt={myProject.alt}
                className="object-cover rounded-xl w-full max-h-80"
              />
            </Link>
            <div className="px-6 py-5 rounded-b-lg">
              <h1 className="text-white font-semibold text-xl">
                {myProject.title_project}
              </h1>

              <p className="text-slate-300 font-medium mt-2 text-justify">
                {myProject.desc_project}{" "}
                {myProject.id === "project2" && (
                  <Link
                    to="https://trilogi.ac.id/journal/ks/index.php/JISA/article/view/2201"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                  >
                    To Journal.
                  </Link>
                )}
                {myProject.id === "project4" && (
                  <div className="mt-3">
                    <h1>
                      To try out the system, here is the email and password:
                    </h1>
                    <div className="flex mt-4 items-center flex-wrap gap-5">
                      <div>
                        <h1 className="font-semibold text-xl mb-1">
                          Account Student
                        </h1>
                        <ul>
                          <li>Email : 123@gmail.com</li>
                          <li>Password : 12345</li>
                        </ul>
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl mb-1">
                          Account Teacher
                        </h1>
                        <ul>
                          <li>Email : rohmanAjah345@gmail.com</li>
                          <li>Password : anakgaul123</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </p>
            </div>
          </div>
        ) : (
          <div className="h-[27rem] rounded-lg w-11/12 mx-auto p-7 animate-pulse mb-5">
            <div className="bg-slate-500 h-56 rounded-lg w-11/12 mx-auto mb-7"></div>
            <div className="bg-slate-500 h-32 rounded-lg w-11/12 mx-auto flex justify-evenly flex-col">
              <h1 className="bg-slate-400 h-5 w-1/4 rounded-lg ml-7"></h1>
              <p className="bg-slate-400 h-16 w-11/12 rounded-lg mx-auto"></p>
            </div>
          </div>
        )}
        <Link
          className="bg-slate-500 py-1.5 px-6 ml-5 rounded-lg hover:bg-slate-600 text-white"
          to="/Project"
        >
          Back
        </Link>
      </div>
    </MainLayout>
  );
}
