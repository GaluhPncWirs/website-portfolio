export default function LayoutTimeLine({ children }) {
  return (
    <div className="flex gap-x-5">
      <div className="max-[640px]:basis-[7%] sm:basis-[7%] lg:basis-[5%] flex justify-center">
        <div className="w-0.5 h-full mt-3 bg-white rounded-t-lg rounded-b-lg flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[#E3C775] mt-7"></div>
        </div>
      </div>
      <div className="basis-5/6">
        <div className="mt-8 max-[640px]:mt-6">{children}</div>
      </div>
    </div>
  );
}
