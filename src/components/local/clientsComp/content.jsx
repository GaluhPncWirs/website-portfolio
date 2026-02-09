export default function Client() {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-2xl text-slate-200">Clients</h1>
        <div className="flex justify-around items-center h-full bg-slate-600 rounded-lg mt-5">
          <img
            src="./images/google.png"
            alt="google"
            className="w-1/5 grayscale hover:grayscale-0"
          />
          <img
            src="./images/nestle.png"
            alt="nestle"
            className="w-1/5 grayscale hover:grayscale-0"
          />
          <img
            src="./images/traveloka.png"
            alt="traveloka"
            className="w-1/5 grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}
