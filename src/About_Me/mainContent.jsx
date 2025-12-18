import { Helmet } from "react-helmet-async";
import MainLayout from "../layout/main-layout";
import LayoutWhatCanIDo from "../layout/whatCanIDo";

export default function MainContent() {
  return (
    <>
      <Helmet>
        <title>About Me | Portfolio Galuh Panca Wirasa</title>
        <meta
          name="description"
          content="seorang web developer dengan keahlian dalam pengembangan front-end dan back-end. Jelajahi perjalanan karier, keterampilan teknis, serta portofolio proyek yang pernah saya kerjakan."
        />
        {/* open graph */}
        <meta
          property="og:title"
          content="Tentang Saya | Portfolio Galuh Panca Wirasa"
        />
        <meta
          property="og:description"
          content="Seorang pengembang web profesional yang berpengalaman dalam membangun website dan aplikasi menggunakan teknologi modern seperti React, Next.js, dan yang lainnya"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="profile" />
      </Helmet>
      <MainLayout propsTitle="About Me">
        <div className="flex flex-col items-center">
          <div className="max-[640px]:max-w-full max-[640px]:pr-5 mt-10 max-[640px]:ml-11 sm:mx-5 sm:max-w-3xl xl:max-w-4xl">
            <div className="text-justify flex flex-col gap-3 text-slate-200">
              <p>
                I am a Web Developer experienced in building modern, responsive,
                and (UI/UX) oriented user interfaces. with expertise in
                Javascript and TypeScript programming languages, as well as
                frameworks like React.js, Next.js, and Tailwind CSS. I help
                create fast, functional, and visually appealing web
                applications.
              </p>
              <p>
                My main focus is performance, accessibility, and user-friendly
                design. I have the ability to integrate the latest technologies
                with efficient design principles to create digital solutions
                that meet user and business needs.
              </p>
              <p>
                In addition to technical skills, I am also used to working in
                cross-functional teams and have good communication to ensure
                projects are on target. I am always eager to learn new
                technologies and face challenges that push me to improve.
              </p>
              <p>
                I am open to opportunities to collaborate or discuss about web
                development and technology. Feel free to contact me via email!
                that has been provided.
              </p>
            </div>
            <div className="mt-10 max-[640px]:mt-6 sm:mt-6 md:mt-7">
              <h1 className="font-semibold text-slate-200 text-2xl">
                What Can I Do ?
              </h1>
              <div className="flex items-center flex-wrap mt-6 gap-5 justify-center max-[640px]:overflow-y-auto max-[640px]:max-h-80 max-[640px]:scrollBarDesign sm:overflow-y-auto sm:max-h-80 sm:scrollBarDesign lg:max-h-80">
                <LayoutWhatCanIDo
                  imgSrc="./images/icon-webDev.png"
                  imgAlt="Web Dev"
                >
                  <h1 className="font-bold text-lg tracking-wide max-[640px]:text-center max-[640px]:mb-2">
                    Web Development
                  </h1>
                  <p className="text-justify">
                    I build user-friendly and high-performance web applications
                    using React or Next.js, specializing in frontend
                    development, UI/UX implementation, and API integration.
                  </p>
                </LayoutWhatCanIDo>
                <LayoutWhatCanIDo
                  imgSrc="./images/webDesign.png"
                  imgAlt="Web Design"
                >
                  <h1 className="font-bold text-lg tracking-wide max-[640px]:text-center max-[640px]:mb-2">
                    Web Design
                  </h1>
                  <p className="text-justify">
                    I designed an attractive and functional website interface
                    with a focus on UI/UX, using Figma to create prototypes and
                    wireframes that fit user needs and brand identity.
                  </p>
                </LayoutWhatCanIDo>
                <LayoutWhatCanIDo
                  imgSrc="./images/aiChatting.png"
                  imgAlt="Promt AI"
                >
                  <h1 className="font-bold text-lg tracking-wide max-[640px]:text-center max-[640px]:mb-2">
                    Promt AI
                  </h1>
                  <p className="text-justify">
                    I&apos;m skilled in creating effective AI prompts to
                    optimize my workflow, boost productivity, and support
                    smarter development decisions.
                  </p>
                </LayoutWhatCanIDo>

                <LayoutWhatCanIDo
                  imgSrc="./images/cooking.png"
                  imgAlt="Cooking"
                >
                  <h1 className="font-bold text-lg tracking-wide max-[640px]:text-center max-[640px]:mb-2">
                    Cooking
                  </h1>
                  <p className="text-justify">
                    Cooking is one of my passions. This activity hones my time
                    management and creativity skills, while also fostering
                    discipline that impacts various aspects of my life.
                  </p>
                </LayoutWhatCanIDo>
              </div>
            </div>
            {/* <div className="mt-10 max-[640px]:mt-6">
            <Testimoni />
          </div> */}
            {/* <div className="mt-10">
            <Client />
          </div> */}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
