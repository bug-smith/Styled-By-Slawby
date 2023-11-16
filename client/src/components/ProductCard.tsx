export function ProductCard() {
  return (
    <div className="flex justify-center pb-5">
      <div className="flex w-[93%] flex-col rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-2 drop-shadow-2xl">
        <div>
          <p className="pb-2 text-white">Bridal Package</p>
        </div>
        <div>
          <img
            src="../public/images/bridal.png"
            className="w-100 h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
