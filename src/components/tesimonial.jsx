import { useState } from "react";

export default function Testimoni() {
  const [slider, setSlider] = useState(true);
  const [tes, setTes] = useState(false);
  function moveTo(e) {
    if (e.target.id === "slide-2") {
      setSlider(false);
      setTes(true);
    } else {
      setSlider(true);
      setTes(false);
    }
  }
  return (
    <div>
      <div>
        <div className="mb-16">
          <h1 className="text-slate-200 font-semibold text-2xl">Testimonial</h1>
        </div>
        <div className="flex gap-6">
          {slider === true ? (
            <>
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24 relative">
                <img
                  src="./images/emoji_persons.png"
                  alt="emoji persons"
                  className="w-16 h-16 bg-slate-500 rounded-lg absolute -top-6 left-10"
                />
                <div className="p-5">
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide text-center mb-3">
                      Web Desain
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24 relative">
                <img
                  src="./images/emoji_persons.png"
                  alt="emoji persons"
                  className="w-16 h-16 bg-slate-500 rounded-lg absolute -top-6 left-10"
                />
                <div className="p-5">
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide text-center mb-3">
                      Web Desain
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24 relative">
                <img
                  src="./images/emoji_persons.png"
                  alt="emoji persons"
                  className="w-16 h-16 bg-slate-500 rounded-lg absolute -top-6 left-10"
                />
                <div className="p-5">
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide text-center mb-3">
                      tensorflow master
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24 relative">
                <img
                  src="./images/emoji_persons.png"
                  alt="emoji persons"
                  className="w-16 h-16 bg-slate-500 rounded-lg absolute -top-6 left-10"
                />
                <div className="p-5">
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide text-center mb-3">
                      django web dev
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className="w-2/3 h-2 bg-slate-500 rounded-2xl mt-8 mx-auto flex"
          onClick={moveTo}
        >
          <div
            className={`w-1/2 h-full rounded-2xl ${
              slider === false ? `bg-slate-500` : `bg-[#CDB46D] transition-all`
            }`}
            id="slide-1"
          ></div>
          <div
            className={`w-1/2 h-full rounded-2xl ${
              tes === true ? `bg-[#CDB46D] transition-all` : `bg-slate-500`
            }`}
            id="slide-2"
          ></div>
        </div>
      </div>
    </div>
  );
}
