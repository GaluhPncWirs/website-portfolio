import HamburgerMenu from "../components/hamburgerMenu";
import Navbar from "../components/navbar";

export default function MainLayout({ propsTitle, children }) {
  return (
    <div className="bg-gray-700 rounded-xl pb-10 max-[640px]:w-full sm:mt-56 sm:w-full md:w-[64%] md:mt-0 lg:w-[73%]">
      <div className="flex justify-end relative max-[640px]:mb-10">
        <div className="basis-2/12 flex justify-center items-center sm:hidden">
          <HamburgerMenu />
        </div>
        <div className="absolute left-10 top-8 max-[640px]:top-20 max-[640px]:left-11">
          <h1 className="text-2xl text-slate-200 theLine font-bold">
            {propsTitle}
          </h1>
        </div>
        <Navbar />
      </div>
      {children}
    </div>
  );
}
