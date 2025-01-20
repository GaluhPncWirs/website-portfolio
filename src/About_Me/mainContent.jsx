import Client from "../components/client";
import Testimoni from "../components/tesimonial";

export default function MainContent() {
  return (
    <MainContent propsTitle="About Me">
      <div className="flex flex-col items-center">
        <div className="max-w-3xl">
          <div className="mt-10 text-slate-200">
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                illum, neque aut dolor sit a, ullam quis sed consectetur
                reiciendis nemo numquam rem accusantium distinctio. Distinctio
                officia non hic corrupti. Eos similique optio tenetur sit? Ipsam
                ab officiis recusandae,
              </p>
              <p>
                soluta similique atque facere minus optio nesciunt aperiam quasi
                error aut, ipsa odio iure itaque et minima doloremque in
                voluptatibus animi! Beatae quisquam eum harum placeat, vel
                excepturi totam odio atque blanditiis quibusdam cupiditate et
                incidunt eaque ea ipsam dicta veniam voluptatem. Eveniet ut
                cumque eum beatae pariatur maxime harum provident. Atque qui
                obcaecati quam
              </p>
            </div>
          </div>
          <div className="mt-10">
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
          <div className="mt-10">
            <Testimoni />
          </div>
          <div className="mt-10">
            <Client />
          </div>
        </div>
      </div>
    </MainContent>
  );
}
