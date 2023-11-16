import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  return (
    <div className="flex justify-center justify-between bg-black px-2 pb-3 pt-5 text-center">
      <div className="flex flex-col justify-center">
        <FontAwesomeIcon
          icon={faBars}
          className="h-8 w-8 p-7 pt-10 text-white"
        />
      </div>
      <div className="">
        <img src="/images/mobilelogo.png" className="h-fit w-full p-5 pl-6" />
      </div>
      <div className="flex flex-col justify-center">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="h-8 w-8 p-5 p-7 pt-10 text-white"
        />
      </div>
    </div>
  );
}
