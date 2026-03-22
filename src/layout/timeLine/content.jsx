export default function LayoutTimeLine({ children }) {
  return (
    <div className="flex gap-x-3 [print-color-adjust:exact] -webkit-print-color-adjust:exact">
      <div className="basis-[7%] lg:basis-[5%] flex justify-center">
        <div className="w-0.5 h-full mt-3 bg-white rounded-t-lg rounded-b-lg flex flex-col items-center print:bg-slate-300">
          <div className="w-3 h-3 rounded-full bg-[#E3C775] mt-7 print:bg-black print:mt-6"></div>
        </div>
      </div>
      <div className="basis-5/6">
        <div className="mt-6 sm:mt-8 print:mt-6">{children}</div>
      </div>
    </div>
  );
}
