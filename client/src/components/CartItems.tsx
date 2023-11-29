export function CartItems({ cartItems }) {
  return (
    <div className="font-Aleg-300 mt-5 flex flex w-[93%] flex-col items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 text-xl lowercase text-white drop-shadow-2xl">
      {cartItems.map((item) => (
        <div
          key={item.productId}
          className="mb-5 min-w-full rounded-lg border border-white  !opacity-100 drop-shadow-2xl"
        >
          <p className="mb-2 mt-2 pl-2 text-xs">{item.title}</p>
          <img
            src={item.imageUrl}
            className="mb-3 ml-3 w-1/4 rounded-xl border border-white"
          />
          <p className="mb-2 pl-2 text-xs">price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}
