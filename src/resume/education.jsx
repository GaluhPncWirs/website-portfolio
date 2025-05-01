import { useId } from "react";
import MainLayout from "../layout/main-layout";

export default function Resume() {
  let id = useId();
  const dataHardSkills = [
    {
      id: id,
      nama: "HTML",
      imgLogos: "./images/logo/html.png",
      altImg: "html_logo",
    },
    {
      id: id,
      nama: "CSS",
      imgLogos: "./images/logo/css.png",
      altImg: "CSS_logo",
    },
    {
      id: id,
      nama: "Javascript",
      imgLogos: "./images/logo/js.png",
      altImg: "Javascript_logo",
    },
    {
      id: id,
      nama: "Tailwind CSS",
      imgLogos: "./images/logo/tailwindcss.png",
      altImg: "Tailwind CSS_logo",
    },
    {
      id: id,
      nama: "Schdn-ui",
      imgLogos: "./images/logo/schdn-ui.png",
      altImg: "Schdn-ui_logo",
    },
    {
      id: id,
      nama: "React JS",
      imgLogos: "./images/logo/react-logo.png",
      altImg: "React JS_logo",
    },
    {
      id: id,
      nama: "Python",
      imgLogos: "./images/logo/python.png",
      altImg: "Python_logo",
    },
    {
      id: id,
      nama: "Next JS",
      imgLogos: "./images/logo/nextjs.png",
      altImg: "Next JS_logo",
    },
    {
      id: id,
      nama: "Typescript",
      imgLogos: "./images/logo/typescript.png",
      altImg: "Typescript_logo",
    },
    {
      id: id,
      nama: "Firebase",
      imgLogos: "./images/logo/firebase.png",
      altImg: "Firebase_logo",
    },
    {
      id: id,
      nama: "Vs Code",
      imgLogos: "./images/logo/vscode.png",
      altImg: "Vs Code_logo",
    },
    {
      id: id,
      nama: "Microsoft Excel",
      imgLogos: "./images/logo/microsoft-excel.png",
      altImg: "Microsoft Excel_logo",
    },
    {
      id: id,
      nama: "Microsoft Word",
      imgLogos: "./images/logo/microsoft-word.png",
      altImg: "Microsoft Word_logo",
    },
  ];
  return (
    <MainLayout propsTitle="Resume">
      <div>
        {/* educations */}
        <div className="flex mt-14 mx-8 max-[640px]:ml-5 max-[640px]:mx-0 max-[640px]:pr-5 max-[640px]:mt-24">
          <div className="basis-1/6 flex flex-col items-center">
            <img src="./images/book_icon.png" alt="book" className="w-1/4" />
            <div className="w-0.5 h-full mt-2 bg-white rounded-t-lg rounded-b-lg flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#E3C775] mt-8"></div>
            </div>
          </div>
          <div className="basis-5/6">
            <h1 className="font-bold text-2xl text-slate-200">Educations</h1>
            <div className="flex flex-col">
              <div className="mt-8 max-[640px]:mt-4">
                <h2 className="text-slate-200 font-semibold text-xl">
                  Universitas Muhammadiayah Prof. Dr. Hamka
                </h2>
                <h3 className="text-slate-400 font-medium text-base">
                  Bachelors degree, Informatics Engineering
                </h3>
                <h3 className="font-bold text-[#E3C775] text-sm my-2">
                  2021 - 2025
                </h3>
                <div className="text-slate-300 font-medium text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae vel rem in earum minus! Eaque itaque,
                  praesentium consequuntur, veritatis corporis pariatur nemo
                  modi perferendis cumque in odio deserunt repellat.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="flex mt-14 mx-8 max-[640px]:ml-5 max-[640px]:mx-0 max-[640px]:pr-5">
          <div className="basis-1/6 flex flex-col items-center">
            <img
              src="./images/experience.png"
              alt="experience"
              className="w-1/4"
            />
            <div className="w-0.5 h-full mt-2 bg-white rounded-t-lg rounded-b-lg flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#E3C775] mt-8"></div>
              {/* <div className="w-3 h-3 rounded-full bg-[#E3C775] mt-[31rem]"></div> */}
            </div>
          </div>

          <div className="basis-5/6">
            <h1 className="font-bold text-2xl text-slate-200">Experience</h1>
            <div className="flex flex-col">
              <div className="mt-8 max-[640px]:mt-4">
                <h2 className="text-slate-200 font-semibold text-xl">
                  Intern Frontend Web Developer - PT. Candra Putra Lestari
                </h2>
                <h3 className="font-bold text-[#E3C775] text-sm mt-2 mb-1">
                  February 2024 - May 2024
                </h3>
                <h4 className="text-base text-slate-400 mb-2 font-medium">
                  South Cikarang, Bekasi, West Java
                </h4>
                <div className="text-slate-300 font-medium">
                  <ul className="list-disc leading-relaxed flex flex-col gap-2 text-justify">
                    <li>
                      Designed and developed an innovative company profile
                      website using Tailwind CSS, with a modern and responsive
                      design.
                    </li>
                    <li>
                      Integrated an efficient and easy-to-use online
                      registration feature, increasing user-friendliness in the
                      registration process.
                    </li>
                    <li>
                      Designed a fully responsive website, compatible with
                      various devices, increasing online registration by 30% in
                      the first three months. Successfully increased user
                      satisfaction by 40% through aesthetically pleasing
                      interface design and enhanced user experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* experience next */}
            {/* <div className="flex flex-col">
              <div className="mt-8">
                <h2 className="text-slate-200 font-semibold text-xl">
                  Intern Frontend Web Developer - PT. Candra Putra Lestari
                </h2>
                <h3 className="font-bold text-[#E3C775] text-sm mt-2 mb-1">
                  February 2024 - May 2024
                </h3>
                <h4 className="text-base text-slate-400 mb-2 font-medium">
                  South Cikarang, Bekasi, West Java
                </h4>
                <div className="text-slate-300 font-medium">
                  <ul className="list-disc leading-relaxed flex flex-col gap-2 text-justify">
                    <li>
                      Designed and developed an innovative company profile
                      website using Tailwind CSS, with a modern and responsive
                      design.
                    </li>
                    <li>
                      Integrated an efficient and easy-to-use online
                      registration feature, increasing user-friendliness in the
                      registration process.
                    </li>
                    <li>
                      Designed a fully responsive website, compatible with
                      various devices, increasing online registration by 30% in
                      the first three months. Successfully increased user
                      satisfaction by 40% through aesthetically pleasing
                      interface design and enhanced user experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="mt-10 mx-10 max-[640px]:ml-7 max-[640px]:mx-0 max-[640px]:pr-5">
        <h1 className="text-2xl font-bold text-slate-200">My Skills</h1>
        <div className="text-slate-200 flex mt-5 justify-evenly max-[640px]:flex-col max-[640px]:gap-y-7 sm:flex-col sm:gap-y-7 md:flex-col lg:flex-row lg:gap-y-0">
          <div className="basis-1/3 rounded-xl p-5 shadow-lg shadow-slate-500">
            <h1 className="text-xl font-semibold mb-2">Soft Skills</h1>
            <ul className="list-disc list-inside leading-loose flex flex-col flex-wrap ml-3">
              <li>Teamwork</li>
              <li>Time management</li>
              <li>Perseverance</li>
              <li>Empathy</li>
              <li>Responsible</li>
            </ul>
          </div>
          <div className="basis-1/2 rounded-xl p-3 shadow-lg shadow-slate-500">
            <h1 className="text-xl font-semibold mb-5 ml-3">Hard Skills</h1>
            <ul className="ml-7 flex flex-col flex-wrap max-h-64">
              {dataHardSkills.map((data) => (
                <li
                  className="flex w-5 h-[1.25rem] gap-2 items-center mb-4"
                  key={data.id}
                >
                  <img src={data.imgLogos} alt={data.altImg} />
                  <span className="min-w-32">{data.nama}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
