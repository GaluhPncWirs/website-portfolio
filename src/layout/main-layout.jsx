import HamburgerMenu from "../components/hamburgerMenu";
import Navbar from "../components/navbar";

export default function MainLayout({ propsTitle, children }) {
  return (
    <div className="bg-gray-700 rounded-xl pb-10 max-[640px]:w-full sm:w-full sm:mt-4 md:w-[64%] md:mt-0 lg:w-[73%] xl:h-screen">
      <div className="flex justify-end relative max-[640px]:mb-10">
        <div className="basis-2/12 flex justify-center items-center sm:hidden">
          <HamburgerMenu />
        </div>
        <div className="absolute left-8 top-8 max-[640px]:top-20 max-[640px]:left-12">
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
