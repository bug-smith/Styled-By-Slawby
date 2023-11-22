import { Link } from "react-router-dom";

export function SignInPage() {
  return (
    <div className="justify-top flex h-screen flex-col items-center pb-5 pt-5">
      <div className="font-Aleg-300 mb-5 flex w-[93%] justify-center rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-5 text-white drop-shadow-2xl">
        <p>sign in</p>
      </div>
      <div className="font-Laqucer mb-5 flex h-72 w-[93%] justify-center rounded-xl border-2 border-white bg-black bg-black pb-5 pl-5 pr-5 pt-2 font-Koho text-white drop-shadow-2xl">
        <form className="flex flex-col items-center justify-around">
          <div>
            <label className="ml-7 pr-5 font-Koho">email</label>
            <input className="rounded-lg text-black" />
          </div>
          <div>
            <label className="pr-5 font-Koho">password</label>
            <input className="rounded-lg text-black" />
          </div>
          <Link
            to="/"
            className="ml-5 flex h-7 w-1/3 justify-center rounded-lg border border-white bg-[#D9D9D9] font-Koho text-black"
          >
            <button>sign in</button>
          </Link>
          <Link
            to="/sign-up"
            className="ml-5 flex h-7 w-1/3 justify-center rounded-lg border border-white bg-[#D9D9D9] font-Koho text-black"
          >
            <button>sign up</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
