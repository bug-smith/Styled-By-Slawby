export function BridalCard({ packageItem }) {
  return (
    <div className="flex justify-center pb-5">
      <div className="flex w-[93%] flex-col rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-2 drop-shadow-2xl hover:cursor-pointer hover:opacity-80">
        <div>
          <p className="text pb-2 font-Laqucer text-xs text-white md:text-2xl">
            {packageItem.title}
          </p>
        </div>
        <div>
          <img
            src={packageItem.image}
            alt={packageItem.title}
            className="w-100 h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
