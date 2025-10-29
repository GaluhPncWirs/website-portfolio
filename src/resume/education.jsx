import { Link } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import { Helmet } from "react-helmet-async";
import { dataHardSkills } from "../data/data_icon";
import LayoutTimeLine from "../layout/timeline";

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume | Portfolio Galuh Panca Wirasa</title>
        <meta
          name="description"
          content="Lihat resume lengkap saya sebagai pengembang web, mencakup pengalaman kerja, keahlian teknis dan nonteknis, dan pendidikan"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Resume | Portfolio Galuh Panca Wirasa"
        />
        <meta
          property="og:description"
          content="Dapatkan gambaran lengkap tentang latar belakang profesional saya sebagai web developer — mulai dari pengalaman kerja, teknologi yang dikuasai, hingga proyek-proyek nyata."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="profile" />
      </Helmet>
      <MainLayout propsTitle="Resume">
        <div>
          {/* educations */}
          <div className="sm:mt-14 sm:mx-10 lg:mx-20 max-[640px]:ml-12 max-[640px]:pr-3 max-[640px]:mt-24">
            <div className="flex items-center gap-x-5">
              <img
                src="./images/book_icon.png"
                alt="Book"
                className="size-10"
              />
              <h1 className="font-bold text-2xl text-slate-200">Educations</h1>
            </div>
            {/* educations next */}
            <LayoutTimeLine>
              <h2 className="text-slate-200 font-semibold text-xl">
                University Muhammadiayah Prof. Dr. Hamka
              </h2>
              <h3 className="text-slate-400 font-medium text-base">
                Bachelors degree, Informatics Engineering
              </h3>
              <h3 className="font-bold text-[#E3C775] text-sm my-2">
                July 2021 - 2025 Agust
              </h3>
              <p className="text-slate-300 font-medium text-justify">
                After graduating from SMK, I decided to continue my studies in a
                different field, Informatics Engineering at the university
                level. This decision was based on a growing interest in
                information technology and software development. During my
                university years, I delved into programming, web development,
                and various aspects of software engineering as a foundation for
                a career in the digital world.
              </p>
            </LayoutTimeLine>
            {/* end educations next */}
          </div>

          {/* experience */}
          <div className="sm:mt-14 sm:mx-10 lg:mx-20 max-[640px]:ml-12 max-[640px]:mt-14 max-[640px]:pr-3">
            <div className="flex items-center gap-x-5">
              <img
                src="./images/experience.png"
                alt="experience"
                className="size-10"
              />
              <h1 className="font-bold text-2xl text-slate-200">Experience</h1>
            </div>
            {/* experience next */}
            <LayoutTimeLine>
              <h2 className="text-slate-200 font-semibold text-xl">
                Intern Web Developer - PT. Candra Putra Lestari
              </h2>
              <h3 className="font-bold text-[#E3C775] text-sm mt-2 mb-1">
                February 2024 - May 2024
              </h3>
              <h4 className="text-base text-slate-400 mb-2 font-medium">
                South Cikarang, Bekasi, West Java
              </h4>
              <div className="text-slate-300 font-medium">
                <ul className="list-disc leading-relaxed flex flex-col gap-2 text-justify list-inside">
                  <li>
                    Designed and developed an innovative company profile website
                    using Tailwind CSS, with a modern and responsive design.
                  </li>
                  <li>
                    Integrated an efficient and easy-to-use online registration
                    feature, increasing user-friendliness in the registration
                    process.
                  </li>
                  <li>
                    Designed a fully responsive website, compatible with various
                    devices, increasing online registration by 30% in the first
                    three months. Successfully increased user satisfaction by
                    40% through aesthetically pleasing interface design and
                    enhanced user experience.
                  </li>
                </ul>
              </div>
              <h1 className="text-blue-300 hover:underline hover:text-blue-400 mt-2">
                <Link to="https://ohayonippon.com/" target="_blank">
                  Here Are The Results
                </Link>
              </h1>
            </LayoutTimeLine>
            {/* end experience next */}

            {/* experience next */}
            <LayoutTimeLine>
              <h2 className="text-slate-200 font-semibold text-xl">
                Volunteer Community Service Program
              </h2>
              <h3 className="font-bold text-[#E3C775] text-sm mt-2 mb-1">
                October 2023 - January 2024
              </h3>
              <h4 className="text-base text-slate-400 mb-2 font-medium">
                Bogor, West Java
              </h4>
              <div className="text-slate-300 font-medium">
                <ul className="list-disc leading-relaxed flex flex-col gap-2 text-justify list-inside">
                  <li>
                    In this program, I provide business capital assistance to
                    residents in need, especially those who are economically
                    affected and need support to restart their businesses.
                  </li>
                  <li>
                    In addition to providing capital assistance, I also play a
                    role in providing mentoring, such as helping to plan simple
                    business strategies, providing motivation, and ensuring that
                    they have the tools and knowledge needed to better manage
                    their businesses.
                  </li>
                </ul>
              </div>
            </LayoutTimeLine>
            {/* end experience next */}
          </div>
        </div>

        {/* skills */}
        <div className="mt-12 sm:mx-14 max-[640px]:ml-6 max-[640px]:pr-5">
          <div className="flex items-center gap-4">
            <img src="./images/skill.png" alt="skills" className="size-10" />
            <h1 className="text-2xl font-bold text-slate-200">My Skills</h1>
          </div>
          <div className="text-slate-200 flex mt-5 justify-evenly max-[640px]:flex-col max-[640px]:gap-y-7 sm:flex-col sm:gap-y-7 md:flex-col lg:flex-row lg:gap-y-0">
            <div className="basis-1/3 rounded-xl p-5 shadow-lg shadow-slate-500">
              <h1 className="text-xl font-semibold mb-3">Soft Skills</h1>
              <ul className="list-none leading-loose flex flex-col gap-y-3">
                <li className="flex gap-x-2 items-center">
                  <img
                    src="/images/softSkill/teamwork.png"
                    alt="Teamwork"
                    className="size-7"
                  />
                  <span>Teamwork</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <img
                    src="/images/softSkill/time-management.png"
                    alt="Time Management"
                    className="size-7"
                  />
                  <span>Time Management</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <img
                    src="/images/softSkill/perseverance.png"
                    alt="Perseverance"
                    className="size-7"
                  />
                  <span>Perseverance</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <img
                    src="/images/softSkill/empathy.png"
                    alt="Empathy"
                    className="size-7"
                  />
                  <span>Empathy</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <img
                    src="/images/softSkill/responsibility.png"
                    alt="Responsible"
                    className="size-7"
                  />
                  <span>Responsible</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <img
                    src="/images/softSkill/discipline.png"
                    alt="Discipline"
                    className="size-7"
                  />
                  <span>Discipline</span>
                </li>
              </ul>
            </div>
            <div className="basis-1/2 rounded-xl p-5 shadow-lg shadow-slate-500">
              <h1 className="text-xl font-semibold mb-4">Hard Skills</h1>
              <ul className="grid grid-cols-2 gap-y-3">
                {dataHardSkills.map((data) => (
                  <li className="flex gap-2 items-center" key={data.id}>
                    <img
                      src={data.imgLogos}
                      alt={data.altImg}
                      className="size-5"
                    />
                    <span>{data.nama}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
