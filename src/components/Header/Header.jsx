import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  function handleToggleMobileMenu() {
    setToggleMobileMenu(!toggleMobileMenu);
  }

  return (
    <>
      {/** Desktop Menu */}
      <div class="navbar bg-base-100 shadow-sm text-theme hidden md:flex">
        <div class="flex-1">
          <a class="btn btn-ghost text-2xl">
            <img src="/CapycalLogo.png" width={35} />
            Capycal
          </a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/** Mobile Menu */}
      <div class="md:hidden navbar bg-base-100 shadow-sm">
        <div class="flex-none">
          <button
            class="btn btn-square btn-ghost"
            onClick={handleToggleMobileMenu}
          >
            {toggleMobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </button>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl text-theme">
            <img src="/CapycalLogo.png" alt="Capycal Logo" width={35}></img>
            Capycal
          </a>
        </div>
        <div class="flex-none"></div>
      </div>
      {toggleMobileMenu && <MobileMenu />}
    </>
  );
}
