/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="w-full h-fit  sm:h-fit flex flex-col justify-between relative">
      <div className=" w-screen flex h-full z-0 absolute top-0 left-0">
        <Image
          fill
          unoptimized
          alt="fond hero"
          src="/images/hero.png"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full h-full bg-linear-to-r from-black to-transparent  absolute top-0 left-0"></div>
      <div className="xl:w-[70%] w-full h-auto relative z-100 flex flex-col mx-auto ">
        {/* <Header /> */}
        <div className="lg:w-1/2 w-full h-full flex flex-1 flex-col justify-center gap-20 px-5 my-auto ">
          <h2 className="uppercase -mb-8 mt-5 text-[#e53e3e]">
            association de secourisme
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Apprendre aujourd'hui pour sauver des vies demain
          </h3>
          <p>
            Notre association a pour mission de former, sensibiliser et accompagner le plus grand nombre aux gestes qui sauvent.
          </p>


          <div className="flex gap-5 sm:gap-5 items-center mx-auto sm:justify-start justify-center flex-col sm:flex-row mb-10 sm:w-full w-fit">
            <button className="bg-[#e53e3e] border border-[#e53e3e] rounded-lg px-3 py-2 flex items-center gap-2 text-white w-full">
              <a href="" className="font-semibold w-full text-nowrap">
                Découvrir nos formations
              </a>
            </button>
            <button className="bg-transparent border rounded-lg px-3 py-2 flex items-center gap-2 text-white w-full ">
              <a href="tel:0622334455" className="font-semibold w-full">
                Nous contacter
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
