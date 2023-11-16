import { ProductCard } from "./ProductCard";

export function HomePage() {
  return (
    <div>
      <div className="pb-5">
        <img
          src="/images/hero.png"
          className="rounded-lg rounded-t-none drop-shadow-2xl"
        />
      </div>
      <ProductCard />
    </div>
  );
}
