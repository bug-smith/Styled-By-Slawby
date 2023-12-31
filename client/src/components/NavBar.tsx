import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function NavBar({ setIsLoggedIn, isLoggedIn, cartItems, setCartItems }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [setIsLoggedIn]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => setIsDrawerOpen(false);

  function handleSignOutClick() {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    setCartItems([]);
  }

  function handleCartClick() {
    return navigate("/cart");
  }

  return (
    <>
      {isLoggedIn && (
        <div className="font-Alegreya flex h-1 items-start justify-end gap-3 pr-7 pt-2 text-xs text-white hover:cursor-pointer">
          <p className="underline" onClick={handleSignOutClick}>
            sign out
          </p>
        </div>
      )}
      <div className="flex items-center justify-between px-2 py-5 text-white">
        <FontAwesomeIcon
          icon={faBars}
          className={`h-5 w-5 pl-8 hover:cursor-pointer`}
          onClick={toggleDrawer}
        />
        <img
          src="/images/mobilelogo.png"
          className="h-16 md:hidden"
          onClick={() => navigate("/")}
        />
        <img
          src="/images/desktoplogo.png"
          className="hidden md:block"
          onClick={() => navigate("/")}
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="relative h-5 w-5 pr-8 hover:cursor-pointer"
          onClick={handleCartClick}
        />
        {cartItems.length > 0 && (
          <span className="absolute right-[2rem] top-[2.6rem] block h-4 w-4 rounded-full bg-red-500 text-center text-xs leading-4 text-white opacity-90">
            {cartItems.length}
          </span>
        )}
      </div>
      <div
        className={`transisition-opacity fixed inset-0 z-40 bg-black bg-opacity-75 duration-300 ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
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
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 z-40 bg-black bg-opacity-0 transition-opacity duration-300 ${
            isDrawerOpen ? "" : "pointer-events-none"
          }`}
        ></div>
      </div>
    </>
  );
}
