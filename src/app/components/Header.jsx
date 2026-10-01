import Link from "next/link";

export default function Header() {
  
  return (
    <div className="w-full flex justify-center text-white relative z-100 ">
      <div className=" w-full h-full flex  justify-between gap-3 bg-transparent px-5 py-2">
        <Link href="/">
          <div className="w-auto h-auto flex flex-col items-start sm:flex-row gap-1 sm:items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              {/* Cœur de fond */}
              <path
                fill="#E53E3E"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              {/* Ligne électrocardiogramme (fond blanc transparent) */}
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h4l1.5-3 2 6 2-8 1.5 5h4"
              />
              {/* Petite croix médicale en bas à droite */}
              <g transform="translate(14, 14)">
                <circle cx="4" cy="4" r="5" fill="#FFFFFF" />
                <path
                  d="M4 1.5v5M1.5 4h5"
                  stroke="#E53E3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <h1 className=" flex flex-col font-bold text-xl">
              Réflexe Secours{" "}
              <span className="font-normal text-sm">
                Prévenir - Former - Secourir
              </span>
            </h1>
          </div>
        </Link>
        <div className="  lg:flex items-center hidden absolute top-[50%] left-[50%] translate-[-50%]">
          <nav>
            <ul className="flex gap-3 capitalize text-md 2xl:text-lg font-semibold">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <a href="#apropos">l'association</a>
              </li>
              <li>
                <a href="#formations">formations</a>
              </li>
              <li>
                <a href="#actions">prévention</a>
              </li>
              <li>
                <a href="#avis">actualité</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-start mt-2 sm:items-center sm:mt-0">
          <button
            className="bg-[#E53E3E] rounded-full md:px-5 md:py-3 px-2 py-1 flex items-center gap-2 text-white text-sm sm:text-md
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
              />
            </svg>
            <a href="tel:0622334455" className="text-nowrap">
              Contactez-nous
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
