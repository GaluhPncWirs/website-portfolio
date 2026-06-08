import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Copyright from "../copyright/content";
import { textSideBar } from "../../../data/data_icon";

export default function HamburgerMenu() {
  const [isCheked, setIsCheked] = useState(false);
  const clickOutsidePath = useRef(null);

  useEffect(() => {
    function handleOutsideHamburgerMenu(event) {
      if (
        clickOutsidePath.current &&
        !clickOutsidePath.current.contains(event.target)
      ) {
        setIsCheked(false);
      }
    }

    window.addEventListener("click", handleOutsideHamburgerMenu);

    return () => {
      window.removeEventListener("click", handleOutsideHamburgerMenu);
    };
  }, []);

  return (
    <div ref={clickOutsidePath} className="print:hidden">
      <div
        className={`z-[9999] transition-all top-20 w-full rounded-r-xl py-7 duration-300 absolute border shadow-2xl bg-slate-900/80 backdrop-blur-xl border-white/30 rounded-3xl text-slate-300 ${
          isCheked ? "-translate-x-10" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/foto_galuh.jpg"
            className="rounded-full max-[640px]:w-1/3 object-cover"
          />
          <h1 className="mt-5 mb-4 text-2xl font-semibold text-slate-400">
            Galuh Panca Wirasa
          </h1>
          <div className="w-1/2 rounded-md bg-slate-600">
            <h2 className="py-1 font-bold text-center text-slate-300">
              Web Developer
            </h2>
          </div>
        </div>

        <hr className="w-3/4 mx-auto mt-10 border border-slate-500" />
        <div className="flex flex-col items-center w-4/5 mx-auto mt-5 gap-y-3">
          {textSideBar.map((item) => (
            <div className="flex items-center gap-5 max-w-60" key={item.id}>
              <img src={item.icon} className="w-[10%]" />
              <div>
                <h1 className="font-semibold text-slate-400">
                  {item.nameAttr}
                </h1>
                <h2 className="font-medium text-slate-300">{item.attribute}</h2>
              </div>
            </div>
          ))}
        </div>
        <Copyright />
      </div>
      <div className="flex flex-col justify-between h-5 menu">
        <input
          type="checkbox"
          className="absolute z-20 opacity-0 cursor-pointer size-5"
          checked={isCheked}
          onChange={() => setIsCheked((prev) => !prev)}
        />
        <span className="block w-6 h-1 transition-all bg-white rounded-md"></span>
        <span className="block w-6 h-1 transition-all bg-white rounded-md"></span>
        <span className="block w-6 h-1 transition-all bg-white rounded-md"></span>
      </div>
    </div>
  );
}
