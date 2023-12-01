import { FaRegTrashCan } from "react-icons/fa6";

export function CartItems({ cartItems, setCartItems }) {
  async function handleDelete(productId) {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/cart-delete/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("no response");
      }
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.productId !== productId),
      );
      alert(`item removed from cart`);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="font-Aleg-300 mt-5 flex flex w-[93%] flex-col items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 text-xl lowercase text-white drop-shadow-2xl">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="mb-5 min-w-full rounded-lg border border-white !opacity-100 drop-shadow-2xl"
        >
          <p className="mb-2 mt-2 pl-2 text-xs">{item.title}</p>
          <img
            src={item.imageUrl}
            className="mb-3 ml-3 w-1/4 rounded-xl border border-white"
          />
          <p className="mb-2 pl-2 text-xs">price: ${item.price}</p>
          <div className="mb-3 flex justify-center">
            <FaRegTrashCan
              onClick={() => handleDelete(item.productId)}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
