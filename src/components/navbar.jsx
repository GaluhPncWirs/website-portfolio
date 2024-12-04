import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-slate-500 rounded-bl-xl rounded-tr-xl basis-3/5">
      <ul className="flex justify-around h-14 items-center font-semibold text-lg text-slate-100">
        <li>
          <Link to={"/"}>About</Link>
        </li>
        <li>
          <Link to={"resume"}>Resume</Link>
        </li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
