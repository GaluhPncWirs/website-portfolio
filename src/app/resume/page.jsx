import MainLayout from "../../layout/mainLayout/content";
import { Helmet } from "react-helmet-async";
import { dataHardSkills } from "../../data/data_icon";
import LayoutTimeLine from "../../layout/timeLine/content";
import { Link } from "react-router-dom";

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
        {/* educations */}
        <div className="mt-24 ml-6 sm:ml-0 sm:mt-14">
          <div className="flex items-center gap-x-4">
            <img
              src="./images/book_icon.png"
              alt="Book"
              className="size-10"
              loading="eager"
            />
            <h1 className="text-2xl font-bold text-slate-200">Educations</h1>
          </div>
          {/* educations next */}
          <LayoutTimeLine>
            <h2 className="text-xl font-semibold text-slate-200">
              University Muhammadiayah Prof. Dr. Hamka
            </h2>
            <h3 className="text-base font-medium text-slate-400">
              Bachelors degree, Informatics Engineering
            </h3>
            <h3 className="font-bold text-[#E3C775] text-sm my-2">
              July 2021 - 2025 Agust
            </h3>
            <p className="font-medium text-justify text-slate-300">
              During my college years, I focused on programming, web
              development, and various aspects of software engineering as a
              foundation for a career in the digital field.
            </p>
          </LayoutTimeLine>
          {/* end educations next */}
        </div>

        {/* experience */}
        <div className="ml-6 mt-14 sm:ml-0 sm:mt-14">
          <div className="flex items-center gap-x-5">
            <img
              src="./images/experience.png"
              alt="experience"
              className="size-10"
              loading="eager"
            />
            <h1 className="text-2xl font-bold text-slate-200">Experience</h1>
          </div>
          {/* experience next */}
          <LayoutTimeLine>
            <h2 className="text-xl font-semibold text-slate-200">
              Freelance Fullstack Web Developer - LPK Samasamajinzai
            </h2>
            <h3 className="font-bold text-[#E3C775] text-sm">
              May 2026 - Current
            </h3>
            <h4 className="text-base font-medium text-slate-400">
              Padasuka, kec.cimenyan, kab bandung
            </h4>
            <div className="font-medium text-slate-300">
              <ul className="flex flex-col gap-2 leading-relaxed text-justify list-disc list-inside">
                <li>
                  Developed a responsive company profile website using Next.js,
                  TypeScript, and Tailwind CSS.
                </li>
                <li>
                  Built a multi-step online registration system for applicants.
                </li>
                <li>
                  Implemented Firebase Firestore for CRUD operations and
                  Firebase Storage for image management.
                </li>
                <li>
                  Developed an admin dashboard to manage registrations,
                  programs, and FAQs.
                </li>
                <li>
                  Implemented JWT authentication with Role-Based Access Control
                  (RBAC).
                </li>
                <li>
                  Applied React Hook Form and Zod for robust form validation.
                </li>
                <li>
                  Optimized performance using SSR, ISR, useMemo, and efficient
                  Firestore queries.
                </li>
                <li>
                  Added Indonesian-Japanese multilingual support with Next-Intl.
                </li>
              </ul>
            </div>
            <span className="inline-block w-full text-blue-300 hover:underline hover:text-blue-400 text-end">
              <Link
                to="https://company-profile-lpk-suenami.vercel.app/id/beranda"
                target="_blank"
              >
                Here are the example
              </Link>
            </span>
          </LayoutTimeLine>
          {/* end experience next */}

          {/* experience next */}
          <LayoutTimeLine>
            <h2 className="text-xl font-semibold text-slate-200">
              Volunteer Community Service Program
            </h2>
            <h3 className="font-bold text-[#E3C775] text-sm mt-2 mb-1">
              October 2023 - January 2024
            </h3>
            <h4 className="mb-2 text-base font-medium text-slate-400">
              Bogor, West Java
            </h4>
            <div className="font-medium text-slate-300">
              <ul className="flex flex-col gap-2 leading-relaxed text-justify list-disc list-inside">
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

        {/* skills */}
        <div className="mt-10">
          <div className="flex items-center gap-4">
            <img
              src="./images/skill.png"
              alt="skills"
              className="size-10"
              loading="lazy"
            />
            <h1 className="text-2xl font-bold text-slate-200">My Skills</h1>
          </div>
          <div className="flex flex-col mt-5 text-slate-200 justify-evenly gap-y-7 lg:flex-row lg:gap-y-0">
            <div className="p-5 shadow-lg basis-1/3 rounded-xl shadow-slate-500">
              <h1 className="mb-3 text-xl font-semibold">Soft Skills</h1>
              <ul className="flex flex-col leading-loose list-none gap-y-3">
                <li className="flex items-center gap-x-2">
                  <img
                    src="/images/softSkill/teamwork.png"
                    alt="Teamwork"
                    className="size-7"
                    loading="lazy"
                  />
                  <span>Teamwork</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <img
                    src="/images/softSkill/time-management.png"
                    alt="Time Management"
                    className="size-7"
                    loading="lazy"
                  />
                  <span>Time Management</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <img
                    src="/images/softSkill/perseverance.png"
                    alt="Perseverance"
                    className="size-7"
                    loading="lazy"
                  />
                  <span>Perseverance</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <img
                    src="/images/softSkill/empathy.png"
                    alt="Empathy"
                    className="size-7"
                    loading="lazy"
                  />
                  <span>Empathy</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <img
                    src="/images/softSkill/responsibility.png"
                    alt="Responsible"
                    className="size-7"
                    loading="lazy"
                  />
                  <span>Responsible</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <img
                    src="/images/softSkill/discipline.png"
                    alt="Discipline"
                    className="size-7"
                    loading="lazy"
                  />
                  <span>Discipline</span>
                </li>
              </ul>
            </div>
            <div className="p-5 shadow-lg basis-1/2 rounded-xl shadow-slate-500">
              <h1 className="mb-4 text-xl font-semibold">Hard Skills</h1>
              <ul className="grid grid-cols-2 gap-y-3">
                {dataHardSkills.map((data) => (
                  <li className="flex items-center gap-2" key={data.id}>
                    <img
                      src={data.imgLogos}
                      alt={data.altImg}
                      className="size-5"
                      loading="lazy"
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
