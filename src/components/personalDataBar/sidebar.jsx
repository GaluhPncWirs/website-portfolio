import Copyright from "../copyright";
import { textSideBar } from "../../data/data_icon";

export default function SideBar() {
  return (
    <div className="md:h-[96%] md:m-3 max-[640px]:hidden sm:block sm:w-full sm:static md:fixed md:w-1/3 lg:w-1/4">
      <div className="bg-gray-700 rounded-xl sm:absolute sm:p-3 sm:mx-3 sm:flex sm:gap-x-2 sm:mt-5 sm:h-1/3 md:static md:p-0 md:mx-0 md:flex-col md:gap-x-0 md:mt-0 md:h-full md:py-3 sm:w-[96%]">
        <div className="flex flex-col justify-center items-center sm:basis-1/3 md:w-full md:gap-y-1">
          <img
            src="/images/foto_galuh.jpg"
            className="rounded-full md:w-2/5 sm:w-[45%] object-cover"
          />
          <h1 className="font-semibold text-slate-400 sm:my-1 md:my-2 sm:text-lg md:text-xl">
            Galuh Panca Wirasa
          </h1>
          <div className="bg-slate-600 w-1/2 rounded-md sm:w-4/5 md:w-2/3">
            <h2 className="text-slate-300 font-bold text-center py-0.5">
              Web Developer
            </h2>
          </div>
        </div>
        <hr className="border-slate-500 border w-5/6 mx-auto mt-10 sm:hidden md:block md:my-4" />
        <div className="flex flex-col md:items-center sm:basis-2/3 sm:justify-around sm:flex-wrap sm:gap-3 md:flex-nowrap md:w-full md:gap-5 md:justify-center lg:gap-4 xl:gap-5">
          {textSideBar.map((item) => (
            <div
              className="flex items-center lg:max-w-56 sm:max-w-52 sm:gap-x-3"
              key={item.id}
            >
              <img src={item.icon} className="w-[10%]" />
              <div>
                <h1 className="text-slate-400 font-semibold">
                  {item.nameAttr}
                </h1>
                <p className="text-slate-300 font-medium sm:text-sm lg:text-base xl:text-lg">
                  {item.attribute}
                </p>
              </div>
            </div>
          ))}
          <Copyright />
        </div>
      </div>
    </div>
  );
}
