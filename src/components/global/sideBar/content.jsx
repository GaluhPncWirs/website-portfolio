import Copyright from "../copyright/content";
import { textSideBar } from "../../../data/data_icon";

export default function SideBar() {
  return (
    <div className="hidden sm:block md:fixed md:h-[96%] md:w-1/3 lg:w-1/4">
      <div className="bg-gray-700 rounded-xl sm:p-3 md:h-full md:p-0 md:flex md:flex-col md:justify-evenly">
        <div className="sm:flex sm:justify-around md:flex-col items-center gap-3">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/images/foto_galuh.jpg"
              className="rounded-full size-36 object-cover"
              loading="eager"
            />
            <h1 className="font-semibold text-slate-400 sm:my-2 sm:text-xl xl:text-2xl">
              Galuh Panca Wirasa
            </h1>
            <div className="bg-slate-600 w-full rounded-md">
              <h2 className="text-slate-300 font-bold text-center py-1 xl:py-1.5 xl:text-lg">
                Web Developer
              </h2>
            </div>
          </div>
          <hr className="border-slate-500 border w-5/6 mx-auto sm:hidden md:block md:my-4" />
          <div className="flex flex-col md:items-center sm:justify-around sm:gap-2.5 md:gap-5 md:justify-center lg:gap-4 xl:gap-5">
            {textSideBar.map((item) => (
              <div
                className="flex items-center sm:gap-x-3 xl:gap-x-4 w-full"
                key={item.id}
              >
                <img src={item.icon} className="size-6" loading="eager" />
                <div>
                  <h1 className="text-slate-400 font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl">
                    {item.nameAttr}
                  </h1>
                  <p className="text-slate-300 font-medium text-sm sm:text-sm xl:text-base 2xl:text-lg">
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
