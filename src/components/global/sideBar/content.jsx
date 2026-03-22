import Copyright from "../copyright/content";
import { textSideBar } from "../../../data/data_icon";

export default function SideBar() {
  return (
    <div className="hidden sm:block md:fixed md:h-[96%] md:w-1/3 lg:w-1/4 print:relative print:block print:w-full print:h-auto print:mb-5">
      <div className="bg-gray-700 rounded-xl sm:p-3 md:h-full md:p-0 md:flex md:flex-col md:justify-evenly print:bg-white print:border print:border-slate-200 print:rounded-none print:p-5">
        <div className="sm:flex sm:justify-around md:flex-col items-center gap-3 print:flex-col print:items-start print:gap-5">
          {/* Profil Section */}
          <div className="flex flex-col justify-center items-center print:flex-row print:gap-4 print:items-center">
            <img
              src="/images/foto_galuh.jpg"
              className="rounded-full size-36 object-cover print:size-24"
              loading="eager"
            />
            <div className="flex flex-col items-center print:items-start">
              <h1 className="font-semibold text-slate-400 sm:my-2 sm:text-xl xl:text-2xl print:text-black print:text-2xl print:m-0">
                Galuh Panca Wirasa
              </h1>
              <div className="bg-slate-600 w-full rounded-md print:bg-transparent print:w-auto">
                <h2 className="text-slate-300 font-bold text-center py-1 xl:py-1.5 xl:text-lg print:text-blue-600 print:p-0 print:text-left">
                  Web Developer
                </h2>
              </div>
            </div>
          </div>

          <hr className="border-slate-500 border w-5/6 mx-auto sm:hidden md:block md:my-4 print:hidden" />

          {/* Info Details Section */}
          <div className="flex flex-col md:items-center sm:justify-around sm:gap-2.5 md:gap-5 md:justify-center lg:gap-4 xl:gap-5 print:grid print:grid-cols-2 print:gap-x-8 print:gap-y-5 print:place-content-center print:w-full">
            {textSideBar.map((item) => (
              <div
                className="flex items-center sm:gap-x-3 xl:gap-x-4 w-full print:gap-x-2"
                key={item.id}
              >
                {/* Icon disembunyikan di print jika tidak perlu, atau dikecilkan */}
                <img
                  src={item.icon}
                  className="size-6 print:size-4 print:grayscale"
                  loading="eager"
                />
                <div>
                  <h1 className="text-slate-400 font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl print:text-slate-500 print:text-xs print:uppercase">
                    {item.nameAttr}
                  </h1>
                  <p className="text-slate-300 font-medium text-sm sm:text-sm xl:text-base 2xl:text-lg print:text-black print:text-sm">
                    {item.attribute}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright disembunyikan di print agar lebih bersih */}
        <div className="print:hidden">
          <Copyright />
        </div>
      </div>
    </div>
  );
}
