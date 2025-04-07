// import Client from "../components/client";
import Testimoni from "../components/tesimonial";
import MainLayout from "../layout/main-layout";

export default function MainContent() {
  return (
    <MainLayout propsTitle="About Me">
      <div className="flex flex-col items-center">
        <div className="max-w-3xl max-[640px]:max-w-full max-[640px]:px-5 mt-10">
          <div className="text-slate-200">
            <div className="text-justify flex flex-col gap-3">
              <p>
                I am a Front-End Web Developer experienced in building modern,
                responsive, and (UI/UX) oriented user interfaces. With expertise
                in Javascript and TypeScript programming languages, as well as
                frameworks like React.js, Tailwind CSS, and Next.js, I help
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
          </div>
          <div className="mt-10 max-[640px]:mt-6">
            <h1 className="font-semibold text-slate-200 text-2xl">
              What I`m Doing
            </h1>
            <div className="flex items-center flex-wrap mt-4 gap-5 justify-center">
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24">
                <div className="flex items-start p-5 gap-5">
                  <img src="./images/icon-webDev.png" alt="" className="mt-3" />
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide">
                      Web Desain
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa dolor eaque Lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24">
                <div className="flex items-start p-5 gap-5">
                  <img src="./images/icon-webDev.png" alt="" className="mt-3" />
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide">
                      Web Desain
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa dolor eaque Lorem ipsum dolor sit
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24">
                <div className="flex items-start p-5 gap-5">
                  <img src="./images/icon-webDev.png" alt="" className="mt-3" />
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide">
                      Web Desain
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa dolor eaque Lorem ipsum dolor sit
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[23rem] bg-slate-600 min-h-36 rounded-xl max-h-24">
                <div className="flex items-start p-5 gap-5">
                  <img src="./images/icon-webDev.png" alt="" className="mt-3" />
                  <div className="flex flex-col justify-center text-slate-200">
                    <h1 className="font-bold text-lg tracking-wide">
                      Web Desain
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa dolor eaque Lorem ipsum dolor sit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 max-[640px]:mt-6">
            <Testimoni />
          </div>
          {/* <div className="mt-10">
            <Client />
          </div> */}
        </div>
      </div>
    </MainLayout>
  );
}
