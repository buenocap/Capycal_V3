import "./MobileMenu.css";
import { NavLink } from "react-router";
import { useState } from "react";

export default function MobileMenu() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  function handleCurrentPage(page) {
    setCurrentPage(page);
  }
  return <div className="md:hidden "></div>;
}
