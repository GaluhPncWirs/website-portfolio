export default function LayoutWhatCanIDo(props) {
  const { children, imgSrc, imgAlt } = props;
  return (
    <div className="w-3/4 bg-slate-600 rounded-lg">
      <div className="flex p-5 gap-3 flex-col items-center sm:flex-row sm:items-start sm:gap-5">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="size-11 sm:mt-3"
          loading="eager"
        />
        <div className="flex flex-col justify-center text-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}
