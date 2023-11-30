import { FaArrowLeft } from "react-icons/fa6";
import { CartItems } from "./CartItems";
import { useNavigate } from "react-router-dom";

export function Cart({ cartItems, setCartItems, isLoggedIn }) {
  const navigate = useNavigate();

  function handleArrowClick() {
    navigate("/");
  }
  const calculateTotalPrice = () => {
    return cartItems?.reduce((total, item) => total + item.price, 0);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center text-white">
        <p className="mb-5 text-xl"> Please log in to see cart</p>
        <p>Please click the arrow below to login</p>
        <FaArrowLeft onClick={() => navigate("/sign-in")} />
      </div>
    );
  }

  const totalPrice = calculateTotalPrice();
  console.log(cartItems);
  return (
    <div className="flex min-h-screen flex-col items-center justify-start pb-5 pt-5">
      <div className=" flex w-[93%] items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 font-Aleg text-lg text-white drop-shadow-2xl">
        <div className="mr-auto">
          <FaArrowLeft
            onClick={handleArrowClick}
            className="hover:cursor-pointer"
          />
        </div>
        <p className="flex-grow pr-6 text-center">cart</p>
      </div>
      <CartItems cartItems={cartItems} setCartItems={setCartItems} />
      <div className="mt-5 flex w-[93%] flex-col justify-center gap-3 rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 font-Aleg text-lg text-white drop-shadow-2xl">
        <p>items: {cartItems.length}</p>
        <p>total price: ${totalPrice}.00</p>
        <div className="flex justify-center">
          <button className="ml-5 flex h-7 w-1/3 items-center justify-center rounded-lg border border-white bg-[#D9D9D9] font-Koho text-white transition duration-500 ease-in-out hover:bg-[#518058]">
            check-out
          </button>
        </div>
      </div>
    </div>
  );
}
