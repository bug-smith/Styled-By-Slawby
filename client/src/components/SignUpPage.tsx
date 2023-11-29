import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { FaArrowLeft } from "react-icons/fa6";

export function SignUpPage() {
  const navigate = useNavigate();

  async function handleSignUpSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    try {
      const req = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      const res = await fetch("/api/sign-up", req);
      if (!res.ok) {
        const errorResponse = await res.json();
        if (res.status === 409) {
          alert(errorResponse.error);
          return;
        }
        throw new Error(`fetch failed ${res.status}`);
      }
      console.log(userData);
      const user = await res.json();
      console.log(`registered ${user}`);
      navigate("/sign-in");
    } catch (e) {
      console.error(e);
    }
  }

  function handleArrowClick() {
    navigate("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pb-5 pt-5">
      <div className="font-Aleg-300 mb-5 flex w-[93%] items-center justify-around rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 text-white drop-shadow-2xl">
        <div className="mr-auto">
          <FaArrowLeft
            onClick={handleArrowClick}
            className="hover:cursor-pointer"
          />
        </div>
        <p className="flex-grow text-center">sign up</p>
      </div>
      <div className="font-Laqucer mb-5 flex h-72 w-[93%] items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-2 font-Koho text-white drop-shadow-2xl">
        <form
          className="flex h-3/5 flex-col items-center justify-around"
          onSubmit={handleSignUpSubmit}
        >
          <div>
            <label className="ml-7 pr-5 font-Koho">email</label>
            <input
              className="rounded-lg text-black"
              required
              type="email"
              name="email"
            />
          </div>
          <div>
            <label className="pr-5 font-Koho">password</label>
            <input
              className="rounded-lg text-black"
              type="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="ml-5 flex h-7 w-1/3 justify-center rounded-lg border border-white bg-[#D9D9D9] font-Koho text-white transition duration-500 ease-in-out hover:bg-[#518058]"
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
