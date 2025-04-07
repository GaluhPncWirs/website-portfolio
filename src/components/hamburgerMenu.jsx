export default function HamburgerMenu() {
  return (
    <div className="menu flex flex-col h-5 justify-between">
      <input
        type="checkbox"
        className="size-5 absolute z-20 cursor-pointer opacity-0"
      />
      <span className="block w-6 h-1 bg-white rounded-md transition-all"></span>
      <span className="block w-6 h-1 bg-white rounded-md transition-all"></span>
      <span className="block w-6 h-1 bg-white rounded-md transition-all"></span>
    </div>
  );
}
