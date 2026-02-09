export default function Copyright() {
  return (
    <div className="text-slate-200 mt-7 sm:text-sm xl:text-base 2xl:text-lg md:items-center md:w-3/4 md:mx-auto md:mt-0">
      <h3 className="text-center">
        <span className="text-sm">&copy;</span> Copyright{" "}
        <span className="text-blue-400 font-semibold">
          {new Date(Date.now()).getFullYear()}{" "}
        </span>
        | <span className="font-bold text-slate-200">Galuh Panca Wirasa</span>
      </h3>
    </div>
  );
}
