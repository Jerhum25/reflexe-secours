import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="w-full md:h-80 flex  bg-white">
      <div className="flex flex-col-reverse md:flex-row w-full gap-5  ">
        <div className="h-80 md:w-[50%] w-full relative">
          <Image
            src="/images/newsletter.webp"
            alt="Besançon"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3  text-black md:pr-5 px-5">
          <h2 className="uppercase mt-5 text-[#e53e3e]">newsletter</h2>
          <h3 className="text-xl md:text-2xl font-bold">
            Ne manquez plus nos actualités
          </h3>
          <p>
            Recevez nos informations, nos prochaines formations et nos actions
            de prévention directement par mail.
          </p>{" "}
          <div className="w-full h-fit flex flex-col sm:flex-row gap-5 flex-1 items-center relative">
            <div className="flex relative w-full items-center">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="border border-gray-400 p-2 pl-10 rounded-xl flex-1 h-fit flex items-center w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="absolute left-2"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                />
              </svg>
            </div>
            <button className="text-white bg-[#e53e3e] rounded-xl h-fit py-2 px-4 cursor-pointer">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
