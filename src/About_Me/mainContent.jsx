// import Client from "../components/client";
// import Testimoni from "../components/tesimonial";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layout/main-layout";

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
                I am a Front-End and Semi Back-End Web Developer experienced in
                building modern, responsive, and (UI/UX) oriented user
                interfaces. With expertise in Javascript and TypeScript
                programming languages, as well as frameworks like React.js,
                Tailwind CSS, and Next.js, I help create fast, functional, and
                visually appealing web applications.
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
                What Can I Do ?{/* What I`m Doing */}
              </h1>
              <div className="flex items-center flex-wrap mt-6 gap-5 justify-center max-[640px]:overflow-y-auto max-[640px]:max-h-80 max-[640px]:scrollBarDesign sm:overflow-y-auto sm:max-h-80 sm:scrollBarDesign lg:max-h-80">
                <div className="w-3/4 bg-slate-600 min-h-36 rounded-xl max-h-24">
                  <div className="flex items-start p-5 gap-5">
                    <img
                      src="./images/icon-webDev.png"
                      alt="Web Dev"
                      className="mt-3 w-1/5"
                    />
                    <div className="flex flex-col justify-center text-slate-200">
                      <h1 className="font-bold text-lg tracking-wide">
                        Web Development
                      </h1>
                      <p className="text-justify">
                        I develop websites with modern technologies such as
                        React and Next.js, including frontend, backend, API
                        integration, and deployment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-3/4 bg-slate-600 min-h-36 rounded-xl max-h-24">
                  <div className="flex items-start p-5 gap-5">
                    <img
                      src="./images/webDesign.png"
                      alt="Web Design"
                      className="mt-3 w-1/5"
                    />
                    <div className="flex flex-col justify-center text-slate-200">
                      <h1 className="font-bold text-lg tracking-wide">
                        Web Design
                      </h1>
                      <p className="text-justify">
                        I designed an attractive and functional website
                        interface with a focus on UI/UX, using Figma to create
                        prototypes and wireframes that fit user needs and brand
                        identity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-3/4 bg-slate-600 min-h-36 rounded-xl max-h-24">
                  <div className="flex items-start p-5 gap-5">
                    <img
                      src="./images/aiChatting.png"
                      alt="Promt AI"
                      className="mt-3 w-1/5"
                    />
                    <div className="flex flex-col justify-center text-slate-200">
                      <h1 className="font-bold text-lg tracking-wide">
                        Promt AI
                      </h1>
                      <p className="text-justify">
                        I was able to construct effective AI prompts to generate
                        contextual responses, aiding content creation, data
                        analysis, and decision-making efficiently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-3/4 bg-slate-600 min-h-36 rounded-xl max-h-24">
                  <div className="flex items-start p-5 gap-5">
                    <img
                      src="./images/cooking.png"
                      alt="Cooking"
                      className="mt-3 w-1/12"
                    />
                    <div className="flex flex-col justify-center text-slate-200">
                      <h1 className="font-bold text-lg tracking-wide">
                        Cooking
                      </h1>
                      <p className="text-justify">
                        Cooking is a hobby that I&apos;m passionate about, it
                        teaches precision, time management and creativity, while
                        also building discipline and patience that will serve me
                        well in other areas.
                      </p>
                    </div>
                  </div>
                </div>
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
