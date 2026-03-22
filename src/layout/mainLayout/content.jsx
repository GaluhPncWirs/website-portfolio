import HamburgerMenu from "../../components/global/hamburgerMenu/content";
import Navbar from "../../components/global/navbar/content";

export default function MainLayout({ propsTitle, children }) {
  function handleDownloadPortfolioToPDF() {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = window.location.origin + "/ConvertToPDF";
    document.body.appendChild(iframe);

    iframe.onload = function () {
      setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();

        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      }, 500);
    };
  }
  return (
    <div className="bg-gray-700 rounded-xl pb-10 w-full mt-4 md:w-[64%] md:mt-0 lg:w-[73%]">
      <div className="flex justify-end relative mb-10 sm:mb-0">
        <div className="basis-2/12 flex justify-center items-center sm:hidden">
          <HamburgerMenu />
        </div>
        <div className="absolute top-20 left-12 sm:top-8 sm:left-8">
          <h1 className="text-2xl text-slate-200 theLine font-bold">
            {propsTitle}
          </h1>
        </div>
        <Navbar />
      </div>
      <div
        className="size-14 bg-slate-600 shadow-lg right-16 animate-bounce bottom-10 shadow-slate-500 rounded-full fixed text-white cursor-pointer flex items-center justify-center"
        onClick={handleDownloadPortfolioToPDF}
      >
        <img src="/images/download.png" alt="Download" className="size-7" />
      </div>
      <div className="w-11/12 mx-auto">{children}</div>
    </div>
  );
}
