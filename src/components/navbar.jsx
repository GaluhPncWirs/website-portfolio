import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="rounded-bl-xl rounded-tr-xl basis-3/5 shadow-lg shadow-slate-500">
      <ul className="flex justify-around h-14 items-center font-semibold text-lg text-slate-100">
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
