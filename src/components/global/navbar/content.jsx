import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="rounded-bl-xl rounded-tr-xl shadow-lg shadow-slate-500 basis-10/12 sm:basis-3/5 md:basis-[63%] xl:basis-1/2">
      <ul className="flex justify-evenly h-14 items-center font-semibold text-slate-100 text-base lg:text-lg">
        <li className="hover:text-slate-300">
          <Link to={"/AboutMe"}>About</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/Resume"}>Resume</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/Projects"}>Project</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
