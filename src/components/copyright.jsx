export default function Copyright() {
  return (
    <div className="text-slate-200 text-sm md:items-center md:w-10/12 md:mx-auto max-[640px]:mt-8 sm:mt-5">
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
