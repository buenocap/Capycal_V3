import "./MobileMenu.css";
import { NavLink } from "react-router";
import { useState } from "react";

export default function MobileMenu() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  function handleCurrentPage(page) {
    setCurrentPage(page);
  }
  return (
    <div className="menu w-full bg-base-200 rounded-box md:hidden text-theme shadow-md ">
      <ul>
        <li>
          <NavLink to="/" onClick={() => handleCurrentPage("/")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calendar"
            onClick={() => handleCurrentPage("/calendar")}
          >
            Calendar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authentication"
            onClick={() => handleCurrentPage("/authentication")}
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            onClick={() => handleCurrentPage("/settings")}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
