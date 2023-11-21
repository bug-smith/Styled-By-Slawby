export function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center pb-5 pt-5">
      <div className="mb-5 flex w-[93%] justify-center rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-2 font-Laqucer text-white drop-shadow-2xl">
        <p>sign in</p>
      </div>
      <div className="mb-5 flex h-72 w-[93%] justify-center rounded-xl border-2 border-white bg-black bg-black pb-5 pl-5 pr-5 pt-2 font-Koho font-Laqucer text-white drop-shadow-2xl">
        <form className="flex flex-col items-center justify-around">
          <div>
            <label className="ml-7 pr-5 font-Koho">email</label>
            <input className="rounded-lg text-black" />
          </div>
          <div>
            <label className="pr-5 font-Koho">password</label>
            <input className="rounded-lg text-black" />
          </div>
          <button className="ml-5 h-7 w-1/3 rounded-lg border border-white bg-[#D9D9D9] font-Koho text-black">
            sign in
          </button>
          <button className="ml-5 h-7 w-1/3 rounded-lg border border-white bg-[#D9D9D9] font-Koho text-black">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}
