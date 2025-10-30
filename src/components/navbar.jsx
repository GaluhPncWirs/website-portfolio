import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="rounded-bl-xl rounded-tr-xl shadow-lg shadow-slate-500 max-[640px]:basis-10/12 sm:basis-3/5 md:basis-2/3 xl:basis-1/2">
      <ul className="flex justify-evenly h-14 items-center font-semibold text-slate-100 max-[640px]:text-base max-[640px]:px-3 sm:text-base lg:text-lg">
        <li className="hover:text-slate-300">
          <Link to={"/"}>About</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/resume"}>Resume</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/Project"}>Project</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
