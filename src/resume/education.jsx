import Navbar from "../components/navbar";

export default function Resume() {
  return (
    <div className="w-[73%] bg-gray-700 rounded-xl pb-10">
      <div className="flex justify-end relative">
        <div className="absolute left-10 top-8">
          <div className="text-2xl text-slate-200 theLine font-bold">
            Resume
          </div>
        </div>
        <Navbar />
      </div>
      <div>
        <div className="flex mt-14 mx-8">
          <div className="basis-1/6 flex flex-col items-center">
            <img src="./images/book_icon.png" alt="book" className="w-1/4" />
            <div className="w-0.5 h-52 mt-2 bg-white rounded-t-lg flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#E3C775] mt-8"></div>
            </div>
          </div>
          <div className="basis-5/6">
            <h1 className="font-bold text-2xl text-slate-200">Educations</h1>
            <div className="flex flex-col">
              <div className="mt-8">
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

        <div>
          <div className="flex mt-14 mx-8">
            <div className="basis-1/6 flex flex-col items-center">
              <img
                src="./images/experience.png"
                alt="experience"
                className="w-1/4"
              />
              <div className="w-0.5 h-80 mt-2 bg-white rounded-t-lg flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#E3C775] mt-8"></div>
              </div>
            </div>

            <div className="basis-5/6">
              <h1 className="font-bold text-2xl text-slate-200">Experience</h1>
              <div className="flex flex-col">
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
                        registration feature, increasing user-friendliness in
                        the registration process.
                      </li>
                      <li>
                        Designed a fully responsive website, compatible with
                        various devices, increasing online registration by 30%
                        in the first three months. Successfully increased user
                        satisfaction by 40% through aesthetically pleasing
                        interface design and enhanced user experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-slate-200">My Skill</h1>
          <div className="text-slate-200 flex mt-8 justify-evenly">
            <div className="bg-slate-500 basis-1/3 rounded-xl p-5 shadow-lg shadow-slate-700">
              <h1 className="text-xl font-semibold mb-2">Soft Skills</h1>
              <ul className="list-disc list-inside leading-loose flex flex-col flex-wrap ml-3 max-h-60">
                <li>Teamwork</li>
                <li>Time management</li>
                <li>Perseverance</li>
                <li>Empathy</li>
                <li>Responsible</li>
              </ul>
            </div>
            <div className="bg-slate-600 basis-1/2 rounded-xl p-5">
              <h1 className="text-xl font-semibold mb-2">Hard Skills</h1>
              <ul className="list-disc list-inside ml-3 leading-loose flex flex-col flex-wrap max-h-60">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Tailwind CSS</li>
                <li>React JS</li>
                <li>Python</li>
                <li>Next JS</li>
                <li>Typescript</li>
                <li>GitHub</li>
                <li>FireBase</li>
                <li>Vs Code</li>
                <li>Microsoft Excel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
