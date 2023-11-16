import { ProductCard } from "./ProductCard";

export function HomePage() {
  return (
    <div>
      <div className="pb-5">
        <img
          src="../public/images/hero.png"
          className="rounded-lg rounded-t-none"
        />
      </div>
      <ProductCard />
    </div>
  );
}
