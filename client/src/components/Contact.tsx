export function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start pb-5 pt-5">
      <div className="font-Aleg-300 mb-5 flex w-[93%] justify-center rounded-xl border-2 border-white bg-black pb-5 pl-5 pr-5 pt-5 text-white drop-shadow-2xl">
        <p>contact me</p>
      </div>
      <div className="mb-5 flex h-80 w-[93%] justify-center rounded-xl border-2 border-white bg-black bg-black pb-5 pl-5 pr-5 pt-2 font-Koho text-white drop-shadow-2xl">
        <form
          className="mr-11 flex flex-col items-center justify-around"
          action="mailto:salttyyy@gmail.com"
        >
          <div>
            <label className="ml-7 pr-5">name</label>
            <input className="rounded-lg text-black" />
          </div>
          <div>
            <label className="ml-6 pr-6">email</label>
            <input className="rounded-lg text-black" />
          </div>
          <div className="flex">
            <label className="pr-5">message</label>
            <textarea
              className="mt-2 rounded-lg pr-10 text-black"
              rows={6}
              cols={15}
            ></textarea>
          </div>
          <button
            className="ml-20 h-7 w-1/3 rounded-lg border border-white bg-[#D9D9D9] font-Koho text-black"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
