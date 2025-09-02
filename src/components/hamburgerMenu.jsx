import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Copyright from "./copyright";
import { textSideBar } from "../data/data_icon";

export default function HamburgerMenu() {
  const [isCheked, setIsCheked] = useState(false);
  const [sliderContent, setSliderContent] = useState(false);
  const clickOutsidePath = useRef(null);
  const clickOutsideOnHamburgerMenu = useRef(null);

  useEffect(() => {
    function handleOutsideHamburgerMenu(event) {
      if (
        clickOutsidePath.current &&
        !clickOutsidePath.current.contains(event.target) &&
        clickOutsideOnHamburgerMenu.current &&
        !clickOutsideOnHamburgerMenu.current.contains(event.target)
      ) {
        setSliderContent(true);
      }
    }

    window.addEventListener("click", handleOutsideHamburgerMenu);

    return () => {
      window.removeEventListener("click", handleOutsideHamburgerMenu);
    };
  }, []);

  useEffect(() => {
    if (sliderContent) {
      setIsCheked(false);
      setSliderContent(false);
    }
  }, [sliderContent]);

  return (
    <div>
      <div
        className={`z-[9999] transition-all top-20 w-full rounded-r-xl py-7 duration-300 absolute bg-gray-800 text-slate-300 ${
          isCheked ? "-translate-x-10" : "-translate-x-full"
        }`}
        ref={clickOutsidePath}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            src="/images/foto_galuh.jpg"
            className="rounded-full max-[640px]:w-1/3 object-cover"
          />
          <h1 className="text-2xl mt-5 mb-4 font-semibold text-slate-400">
            Galuh Panca Wirasa
          </h1>
          <div className="bg-slate-600 w-1/2 rounded-md">
            <h2 className="text-slate-300 font-bold text-center py-1">
              Web Developer
            </h2>
          </div>
        </div>

        <hr className="border-slate-500 border w-3/4 mx-auto mt-10" />
        <div className="mt-5 flex flex-col gap-y-3 items-center w-4/5 mx-auto">
          {textSideBar.map((item) => (
            <div className="flex items-center gap-5 max-w-60" key={item.id}>
              <img src={item.icon} className="w-[10%]" />
              <div>
                <h1 className="text-slate-400 font-semibold">
                  {item.nameAttr}
                </h1>
                <h2 className="text-slate-300 font-medium">{item.attribute}</h2>
              </div>
            </div>
          ))}
        </div>
        <Copyright />
      </div>
      <div className="menu flex flex-col h-5 justify-between">
        <input
          type="checkbox"
          className="size-5 absolute z-20 cursor-pointer opacity-0"
          checked={isCheked}
          ref={clickOutsideOnHamburgerMenu}
          onChange={() => {
            setIsCheked((prev) => !prev);
            setSliderContent(false);
          }}
        />
        <span className="block w-6 h-1 bg-white rounded-md transition-all"></span>
        <span className="block w-6 h-1 bg-white rounded-md transition-all"></span>
        <span className="block w-6 h-1 bg-white rounded-md transition-all"></span>
      </div>
    </div>
  );
}
