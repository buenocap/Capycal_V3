import "./MobileMenu.css";
import { NavLink } from "react-router";
import { useState } from "react";

export default function MobileMenu() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  function handleCurrentPage(page) {
    setCurrentPage(page);
  }
  return (
    <div className="md:hidden flex h-full flex-col justify-between border-e border-gray-100 bg-AshGray/50 rounded-xl px-4 py-2 m-3 text-theme">
      <div className="px-4 py-6 ">
        <ul className="mt-1 space-y-1">
          <li>
            <NavLink
              to="/"
              className={`block rounded-lg px-4 py-2 text-sm font-bold ${
                currentPage === "home" ? "mobile-active" : ""
              }`}
              onClick={() => handleCurrentPage("home")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/calendar"
              className={`block rounded-lg px-4 py-2 text-sm font-bold ${
                currentPage === "calendar" ? "mobile-active" : ""
              } `}
              onClick={() => handleCurrentPage("calendar")}
            >
              Calendar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={`block rounded-lg px-4 py-2 text-sm font-bold ${
                currentPage === "contact" ? "mobile-active" : ""
              } `}
              onClick={() => handleCurrentPage("contact")}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                className={`flex items-center justify-between rounded-lg px-4 py-2`}
              >
                <span className="text-sm font-bold"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fillRule="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <NavLink
                    to="/authentication"
                    className={`block rounded-lg px-4 py-2 text-sm font-bold ${
                      currentPage === "authentication" ? "mobile-active" : ""
                    }`}
                    onClick={() => handleCurrentPage("authentication")}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
