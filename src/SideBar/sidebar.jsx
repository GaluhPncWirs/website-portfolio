import { useId } from "react";

export default function SideBar() {
  const textSideBar = [
    {
      id: useId(),
      icon: "./images/email.png",
      nameAttr: "Email",
      attribute: "galuhpanca33@gmail.com",
    },
    {
      id: useId(),
      icon: "./images/no-handphone.png",
      nameAttr: "Phone",
      attribute: "(+62) 8989134276",
    },
    {
      id: useId(),
      icon: "./images/calendar.png",
      nameAttr: "Brithday",
      attribute: "October 29, 2003",
    },
    {
      id: useId(),
      icon: "./images/location.png",
      nameAttr: "Location",
      attribute: "Bogor, Jawa Barat",
    },
  ];
  return (
    <div className="h-full w-1/4 fixed left-5 pt-5">
      <div className="bg-gray-700 rounded-xl py-10">
        <div className="flex flex-col justify-center items-center">
          <img src="./images/profile.png" className="rounded-full w-1/2" />
          <h1 className="text-2xl mt-5 mb-4 font-semibold text-slate-400">
            Galuh Panca Wirasa
          </h1>
          <div className="bg-slate-600 w-1/2 rounded-md">
            <h2 className="text-slate-300 font-bold text-center py-1">
              Web Developer
            </h2>
          </div>
        </div>
        <hr className="border-slate-500 border w-5/6 mx-auto mt-8" />
        <div className="mt-5 flex flex-col gap-y-3 items-center w-4/5 mx-auto">
          {textSideBar.map((item) => (
            <div className="flex items-center gap-5 max-w-60" key={item.id}>
              <img src={item.icon} className="w-[10%]" />
              <div>
                <h1 className="text-slate-400 font-semibold">
                  {item.nameAttr}
                </h1>
                <h2 className="text-slate-300 font-medium">{item.attribute}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-7 justify-center gap-3 items-center">
          <a
            className="flex justify-center"
            href="https://web.facebook.com/galuh.panca.79"
          >
            <img
              src="./images/icon-facebook.png"
              className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
            />
          </a>
          <a
            className="flex justify-center"
            href="https://www.instagram.com/galuhpncwirasa_/"
          >
            <img
              src="./images/icon-instagram.png"
              className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
            />
          </a>
          <a className="flex justify-center" href="https://www.linkedin.com/">
            <img
              src="./images/icon-linkedin.png"
              className="w-3/5 grayscale hover:grayscale-0 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
