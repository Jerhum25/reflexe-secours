import Image from "next/image";
import Link from "next/link";
export default function Actus() {
  const actus = [
    {
      src: "/images/actu1.png",
      alt: "Dans les écoles",
      date: "03 octobre 2026",
      title: "Journée de sensibilisation aux gestes qui sauvent",
      subtitle:
        "Retour en image sur notre action de sensibilisation organisée à Besançon.",
    },
    {
      src: "/images/actu2.png",
      alt: "En entreprise",
      date: "22 septembre 2026",
      title: "Formation PSC1 : encore des places disponibles !",
      subtitle:
        "Prochaine session le 16 octobre 2026 à Besançon. Initiation aux gestes qui sauvent.",
    },
    {
      src: "/images/action3.jpg",
      alt: "Lors d'événements",
      date: "12 septembre 2026",
      title: "Partenariat avec la ville de Besançon",
      subtitle:
        "Nous sommes fiers d'accompagner la ville dans ses actions de prévention.",
    },
  ];
  return (
    <div className="w-full h-auto flex justify-center bg-white">
      <div>
        <div className="cards">
          <ul className="grid grid-cols-1 md:grid-cols-3 w-full flex-1 gap-8 pt-8 xl:w-[70%] md:m-auto  p-5 2xl:pr-0">
            {actus.map((actu, index) => (
              <li
                key={index}
                className="flex flex-col gap-3 w-full sm:w-full text-black shadow-2xl rounded-2xl overflow-hidden"
              >
                <div className="w-auto h-60 relative cursor-pointer overflow-hidden ">
                  <Image
                    fill
                    alt={actu.alt}
                    src={actu.src}
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <p className="text-gray-500">{actu.date}</p>
                  <h4 className="font-bold">{actu.title}</h4>
                  <p>{actu.subtitle}</p>
                </div>
                <div className="w-full h-full flex-1 items-end pb-5">
                  <Link
                    href="/ActusPage"
                    as="/actualités"
                    className="h-full w-full flex items-end"
                  >
                    <button className="cursor-pointer w-full h-fit text-[#e53e3e] rounded-md px-3 py-2 text-lg flex gap-2 items-center">
                      Lire la suite
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#e53e3e"
                          d="M18 9.804v1.392l-5.688 5.883l-1.436-1.39L14.93 11.5H1v-2h13.923l-4.047-4.165l1.434-1.394z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
