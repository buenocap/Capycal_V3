import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router";
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
              <NavLink
                to="/"
                className={` ${active === "Home" ? "active" : ""}`}
                id="Home"
                onClick={() => handleActivePage("Home")}
              >
                Home
              </NavLink>
            </li>
            <li className="menuNav">
              <NavLink
                to="/calendar"
                className={` ${active === "Calendar" ? "active" : ""}`}
                id="Calendar"
                onClick={() => handleActivePage("Calendar")}
              >
                Calendar
              </NavLink>
            </li>
            <li className="menuNav">
              <NavLink
                to="/contact"
                className={` ${active === "Contact" ? "active" : ""}`}
                id="Contact"
                onClick={() => handleActivePage("Contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="Login font-bold text-lg hidden md:block menuNav">
          <NavLink
            to="/authentication"
            className={` ${active === "Authentication" ? "active" : ""}`}
            id="Authentication"
            onClick={() => handleActivePage("Authentication")}
          >
            Login
          </NavLink>
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
          {toggleMobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {toggleMobileMenu && (
        <MobileMenu active={active} onActivePage={handleActivePage} />
      )}
    </>
  );
}
