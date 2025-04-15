import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="rounded-bl-xl rounded-tr-xl basis-3/5 shadow-lg shadow-slate-500 max-[640px]:basis-10/12">
      <ul className="flex justify-around h-14 items-center font-semibold text-lg text-slate-100 max-[640px]:text-base max-[640px]:px-3 md:text-base">
        <li className="hover:text-slate-300">
          <Link to={"/"}>About</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/resume"}>Resume</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/project"}>Project</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
