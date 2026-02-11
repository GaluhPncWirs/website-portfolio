import HamburgerMenu from "../../components/global/hamburgerMenu/content";
import Navbar from "../../components/global/navbar/content";

export default function MainLayout({ propsTitle, children }) {
  return (
    <div className="bg-gray-700 rounded-xl pb-10 w-full mt-4 md:w-[64%] md:mt-0 lg:w-[73%]">
      <div className="flex justify-end relative mb-10 sm:mb-0">
        <div className="basis-2/12 flex justify-center items-center sm:hidden">
          <HamburgerMenu />
        </div>
        <div className="absolute top-20 left-12 sm:top-8 sm:left-8">
          <h1 className="text-2xl text-slate-200 theLine font-bold">
            {propsTitle}
          </h1>
        </div>
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto">{children}</div>
    </div>
  );
}
