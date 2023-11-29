import { Link } from "react-router-dom";
export function ProductCards({ packageItem }) {
  return (
    <>
      <Link to={`/product/${packageItem.id}`}>
        <div className="flex justify-center pb-5">
          <div className="flex flex w-[93%] flex-col justify-center rounded-xl border border-white bg-[#8dccdd] pb-6 pl-5 pr-5 pt-2 shadow-lg shadow-[#000] drop-shadow-2xl hover:cursor-pointer hover:opacity-80 hover:transition hover:duration-200">
            <div>
              <p className="text pb-2 font-Aleg text-sm lowercase text-white md:text-2xl">
                {packageItem.title}
              </p>
            </div>
            <div>
              <img
                src={packageItem.image}
                alt={packageItem.title}
                className="h-auto h-auto w-full rounded-md rounded-b border"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
