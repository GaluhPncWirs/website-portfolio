import { textSideBar } from "../dataMapping/data";

export default function SideBar() {
  return (
    <div className="h-full md:left-5 md:my-5 max-[640px]:hidden sm:block sm:w-full sm:left-0 sm:static sm:my-0 md:fixed md:w-1/4">
      <div className="bg-gray-700 rounded-xl py-5 sm:absolute sm:p-3 sm:mx-5 sm:flex sm:gap-x-3 sm:mt-5 sm:h-1/3 md:static md:p-0 md:mx-0 md:flex-col md:mt-0 md:h-full">
        <div className="flex flex-col justify-center items-center sm:basis-1/3">
          <img
            src="./images/profile.png"
            className="rounded-full w-1/2 sm:w-3/5"
          />
          <h1 className="text-2xl mt-5 mb-4 font-semibold text-slate-400 sm:my-3 sm:text-xl">
            Galuh Panca Wirasa
          </h1>
          <div className="bg-slate-600 w-1/2 rounded-md sm:w-4/5">
            <h2 className="text-slate-300 font-bold text-center py-1">
              Web Developer
            </h2>
          </div>
        </div>
        <hr className="border-slate-500 border w-5/6 mx-auto mt-10 sm:hidden md:block" />
        <div className="md:mt-5 md:mb-1 flex flex-col gap-y-3 items-center md:w-4/5 mx-auto sm:w-2/3 sm:mt-0 sm:mb-0 sm:justify-center sm:flex-wrap sm:gap-x-3 md:flex-nowrap">
          {textSideBar.map((item) => (
            <div
              className="flex items-center gap-5 md:max-w-60 sm:max-w-52"
              key={item.id}
            >
              <img src={item.icon} className="w-[10%]" />
              <div className="sm:-ml-2 lg:ml-0">
                <h1 className="text-slate-400 font-semibold">
                  {item.nameAttr}
                </h1>
                <h2 className="text-slate-300 font-medium sm:text-sm">
                  {item.attribute}
                </h2>
              </div>
            </div>
          ))}
          <div className="flex justify-between -ml-10 mt-3 md:hidden">
            <a
              className="flex justify-center"
              href="https://web.facebook.com/galuh.panca.79"
            >
              <img
                src="./images/icon-facebook.png"
                className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
              />
            </a>
            <a
              className="flex justify-center"
              href="https://www.instagram.com/galuhpncwirasa_/"
            >
              <img
                src="./images/icon-instagram.png"
                className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
              />
            </a>
            <a className="flex justify-center" href="https://www.linkedin.com/">
              <img
                src="./images/icon-linkedin.png"
                className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex mt-7 justify-center gap-3 items-center sm:hidden md:block">
          <a
            className="flex justify-center"
            href="https://web.facebook.com/galuh.panca.79"
          >
            <img
              src="./images/icon-facebook.png"
              className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
            />
          </a>
          <a
            className="flex justify-center"
            href="https://www.instagram.com/galuhpncwirasa_/"
          >
            <img
              src="./images/icon-instagram.png"
              className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
            />
          </a>
          <a className="flex justify-center" href="https://www.linkedin.com/">
            <img
              src="./images/icon-linkedin.png"
              className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
