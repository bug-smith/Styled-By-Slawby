import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export function SignInPage({ setIsLoggedIn }) {
  const navigate = useNavigate();

  async function handleSignInSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData.entries());
      const req = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      const res = await fetch("/api/sign-in", req);
      if (!res.ok) {
        const errorResponse = await res.json();
        alert(errorResponse.error);
        setIsLoggedIn(false);
        throw new Error(`fetch request failed ${res.status}`);
      }
      const { token } = await res.json();
      sessionStorage.setItem("token", token);
      alert("Sign in successful");
      setIsLoggedIn(true);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  }

  function handleSignIn() {
    if (sessionStorage.getItem("token")) {
      alert("you are already signed in");
      return;
    } else {
      setIsLoggedIn(false);
    }
  }

  function handleArrowClick() {
    navigate("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pb-5 pt-5">
      <div className="font-Aleg-300 mb-5 flex w-[93%] items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 text-white drop-shadow-2xl">
        <div className="mr-auto">
          <FaArrowLeft
            onClick={handleArrowClick}
            className="hover:cursor-pointer"
          />
        </div>
        <p className="flex-grow text-center">sign in</p>
      </div>
      <div className="font-Laqucer mb-5 flex h-72 w-[93%] flex-col justify-center gap-5 rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-2 font-Koho text-white drop-shadow-2xl">
        <form
          className="flex flex-col items-center justify-around gap-7"
          onSubmit={handleSignInSubmit}
        >
          <div>
            <label className="ml-7 pr-5 font-Koho">email</label>
            <input
              className="mr-5 rounded-lg text-black"
              type="email"
              name="email"
            />
          </div>
          <div>
            <label className="pr-5 font-Koho">password</label>
            <input
              className="mr-5 rounded-lg text-black"
              type="password"
              name="password"
            />
          </div>
          <button
            className="ml-5 flex h-7 w-1/3 justify-center rounded-lg border border-white bg-[#D9D9D9] font-Koho text-white transition duration-500 ease-in-out hover:bg-[#518058]"
            type="submit"
            onClick={handleSignIn}
          >
            sign in
          </button>
        </form>
        <div className="flex justify-center">
          <Link
            to="/sign-up"
            className="ease-n-out ml-5 flex h-7 w-1/3 justify-center rounded-lg border border-white bg-[#D9D9D9] font-Koho text-white transition duration-500 ease-in-out hover:bg-[#518058]"
          >
            <button>sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
