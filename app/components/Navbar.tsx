export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row p-8 pb-24">
        <div className="mr-20">
          <p className="text-xl font-bold">Logo</p>
        </div>
        <menu className="pt-2">
          <ul className="flex flex-row">
            <li className="navItem">About</li>
            <li className="navItem">Experience</li>
            <li className="navItem">Projects</li>
            <li className="navItem">Contact</li>
            <li className="navItem">Blog</li>
          </ul>
        </menu>
        <div className="flex flex-1" />
        <div className="">
          <button className="border-2 border-gold rounded-md px-3 py-1 font-archivo uppercase text-xs text-gold tracking-widest hover:bg-gold-hover transition-opacity">
            Resume
          </button>
        </div>
      </nav>
    </div>
  );
}
