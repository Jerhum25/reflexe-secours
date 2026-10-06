/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "./Header";

export default function HeroContact() {

  return (
    <div className="w-full h-100  sm:h-100 flex flex-col justify-between relative">
      <div className=" w-screen flex h-100 z-0 absolute top-0 left-0">
        <Image
          fill
          unoptimized
          alt="fond hero"
          src="/images/hero-contact.webp"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full h-100 bg-linear-to-r from-black to-transparent  absolute top-0 left-0"></div>
      <div className="xl:w-[70%] w-full h-auto relative z-100 flex flex-col mx-auto ">
        {/* <Header /> */}
        <div className="lg:w-1/2 w-full h-full flex flex-1 flex-col justify-center gap-20 px-5 my-auto ">
          <h2 className="uppercase -mb-8 mt-5 text-[#e53e3e]">
            contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Nous contacter
          </h3>
          <p>
            Une question ? Une demande d'information ?<br/>Notre équipe est à votre écoute. 
          </p>


        </div>
      </div>
    </div>
  );
}
