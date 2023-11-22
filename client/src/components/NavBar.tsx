import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="flex items-center justify-between bg-black px-2 py-5 text-white">
        <FontAwesomeIcon
          icon={faBars}
          className={`h-5 w-5 pl-8 hover:cursor-pointer`}
          onClick={toggleDrawer}
        />
        <img src="/images/mobilelogo.png" className="h-16 md:hidden" />
        <img src="/images/desktoplogo.png" className="hidden md:block" />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="h-5 w-5 pr-8 hover:cursor-pointer"
        />
      </div>
      {isDrawerOpen && (
        <div
          className={`transisition-opacity fixed inset-0 z-40 bg-black bg-opacity-75 duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacitiy-0 pointer-events-none"
          }`}
        >
          <div
            className={`${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } fixed inset-y-0 left-0 z-50 w-2/4 transform overflow-auto bg-white bg-opacity-50 p-5 pt-20 transition-transform duration-300 md:w-1/4`}
          >
            <nav className="space-y-1">
              <Link
                to="/"
                className="block flex justify-center rounded-xl bg-opacity-50 px-4 py-2 font-Koho text-sm hover:bg-white hover:bg-opacity-50 md:text-xl"
                onClick={closeDrawer}
              >
                Home
              </Link>
              <Link
                to="contact"
                className="block flex justify-center rounded-xl px-4 py-2 font-Koho text-sm hover:bg-gray-100 hover:bg-white hover:bg-opacity-50 md:text-xl"
                onClick={closeDrawer}
              >
                Contact
              </Link>
              <Link
                to="sign-in"
                className="block flex justify-center rounded-xl px-4 py-2 font-Koho text-sm hover:bg-gray-100 hover:bg-white hover:bg-opacity-50 md:text-xl"
                onClick={closeDrawer}
              >
                Sign-in
              </Link>
              <Link
                to="About"
                className="block flex justify-center rounded-xl px-4 py-2 font-Koho text-sm hover:bg-gray-100 hover:bg-white hover:bg-opacity-50 md:text-xl"
                onClick={closeDrawer}
              >
                About
              </Link>
            </nav>
          </div>
          {isDrawerOpen && (
            <div
              onClick={closeDrawer}
              className="absolute inset-0 z-40 bg-black bg-opacity-0 transition-opacity duration-300"
            ></div>
          )}
        </div>
      )}
    </>
  );
}