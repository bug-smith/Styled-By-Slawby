import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  function handleArrowClick() {
    navigate("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pb-5 pt-5">
      <div className="font-Aleg-300 mb-5 flex w-[93%] items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 text-lg text-white drop-shadow-2xl">
        <div className="mr-auto">
          <FaArrowLeft
            onClick={handleArrowClick}
            className="hover:cursor-pointer"
          />
        </div>
        <p className="flex-grow text-center">about me</p>
      </div>
      <div className="flex flex w-[93%] flex-col items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-2 font-Koho text-xl text-white drop-shadow-2xl">
        <p className="pb-3">Lauren "Slawby" Zaslav</p>
        <img src="/images/about.png" />
      </div>
      <div className="font-Koho-300 mt-5 flex flex w-[93%] flex-col items-center justify-center rounded-xl border-2 border-white bg-[#8dccdd] pb-5 pl-5 pr-5 pt-5 text-xl uppercase text-white drop-shadow-2xl">
        <p className="rounded-lg border-2 p-3 px-3 text-sm">
          Hi, I'm Lauren! Ever since I can remember, I've been obsessed with
          fashion. My mom was a fashion queen & she instilled in me the
          importance of always looking put together. She taught me fashion is
          about having fun, taking risks, the importance of a sale! We spent
          late nights making Fashion Island and South Coast Plaza runs when I
          should have been doing my homework. For me, when I love what I'm
          wearing, I feel unstoppable. That feeling when you're getting showered
          in compliments, that's the feeling I wanted to encompass with SBS. I'm
          no stranger to weddings (let us forget my stint as a “Bridal
          Stylist!), bachelorette parties, black tie events etc.! I know how
          overwhelming it can be to dial in outfits! I wanted to create specific
          packages, to tailor it down and make the styling process really fun &
          seamless! Nothing makes me happier than pulling together looks and
          watching it all come to life piece by piece! With endless years of
          styling practice, I am so thrilled to watch my passion come to life!
        </p>
      </div>
    </div>
  );
}
