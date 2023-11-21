import { BridalCard } from "./ProductCards";
import bridalImage from "/images/bridal.png";
import blackTieImage from "/images/blacktie.png";
import vacationImage from "/images/vacation.png";

export function HomePage() {
  const packageItems = [
    {
      id: 1,
      title: "Bridal Package",
      image: bridalImage,
    },
    {
      id: 2,
      title: "Black Tie & Party Package",
      image: blackTieImage,
    },
    {
      id: 3,
      title: "Vacation Package",
      image: vacationImage,
    },
  ];

  return (
    <div>
      <div className="pb-5">
        <img
          src="/images/hero.png"
          className="rounded-lg rounded-t-none drop-shadow-2xl"
        />
      </div>
      {packageItems.map((item) => (
        <BridalCard packageItem={item} key={item.id} />
      ))}
    </div>
  );
}
