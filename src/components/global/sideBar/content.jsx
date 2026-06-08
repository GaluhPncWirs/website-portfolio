import Copyright from "../copyright/content";
import { textSideBar } from "../../../data/data_icon";

export default function SideBar() {
  return (
    <div className="hidden sm:block md:fixed md:h-[96%] md:w-1/3 lg:w-1/4 xl:max-w-sm print:relative print:block print:w-full print:h-auto print:mb-5">
      <div className="border shadow-2xl bg-slate-900/80 backdrop-blur-xl border-white/30 rounded-3xl sm:p-3 md:h-full md:p-0 md:flex md:flex-col md:justify-evenly print:bg-white print:border print:border-slate-200 print:rounded-none print:p-5">
        <div className="items-center gap-3 sm:flex sm:justify-around md:flex-col print:flex-col print:items-start print:gap-5">
          {/* Profil Section */}
          <div className="flex flex-col items-center justify-center print:flex-row print:gap-4 print:items-center">
            <img
              src="/images/foto_galuh.jpg"
              className="object-cover border-4 rounded-full shadow-xl size-36 xl:size-40 border-slate-500/30 print:size-24"
              loading="eager"
            />
            <div className="flex flex-col items-center print:items-start">
              <h1 className="font-semibold text-slate-400 sm:my-2 sm:text-xl print:text-black print:text-2xl print:m-0">
                Galuh Panca Wirasa
              </h1>
              <div className="w-full rounded-md bg-slate-700 print:bg-transparent print:w-auto">
                <h2 className="py-1 font-bold text-center text-slate-300 print:text-blue-600 print:p-0 print:text-left">
                  Web Developer
                </h2>
              </div>
            </div>
          </div>

          <hr className="w-4/5 mx-auto border border-slate-500 sm:hidden md:block md:my-3 print:hidden" />

          {/* Info Details Section */}
          <div className="flex flex-col md:items-center sm:justify-around sm:gap-2.5 md:gap-5 md:justify-center lg:gap-4 xl:gap-5 print:grid print:grid-cols-2 print:gap-x-8 print:gap-y-5 print:place-content-center print:w-full">
            {textSideBar.map((item) => (
              <div
                className="flex items-center w-full sm:gap-x-3 xl:gap-x-4 print:gap-x-2"
                key={item.id}
              >
                <img
                  src={item.icon}
                  className="size-6 print:size-4 print:grayscale"
                  loading="eager"
                />
                <div>
                  <h1 className="text-sm font-semibold text-slate-400 sm:text-base xl:text-lg print:text-slate-500 print:text-xs print:uppercase">
                    {item.nameAttr}
                  </h1>
                  <p className="text-sm font-medium text-slate-300 sm:text-sm xl:text-base print:text-black print:text-sm">
                    {item.attribute}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="print:hidden">
          <Copyright />
        </div>
      </div>
    </div>
  );
}
