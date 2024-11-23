"use client";
import { useEffect } from "react";
import "./header.css";

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    const handleNavLinkClick = () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    document.querySelectorAll(".nav-link").forEach((n) => {
      n.addEventListener("click", handleNavLinkClick);
    });

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      document.querySelectorAll(".nav-link").forEach((n) => {
        n.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <>
      <header>
        <nav className="navbar">
          <a href="/" className="logo">
            MREC
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/courses" className="nav-link">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a href="/activities" className="nav-link">
                Activities
              </a>
            </li>
            <li className="nav-item">
              <a href="/achievements" className="nav-link">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a href="/faculty" className="nav-link">
                Faculty
              </a>
            </li>
            <li className="nav-item">
              <a href="/timetables" className="nav-link">
                Timetables
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
