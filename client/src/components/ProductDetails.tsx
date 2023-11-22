import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type Product = {
  desc: string;
  imageUrl: string;
  info: string;
  price: number;
  productId: number;
  title: string;
};
export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [productList, setList] = useState<string[]>([]);
  // const [error, setError] = useState();
  useEffect(() => {
    async function readProduct(productId) {
      try {
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) {
          throw new Error("unable to reach response");
        }
        const data = await res.json();
        setProduct(data);
        if (data.info) {
          const arrayInfo = data.info.split(", ");
          setList(arrayInfo);
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (id) {
      readProduct(id);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center pb-5 pt-5">
      <div className="flex flex w-[93%] flex-col items-center justify-center rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-2 font-Koho text-xl text-white drop-shadow-2xl">
        {product.title ? (
          <p className="lowercase">{product.title}</p>
        ) : (
          <p>Loading...</p>
        )}
        <div className="mt-5">
          <img
            src={product.imageUrl}
            className="rounded-lg border-2 border-white"
            alt={product.title}
          />
        </div>
      </div>
      <div className="mt-5 flex flex w-[93%] flex-col items-center justify-center rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-5 font-Koho text-sm text-white drop-shadow-2xl">
        <p className="rounded-lg border-2 p-3 px-3">{product.desc}</p>
        <ul className="mt-5 list-inside list-disc rounded-lg border-2 p-5">
          {productList.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="mt-5 flex flex w-[93%] items-center justify-around rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-5 font-Koho text-sm text-white drop-shadow-2xl">
        <p>price: ${product.price}.00</p>
        <button className="ml-5 h-7 w-1/3 rounded-lg border border-white bg-[#D9D9D9] font-Koho text-black">
          buy
        </button>
      </div>
    </div>
  );
}
