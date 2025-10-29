export default function LayoutWhatCanIDo(props) {
  const { children, imgSrc, imgAlt } = props;
  return (
    <div className="w-3/4 bg-slate-600 rounded-xl">
      <div className="flex items-start p-5 gap-5 max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-3">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="mt-3 size-11 max-[640px]:mt-0"
        />
        <div className="flex flex-col justify-center text-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}
