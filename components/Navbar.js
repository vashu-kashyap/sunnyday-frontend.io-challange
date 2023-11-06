import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hamburgerIcon from "../public/icon-hamburger.svg";
import closeIcon from "../public/icon-hamburger.svg";

/**
 * Navbar component representing the website header and navigation menu.
 * @returns {JSX.Element} Navbar component
 */
const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [menu, setMenu] = useState('max-sm:hidden');

  // Function to handle mobile menu visibility toggle
  const handleMenu = () => {
    // Toggle the menu visibility based on the current state
    if (menu === 'max-sm:hidden') {
      setMenu('max-sm:block');
    } else {
      setMenu('max-sm:hidden');
    }
  };

  return (
    // Header section containing logo, hamburger menu button, and navigation menu
    <header className="flex justify-between items-center absolute w-full top-0 left-0 p-4 lg:p-10">
      {/* Logo */}
      <div className="logo">
        <Link
          href={"/"}
          passHref
          className="text-2xl lg:text-4xl text-white font-bold font-barlow tracking-wider lg:text-3xl"
        >
          sunnyside
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="menu-toggler lg:hidden">
        <button className="toggle-btn">
          {/* Hamburger menu icon */}
          <Image src={hamburgerIcon} onClick={handleMenu} alt="menu button" />
        </button>
      </div>

      {/* Navigation Menu */}
      <div className={`nav-menu ${menu} absolute top-20 bg-white shadow-xl lg:relative lg:top-0 lg:w-fit lg:bg-transparent lg:shadow-none`}>
        <ul className="menu-list flex flex-col justify-center items-center gap-y-10 p-10 lg:flex-row lg:p-0 lg:gap-x-10">
          {/* Menu Items */}
          {/* About Page */}
          <li className="menu-item">
            <Link
              href={"/about"}
              passHref
              className="text-xl font-barlow font-bold text-grayish-blue tracking-wider lg:text-white lg:font-semibold"
            >
              About
            </Link>
          </li>
          {/* Services Page */}
          <li className="menu-item">
            <Link
              href={"/services"}
              passHref
              className="text-xl font-barlow font-bold text-grayish-blue tracking-wider lg:text-white lg:font-semibold"
            >
              Services
            </Link>
          </li>
          {/* Projects Page */}
          <li className="menu-item">
            <Link
              href={"/projects"}
              passHref
              className="text-xl font-barlow font-bold text-grayish-blue tracking-wider lg:text-white lg:font-semibold"
            >
              Projects
            </Link>
          </li>
          {/* Contact Button */}
          <li className="menu-item">
            <button className="text-xl font-fraunces uppercase font-bold text-black bg-yellow px-8 py-4 rounded-full lg:bg-white hover:lg:bg-white/30 transition-all ease-in-out duration-300 hover:lg:text-white">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
