import "./Header.css";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  function handleActivePage(item) {
    setActive(item);
  }

  function handleToggleMobileMenu() {
    setToggleMobileMenu(!toggleMobileMenu);
  }

  return (
    <>
      <div className="header bg-AshGray/50 rounded-3xl flex justify-between items-center px-4 py-2 m-3 text-theme">
        <div className=" flex items-center gap-1">
          <img src="./CapycalLogo.png" alt="Capycal Logo" width={50} />
          <p className="text-2xl font-extrabold">Capycal</p>
        </div>
        {/** Desktop Navigation */}
        <nav className="Nav hidden md:block">
          <ul className=" flex flex-row gap-4 text-xl font-bold">
            <li className="menuNav">
              <a
                className={` ${active === "Home" ? "active" : ""}`}
                href="#"
                id="Home"
                onClick={() => handleActivePage("Home")}
              >
                Home
              </a>
            </li>
            <li className="menuNav">
              <a
                className={` ${active === "Calendar" ? "active" : ""}`}
                href="#"
                id="Calendar"
                onClick={() => handleActivePage("Calendar")}
              >
                Dashboard
              </a>
            </li>
            <li className="menuNav">
              <a
                className={` ${active === "Contact" ? "active" : ""}`}
                href="#"
                id="Contact"
                onClick={() => handleActivePage("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="Login font-bold text-lg hidden md:block">
          <a href="#" className="menuNav">
            Login / Sign Out
          </a>
        </div>

        {/** Mobile Navigation */}
        <button
          type="button"
          className="md:hidden block bg-AshGray shadow-lg shadow-AshGray/50 ring ring-AshGray/50 active:bg-DimGray rounded transition duration-350 ease-in-out p-2"
          aria-label="Main menu"
          aria-expanded="false"
          aria-controls="menu"
          onClick={handleToggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>

      {toggleMobileMenu && (
        <MobileMenu active={active} onActivePage={handleActivePage} />
      )}
    </>
  );
}
