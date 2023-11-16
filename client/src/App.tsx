import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { ProductCard } from "./components/ProductCard";

export default function App({ icon }) {
  const [serverData, setServerData] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectMenuItem, setSelectedMenuItem] = useState("");

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch("/api/hello");
      const data = await resp.json();

      console.log("Data from server:", data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <NavBar />
        <HomePage />
      </div>
    </>
  );
}
