// import { useState } from "react";

const slides = [
  {
    title: "Web Desain",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Web Desan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "TensorFlow Master",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Django Web Dev",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Django Web Dev",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Testimoni() {
  // const [slideIndex, setSlideIndex] = useState(0);

  // function moveTo(direction) {
  //   if (direction === "kiri" && slideIndex > 0) {
  //     setSlideIndex(slideIndex - 1);
  //   }

  //   if (direction === "kanan" && slideIndex < slides.length - 1) {
  //     setSlideIndex(slideIndex + 1);
  //   }
  // }

  return (
    <div>
      <h1 className="text-slate-200 font-semibold text-2xl mb-12">
        Testimonial
      </h1>
      <div className="px-3 max-[640px]:px-0 max-[640px]:flex max-[640px]:justify-center">
        {/* <div className="max-[640px]:hidden">
          <div
            id="kiri"
            onClick={() => moveTo("kiri")}
            className="absolute bottom-1/2 cursor-pointer w-5 h-7 -left-6"
          >
            <span className="w-5 h-1 bg-white absolute left-0 -rotate-45 rounded-r-lg"></span>
            <span className="w-5 h-1 bg-white absolute left-0 top-3 rotate-45 rounded-r-lg"></span>
          </div>

          <div
            id="kanan"
            onClick={() => moveTo("kanan")}
            className="absolute bottom-1/2 cursor-pointer w-5 h-7 -right-6"
          >
            <span className="w-5 h-1 bg-white absolute left-0 rotate-45 rounded-l-lg"></span>
            <span className="w-5 h-1 bg-white absolute left-0 top-3 -rotate-45 rounded-l-lg"></span>
          </div>
        </div> */}

        <div className="max-[640px]:max-h-80 max-[640px]:overflow-y-auto md:max-w-3xl md:overflow-x-auto">
          <div className="flex gap-x-3 justify-center max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-y-10">
            {slides.map((item, index) => (
              <div
                key={index}
                className="min-w-52 bg-slate-600 min-h-40 rounded-xl relative"
              >
                <img
                  src="./images/emoji_persons.png"
                  alt="emoji persons"
                  className="w-16 h-16 bg-slate-500 rounded-lg absolute -top-6 left-10"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide text-center mb-3">
                      {item.title}
                    </h1>
                    <p className="text-justify">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div
                key={index}
                className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24 relative"
              >
                <img
                  src="./images/emoji_persons.png"
                  alt="emoji persons"
                  className="w-16 h-16 bg-slate-500 rounded-lg absolute -top-6 left-10"
                />
                <div className="p-5">
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide text-center mb-3">
                      {item.title}
                    </h1>
                    <p className="text-justify">{item.desc}</p>
                  </div>
                </div>
              </div> */}
          </div>

          {/* <div className="w-2/3 h-2 bg-slate-500 rounded-2xl mt-8 mx-auto flex max-[640px]:mt-0 max-[640px]:h-80 max-[640px]:w-2 max-[640px]:flex-col">
            {slides.map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (idx !== slideIndex) {
                    moveTo(idx === 0 ? "kiri" : "kanan");
                  }
                }}
                className={`w-1/2 h-full rounded-2xl transition-all cursor-pointer max-[640px]:h-1/2 max-[640px]:w-2 ${
                  slideIndex === idx ? "bg-[#CDB46D]" : "bg-slate-500"
                }`}
              ></div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
