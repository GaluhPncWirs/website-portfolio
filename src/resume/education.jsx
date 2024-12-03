import Navbar from "../components/navbar";

export default function Resume() {
  return (
    <div className="w-[73%] bg-gray-700 rounded-xl pb-10 h-screen">
      <div className="flex justify-end relative">
        <div className="absolute left-10 top-8">
          <div className="text-2xl text-slate-200 theLine font-bold">
            Resume
          </div>
        </div>
        <Navbar />
      </div>
      <div>
        <div className="flex mt-14 gap-5 px-10">
          <div className="basis-1/5">
            <img src="./images/book_icon.png" alt="book" className="w-1/5" />
            <div className="w-40 h-0.5 mt-2 bg-white rounded-r-lg origin-top-left rotate-90 ml-5"></div>
          </div>
          <div className="basis-4/5 bg-slate-300">
            <h1>Educations</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
