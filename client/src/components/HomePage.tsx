import { ProductCards } from "./ProductCards";
import bridalImage from "/images/bridal.png";
import blackTieImage from "/images/blacktie.png";
import vacationImage from "/images/vacation.png";

export function HomePage() {
  const packageItems = [
    {
      id: 1,
      title: `Bridal Package`,
      image: bridalImage,
      urlString: `Bridal_Package`,
    },
    {
      id: 2,
      title: "Black Tie & Party Package",
      image: blackTieImage,
      urlString: `Black Tie & Party Package`,
    },
    {
      id: 3,
      title: "Vacation Package",
      image: vacationImage,
      urlString: `Vacation Package`,
    },
  ];

  return (
    <div>
      <div className="flex justify-center pb-5">
        <img
          src="/images/hero.png"
          className="w-[97%] rounded-xl border shadow-lg shadow-[#000] drop-shadow-2xl"
        />
      </div>
      {packageItems.map((item) => (
        <ProductCards packageItem={item} key={item.id} />
      ))}
    </div>
  );
}
