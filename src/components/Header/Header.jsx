import "./Header.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const token = localStorage.getItem("token");

  function handleToggleMobileMenu() {
    setToggleMobileMenu(!toggleMobileMenu);
  }

  useEffect(() => {});

  return (
    <>
      {/** Desktop Menu */}
      <div className="navbar bg-base-100 shadow-sm text-theme hidden md:flex">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-2xl">
            <img src="/CapycalLogo.png" width={35} />
            Capycal
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
            <li>
              <NavLink to={token ? "/login" : "/signup"}>
                Login / Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/** Mobile Menu */}
      <div className="md:hidden navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={handleToggleMobileMenu}
          >
            {toggleMobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl text-theme">
            <img src="/CapycalLogo.png" alt="Capycal Logo" width={35}></img>
            Capycal
          </a>
        </div>
        <div className="flex-none"></div>
      </div>
      {toggleMobileMenu && <MobileMenu />}
    </>
  );
}
