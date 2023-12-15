import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
type Product = {
  desc: string;
  imageUrl: string;
  info: string;
  price: number;
  productId: number;
  title: string;
};
export function ProductDetails({ setCartItems, cartItems, isLoggedIn }) {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [productList, setList] = useState<string[]>([]);
  const navigate = useNavigate();
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

  async function addToCart() {
    const token = sessionStorage.getItem("token");
    const userId = token ? parseInt(token, 10) : null;
    const productId = product?.productId;
    const isProductInCart = cartItems.some(
      (item) => item.productId === productId,
    );
    if (isProductInCart) {
      alert("Product is already in your cart, please view your cart");
      return;
    }
    if (!isLoggedIn) {
      alert("Please sign in to add this item to the cart");
    } else
      try {
        const res = await fetch("/api/add-to-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId, productId }),
        });
        if (!res.ok) {
          throw new Error("failed to add product to cart");
        }
        const result = await res.json();
        setCartItems((currentItems) => [...currentItems, result]);
        alert(`Added ${result.title} to cart`);
      } catch (e) {
        console.error(e);
      }
  }

  if (!product) {
    return <div>Loading...</div>;
  }
  function handleArrowClick() {
    navigate("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center pb-5 pt-5">
      <div className="flex flex w-[93%] flex-col items-center items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5  pr-5 pt-2 font-Koho text-xl text-white shadow-lg drop-shadow-2xl">
        <div className="mt-2 flex items-center pr-3">
          <div className="mr-3">
            <FaArrowLeft
              onClick={handleArrowClick}
              className="mt-1 hover:cursor-pointer"
            />
          </div>
          <p className="text-center lowercase">{product.title}</p>
        </div>
        <div className="mt-5">
          <img
            src={product.imageUrl}
            className="rounded-lg border-2 border-white"
            alt={product.title}
          />
        </div>
      </div>
      <div className="mt-5 flex flex w-[93%] flex-col items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 font-Koho text-sm text-white shadow-lg drop-shadow-2xl">
        <p className="rounded-lg border-2 p-3 px-3">{product.desc}</p>
        <ul className="mt-5 list-inside list-disc rounded-lg border-2 p-5">
          {productList.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="mt-5 flex flex w-[93%] items-center justify-around rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 font-Koho text-sm text-white shadow-lg drop-shadow-2xl">
        <p>price: ${product.price}.00</p>
        <button
          className="ml-5 h-7 w-1/3 rounded-lg border border-white bg-[#D9D9D9] font-Koho text-black transition duration-500 ease-in-out hover:bg-[#518058]"
          onClick={addToCart}
        >
          buy
        </button>
      </div>
    </div>
  );
}
