export default function Copyright() {
  const currrentYear = new Date().getFullYear();
  return (
    <div className="text-slate-200 mt-7 sm:text-sm md:mt-0">
      <h3 className="text-center">
        Copyright{" "}
        <span className="font-semibold text-blue-500">{currrentYear} </span>|{" "}
        <span className="font-bold text-slate-200">Galuh Panca Wirasa</span>
      </h3>
    </div>
  );
}
