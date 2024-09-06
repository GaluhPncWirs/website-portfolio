import Navbar from "./navbar";

export default function MainContent() {
  return (
    <div className="basis-2/3 bg-gray-700 rounded-xl">
      <div className="ml-10">
        <div className="flex justify-between">
          <div className="relative top-8">
            <div className="text-2xl text-slate-200 theLine">About Me</div>
          </div>
          <Navbar />
        </div>
        <div className="max-w-3xl">
          <div className="mt-11 text-slate-200">
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
          <div className="mt-5">
            <h1 className="font-semibold text-slate-200 text-2xl">
              What I`m Doing
            </h1>
            <div className="flex items-center mt-4 justify-between">
              <div className="max-w-[23rem] bg-slate-300 min-h-36 rounded-xl">
                <img src="" alt="" />
                <div>
                  <h1>Web Desain</h1>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa dolor eaque excepturi commodi facere quidem est
                    architecto
                  </p>
                </div>
              </div>
              <div className="max-w-[23rem] bg-slate-300 min-h-36 rounded-xl">
                <img src="" alt="" />
                <div>
                  <h1>Web Desain</h1>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa dolor eaque excepturi commodi facere quidem est
                    architecto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
