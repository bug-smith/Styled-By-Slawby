import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInPage } from "./components/SignInPage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ProductDetails } from "./components/ProductDetails";
import SignUpPage from "./components/SignUpPage";

export default function App() {
  // const [serverData, setServerData] = useState("");
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [selectMenuItem, setSelectedMenuItem] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");
        const imagePaths = await response.json();
        setProducts(imagePaths);
      } catch (e) {
        console.error(e);
      }
    }
    loadProducts();
  }, []);

  console.log(`products`, products);
  return (
    <div className="relative sticky h-screen object-cover sm:h-full sm:object-cover md:h-full md:object-cover lg:h-full lg:object-cover">
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/images/background.mp4" type="video/mp4"></source>
      </video>
      <div className="relative z-30">
        <NavBar />
      </div>
      <div className="relative z-20">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}
