import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInPage } from "./components/SignInPage";
import { About } from "./components/About";

export default function App() {
  // const [serverData, setServerData] = useState("");
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [selectMenuItem, setSelectedMenuItem] = useState("");

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch("/api/hello");
      const data = await resp.json();

      console.log("Data from server:", data);

      // setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <div className="h-screen bg-[#D9D9D9]">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignInPage />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
