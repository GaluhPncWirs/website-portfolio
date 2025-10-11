import Copyright from "../copyright";
import { textSideBar } from "../../data/data_icon";

export default function SideBar() {
  return (
    <div className="max-[640px]:hidden sm:block md:fixed md:h-[96%] md:w-1/3 lg:w-1/4">
      <div className="bg-gray-700 rounded-xl sm:p-3 md:h-full md:p-0 md:flex md:flex-col md:justify-evenly">
        <div className="sm:flex sm:justify-around md:flex-col">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/images/foto_galuh.jpg"
              className="rounded-full md:w-2/5 sm:w-3/5 object-cover"
            />
            <h1 className="font-semibold text-slate-400 sm:my-2 sm:text-xl md:text-xl xl:text-2xl">
              Galuh Panca Wirasa
            </h1>
            <div className="bg-slate-600 w-1/2 rounded-md sm:w-full md:w-2/3 ">
              <h2 className="text-slate-300 font-bold text-center py-1 xl:py-1.5 xl:text-lg">
                Web Developer
              </h2>
            </div>
          </div>
          <hr className="border-slate-500 border w-5/6 mx-auto sm:hidden md:block md:my-5" />
          <div className="flex flex-col md:items-center sm:justify-around sm:gap-2 md:gap-5 md:justify-center lg:gap-4 xl:gap-5">
            {textSideBar.map((item) => (
              <div
                className="flex items-center lg:max-w-56 sm:max-w-52 sm:gap-x-3 xl:min-w-64 xl:gap-x-4 2xl:min-w-72"
                key={item.id}
              >
                <img src={item.icon} className="w-[10%]" />
                <div>
                  <h1 className="text-slate-400 font-semibold xl:text-lg 2xl:text-xl">
                    {item.nameAttr}
                  </h1>
                  <p className="text-slate-300 font-medium sm:text-sm lg:text-base 2xl:text-lg">
                    {item.attribute}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
}
