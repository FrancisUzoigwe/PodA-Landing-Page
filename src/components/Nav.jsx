import { useState, useEffect } from "react";

import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 100 pixels
      setIsScrolled(window.scrollY > 100);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`padding-x py-5 absolute z-50 w-full bg-white ${
        isScrolled ? "sticky top-0 transition-all duration-300 ease-in-out" : ""
      }`}
    >
      {" "}
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-poppins leading-normal text-lg text-primary hover:text-secondary transition duration-300 ease-in-out"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-white text-lg leading-normal font-poppins max-lg:hidden wide:mr-24 bg-black p-3 px-7 rounded hover:bg-secondary transition duration-300 ease-in-out">
          <button type="button">Join Waitlist</button>
        </div>

        <div className="hidden max-lg:block fixed right-8 gap-2 text-white text-lg leading-normal font-poppins">
          <div className="flex">
            <div className="mr-4 bg-black p-3 px-7 rounded hover:bg-secondary transition duration-300 ease-in-out">
              <a href="/">Join Waitlist</a>
            </div>

            <img
              src={hamburger}
              alt="hamburger"
              width={27}
              height={27}
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-bwhite absolute top-10 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar bg-white transition-transform transform ease-in-out duration-300`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-Poppins leading-normal text-[18px] text-primary hover:text-secondary transition-colors duration-300 ease-in-out"
                      onClick={() => setToggle(false)} // Close the menu when an item is clicked
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
