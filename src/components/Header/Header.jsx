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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
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
    </>
  );
}
