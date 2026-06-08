export default function LayoutWhatCanIDo(props) {
  const { children, imgSrc, imgAlt } = props;
  return (
    <div className="p-6 transition duration-300 border group rounded-2xl bg-slate-800/50 backdrop-blur border-white/20 hover:-translate-y-2 hover:border-white print:bg-white print:border print:border-slate-200 print:rounded-lg print:break-inside-avoid">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="size-11 sm:mt-3 print:grayscale print:size-10"
          loading="eager"
        />
        <div className="flex flex-col justify-center text-slate-200 print:text-black">
          {children}
        </div>
      </div>
    </div>
  );
}
