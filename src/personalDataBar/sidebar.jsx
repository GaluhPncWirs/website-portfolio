import { textSideBar } from "../dataMapping/data";

export default function SideBar() {
  return (
    <div className="h-full w-1/4 fixed left-5 my-5 max-[640px]:hidden sm:block sm:h-1/3 sm:w-full sm:left-0">
      <div className="bg-gray-700 rounded-xl py-5 h-full sm:absolute sm:py-2 sm:mx-5 sm:flex sm:gap-x-1">
        <div className="flex flex-col justify-center items-center sm:basis-1/3">
          <img src="./images/profile.png" className="rounded-full w-1/2" />
          <h1 className="text-2xl mt-5 mb-4 font-semibold text-slate-400 sm:my-1 sm:text-xl">
            Galuh Panca Wirasa
          </h1>
          <div className="bg-slate-600 w-1/2 rounded-md sm:w-4/5">
            <h2 className="text-slate-300 font-bold text-center py-1">
              Web Developer
            </h2>
          </div>
        </div>
        <hr className="border-slate-500 border w-5/6 mx-auto mt-10 sm:hidden" />
        <div className="mt-5 mb-1 flex flex-col gap-y-3 items-center w-4/5 sm:w-2/3 mx-auto sm:mt-0 sm:mb-0 sm:flex-wrap sm:justify-center">
          {textSideBar.map((item) => (
            <div
              className="flex items-center gap-5 max-w-60 sm:max-w-52"
              key={item.id}
            >
              <img src={item.icon} className="w-[10%]" />
              <div className="sm:-ml-2">
                <h1 className="text-slate-400 font-semibold">
                  {item.nameAttr}
                </h1>
                <h2 className="text-slate-300 font-medium sm:text-sm">
                  {item.attribute}
                </h2>
              </div>
            </div>
          ))}
          <div className="flex justify-between -ml-6 mt-3">
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
        <div className="flex mt-7 justify-center gap-3 items-center sm:hidden">
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
