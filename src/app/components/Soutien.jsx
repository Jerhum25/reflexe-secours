import Image from "next/image";

export default function Soutien() {
  return (
    <div className="w-full lg:h-60 bg-black">
      <div className="w-full lg:h-60 flex lg:flex-row flex-col gap-5">
        <div className="lg:w-[30%] h-60 relative">
          <Image
            fill
            unoptimized
            alt="faire un don"
            src="/images/soutien.jpg"
            className="object-cover"
          />
        </div>
        <div className="lg:w-[50%] gap-5 lg:gap-0 h-full flex flex-col justify-around px-3 lg:px-0">
          <h2 className="uppercase text-[#e53e3e]">soutenez notre action</h2>
          <h3 className="text-4xl font-bold">Ensemble, on va plus loin</h3>
          <p>
            Votre soutien nous permet de former d'avantage de personnes, de
            développer nos actions de prévention et d'agir encore plus
            efficacement sur le terrain.
          </p>
          <div className="w-full text-center lg:text-left">
            <button className="cursor-pointer bg-[#e53e3e] text-white rounded-md px-3 py-2 text-lg">
              Faire un don
            </button>
          </div>
        </div>
        <div className="h-full px-3 lg:px-0">
          <ul className="h-full flex flex-col justify-around">
            <li className="flex gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#e53e3e"
                    d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
                  />
                </svg>
              </div>
              <p>Soutien aux formations</p>
            </li>
            <li className="flex gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#e53e3e"
                    d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
                  />
                </svg>
              </div>
              <p>Matériel pédagogique</p>
            </li>
            <li className="flex gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#e53e3e"
                    d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
                  />
                </svg>
              </div>
              <p>Actions de prévention</p>
            </li>
            <li className="flex gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#e53e3e"
                    d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
                  />
                </svg>
              </div>
              <p>Projets futurs</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
