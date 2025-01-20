import Navbar from "../components/navbar";

export default function MainLayout({ propsTitle, children }) {
  return (
    <div className="w-[73%] bg-gray-700 rounded-xl pb-10">
      <div className="flex justify-end relative">
        <div className="absolute left-10 top-8">
          <div className="text-2xl text-slate-200 theLine font-bold">
            {propsTitle}
          </div>
        </div>
        <Navbar />
      </div>
      {children}
    </div>
  );
}
