import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("Home");

  function handleActivePage(item) {
    setActive(item);
  }

  return (
    <div className="header bg-AshGray/50 rounded-3xl flex justify-between items-center px-4 py-2 m-3 text-theme">
      <div className=" flex items-center gap-1">
        <img src="./CapycalLogo.png" alt="Capycal Logo" width={50} />
        <p className="text-2xl font-extrabold">Capycal</p>
      </div>
      <nav className="Nav">
        <ul className="flex gap-4 text-xl font-bold">
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
      <div className="Login font-bold text-lg">
        <a href="#" className="menuNav">
          Login / Sign Out
        </a>
      </div>
    </div>
  );
}
