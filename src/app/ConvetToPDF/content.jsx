import { dataHardSkills } from "../../data/data_icon";
import LayoutTimeLine from "../../layout/timeLine/content";
import LayoutWhatCanIDo from "../../layout/whatCanIDo/content";
import { datasProject } from "../../data/dataProject";
import { Link } from "react-router-dom";

export default function ConvetToPDF() {
  return (
    <div className="print:bg-white print:w-full print:mt-0 print:pb-0 print:rounded-none">
      {/* About */}
      <section>
        {/* Header Bagian: Sembunyikan Menu, Tampilkan Judul Saja */}
        <div className="print:static print:mb-3 print:w-40">
          <h1 className="print:font-bold print:text-black print:text-3xl print:border-b-2 print:border-blue-600 print:pb-2">
            About Me
          </h1>
        </div>

        {/* Konten Utama: Pastikan lebar penuh dan margin pas di kertas */}
        <div className="print:w-full print:mx-0">
          <div className="print:text-justify print:flex print:flex-col print:text-black print:gap-2">
            <p className="print:leading-relaxed">
              I am a Web Developer experienced in building modern, responsive,
              and (UI/UX) oriented user interfaces. with expertise in Javascript
              and TypeScript programming languages, as well as frameworkers like
              React.js, Next.js, and Tailwind CSS. I help create fast,
              functional, and visually appealing web applications.
            </p>
            <p className="print:leading-relaxed">
              My main focus is performance, accessibility, and user-friendly
              design. I have the ability to integrate the latest technologies
              with efficient design principles to create digital solutions that
              meet user and business needs.
            </p>
            {/* Kamu bisa menyembunyikan paragraf yang kurang krusial di PDF jika terlalu panjang */}
            <p className="print:leading-relaxed">
              In addition to technical skills, I am also used to working in
              cross-functional teams and have good communication to ensure
              projects are on target.
            </p>
          </div>

          <div className="print:mt-5">
            <h1 className="print:font-semibold print:mb-5 print:text-black print:text-xl print:pb-2">
              What Can I Do ?
            </h1>

            {/* GRID OPTIMIZATION: Di PDF kita hilangkan scroll dan paksa tampil semua */}
            <div className="print:max-h-none print:grid print:grid-cols-2 print:gap-y-8">
              <LayoutWhatCanIDo
                imgSrc="./images/icon-webDev.png"
                imgAlt="Web Dev"
              >
                <h1 className="print:font-bold print:tracking-wide print:mb-1 print:text-black print:text-base">
                  Web Development
                </h1>
                <p className="print:text-justify print:text-sm print:leading-snug">
                  I build user-friendly and high-performance web applications
                  using React or Next.js, specializing in frontend development
                  and API integration.
                </p>
              </LayoutWhatCanIDo>

              <LayoutWhatCanIDo
                imgSrc="./images/webDesign.png"
                imgAlt="Web Design"
              >
                <h1 className="print:font-bold print:tracking-wide print:mb-1 print:text-black print:text-base">
                  Web Design
                </h1>
                <p className="print:text-justify print:text-sm print:leading-snug">
                  I designed an attractive and functional website interface with
                  a focus on UI/UX, using Figma to create prototypes.
                </p>
              </LayoutWhatCanIDo>

              <LayoutWhatCanIDo
                imgSrc="./images/aiChatting.png"
                imgAlt="Promt AI"
              >
                <h1 className="print:font-bold print:tracking-wide print:mb-1 print:text-black print:text-base">
                  Prompt AI
                </h1>
                <p className="print:text-justify print:text-sm print:leading-snug">
                  I&apos;m skilled in creating effective AI prompts to optimize
                  workflow and boost productivity.
                </p>
              </LayoutWhatCanIDo>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section>
        <div className="print:static print:mb-3 print:w-32 print:mt-7">
          <h1 className="print:font-bold print:text-black print:text-3xl print:border-b-2 print:border-blue-600 print:pb-2">
            Resume
          </h1>
        </div>

        {/* Konten Utama: Pastikan lebar penuh dan margin pas di kertas */}
        <div className="print:w-full print:mx-0">
          {/* Educations Section */}
          <div className="print:break-inside-avoid">
            <div className="print:flex print:items-center print:gap-x-4 print:mb-1.5 print:ml-1.5">
              <img
                src="./images/book_icon.png"
                alt="Book"
                className="print:size-6 print:grayscale"
                loading="eager"
              />
              <h1 className="print:font-bold print:text-black print:text-xl">
                Educations
              </h1>
            </div>

            <LayoutTimeLine>
              <div className="print:text-black">
                <h2 className="print:font-semibold print:text-lg">
                  University Muhammadiyah Prof. Dr. Hamka
                </h2>
                <h3 className="print:font-medium print:text-slate-600 print:text-sm">
                  Bachelors degree, Informatics Engineering
                </h3>
                <h3 className="print:font-bold print:text-sm print:my-1.5 print:text-blue-700">
                  July 2021 - August 2025
                </h3>
                <p className="print:font-medium print:text-justify print:text-sm print:leading-relaxed">
                  During my university years, I delved into programming, web
                  development, and software engineering as a foundation for a
                  career in the digital world.
                </p>
              </div>
            </LayoutTimeLine>
          </div>

          {/* Experience Section */}

          <div className="print:break-inside-avoid print:mt-8">
            <div className="print:flex items-center print:gap-x-4 print:mb-1.5 print:ml-1.5">
              <img
                src="./images/experience.png"
                alt="experience"
                className="print:size-6 print:grayscale"
                loading="eager"
              />
              <h1 className="print:font-bold print:text-black print:text-xl">
                Experience
              </h1>
            </div>

            <LayoutTimeLine>
              <div className="print:text-black">
                <h2 className="print:font-semibold print:text-lg">
                  Intern Web Developer - PT. Candra Putra Lestari
                </h2>
                <h3 className="print:font-bold print:text-sm print:my-1.5 print:text-blue-700">
                  February 2024 - May 2024
                </h3>
                <h4 className="print:mb-2 print:font-medium print:text-slate-600 print:text-xs">
                  South Cikarang, Bekasi, West Java
                </h4>
                <ul className="print:list-disc print:leading-relaxed print:flex print:flex-col print:gap-2 print:text-justify print:list-inside print:text-black print:text-sm">
                  <li>
                    Developed an innovative company profile website using
                    Tailwind CSS.
                  </li>
                  <li>
                    Increased user satisfaction by 40% through enhanced UI/UX
                    design.
                  </li>
                </ul>
              </div>
            </LayoutTimeLine>
          </div>

          {/* Skills Section */}
          <div className="print:mt-10 print:break-inside-avoid">
            <div className="print:flex print:items-center print:gap-4 print:mb-5">
              <img
                src="./images/skill.png"
                alt="skills"
                className="print:size-7 print:grayscale"
                loading="lazy"
              />
              <h1 className="print:font-bold print:text-black print:text-xl">
                My Skills
              </h1>
            </div>

            <div className="print:flex print:mt-5 print:gap-x-5 print:flex-row print:text-black">
              {/* Soft Skills */}
              <div className="print:rounded-xl print:border print:border-slate-200 print:p-4 print:basis-2/5">
                <h1 className="print:font-semibold print:mb-3 print:text-base print:border-b print:pb-1">
                  Soft Skills
                </h1>
                <ul className="print:list-none print:leading-loose print:flex print:flex-col gap-y-2 print:gap-y-1">
                  {["Teamwork", "Time Management", "Responsible"].map(
                    (skill) => (
                      <li
                        key={skill}
                        className="print:flex print:gap-x-2 print:items-center print:text-sm"
                      >
                        <span className="print:before:content-['•'] print:before:mr-2">
                          {skill}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Hard Skills */}
              <div className="print:rounded-xl print:border print:border-slate-200 print:p-4 print:basis-3/5">
                <h1 className="print:font-semibold print:mb-4 print:text-base print:border-b print:pb-1">
                  Hard Skills
                </h1>
                <ul className="print:grid print:grid-cols-2 print:gap-y-1 print:text-sm">
                  {dataHardSkills.map((data) => (
                    <li
                      className="print:flex print:gap-2 print:items-center"
                      key={data.id}
                    >
                      <span className="print:before:content-['•'] print:before:mr-2">
                        {data.nama}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
      <section>
        {/* Header Bagian: Sembunyikan Menu, Tampilkan Judul Saja */}
        <div className="print:mb-3 print:w-28 print:mt-8">
          <h1 className="print:font-bold print:text-black print:text-3xl print:border-b-2 print:border-blue-600 print:pb-2">
            Project
          </h1>
        </div>

        {/* Konten Utama: Pastikan lebar penuh dan margin pas di kertas */}
        <div className="print:w-full print:mt-5">
          <div
            className="print:grid 
                  print:grid-cols-1 print:gap-y-6 print:place-items-start"
          >
            {datasProject.map((item) => (
              <div
                className="
                   print:w-full print:break-inside-avoid"
                key={item.id}
              >
                {/* Link tetap ada untuk web, tapi kita tambahkan pembungkus div untuk print jika perlu */}
                <div className="print:flex print:flex-col print:gap-4 print:border print:border-slate-200 print:rounded-lg print:overflow-hidden">
                  <img
                    src={item.source_image}
                    alt={item.alt}
                    className="
                       print:h-52 print:w-full print:object-cover"
                    loading="eager"
                  />

                  <div
                    className="
                          print:bg-white print:px-4 print:py-2 print:flex-1"
                  >
                    <h1 className="print:font-semibold print:print:text-lg">
                      {item.title_project}
                      {/* Menampilkan indikator link khusus di PDF */}
                      <Link
                        to={item.link_website}
                        className="print:text-blue-600 print:text-xs print:ml-2 print:font-normal print:italic"
                      >
                        (View Detail on Website)
                      </Link>
                    </h1>

                    <p
                      className="print:font-medium print:text-justify 
                          print:text-slate-700 print:text-sm print:mt-1"
                    >
                      {item.desc_project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
