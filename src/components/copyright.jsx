export default function Copyright() {
  return (
    <div className="text-slate-200 text-sm items-center w-11/12 mx-auto md:mt-10 max-[640px]:mt-10">
      <h3 className="text-center">
        <span className="text-sm">&copy;</span> Copyright |{" "}
        <span className="text-blue-400 font-semibold">
          {new Date(Date.now()).getFullYear()}
        </span>{" "}
        <span className="font-bold text-slate-200">Galuh Panca Wirasa</span>
      </h3>
    </div>
  );
}
