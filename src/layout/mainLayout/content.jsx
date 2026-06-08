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
    <div className="max-w-7xl rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/30 shadow-2xl overflow-hidden pb-10 w-full mt-4 md:w-[64%] md:mt-0 lg:w-[73%]">
      <div className="relative flex justify-end mb-10 sm:mb-0">
        <div className="flex items-center justify-center basis-2/12 sm:hidden">
          <HamburgerMenu />
        </div>
        <div className="absolute top-20 left-12 sm:top-8 sm:left-8">
          <h1 className="text-2xl font-bold text-slate-200 theLine">
            {propsTitle}
          </h1>
        </div>
        <Navbar />
      </div>
      <div
        className="fixed flex items-center justify-center text-white rounded-full shadow-lg cursor-pointer size-14 bg-slate-600 right-16 animate-bounce bottom-10 shadow-slate-500"
        onClick={handleDownloadPortfolioToPDF}
      >
        <img src="/images/download.png" alt="Download" className="size-7" />
      </div>
      <div className="w-11/12 mx-auto">{children}</div>
    </div>
  );
}
