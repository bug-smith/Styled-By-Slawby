import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInPage } from "./components/SignInPage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ProductDetails } from "./components/ProductDetails";
import SignUpPage from "./components/SignUpPage";
import { Cart } from "./components/Cart";
import { CheckOut } from "./components/CheckOut";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [serverData, setServerData] = useState("");
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [selectMenuItem, setSelectedMenuItem] = useState("");
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="relative sticky min-h-screen object-cover sm:h-full sm:object-cover md:h-full md:object-cover lg:h-full lg:object-cover">
      <video
        controls={false}
        playsInline
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/images/PoolReflection.mp4" type="video/mp4"></source>
      </video>
      <div className="relative z-30">
        <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </div>
      <div className="relative z-20">
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="sign-in"
            element={<SignInPage setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            }
          ></Route>
          <Route path="sign-up" element={<SignUpPage />}></Route>
          <Route
            path="cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                isLoggedIn={isLoggedIn}
              />
            }
          ></Route>
          <Route path="check-out" element={<CheckOut />}></Route>
        </Routes>
      </div>
    </div>
  );
}
