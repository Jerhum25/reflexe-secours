"use client";
import Link from 'next/link';
/* eslint-disable react/no-unescaped-entities */
export default function Formations() {
  const formations = [
    {
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#e53e3e"
            d="M12 21q-.45 0-.862-.162t-.738-.488l-6.7-6.725q-.875-.875-1.287-2T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3q2.5 0 4.188 1.85T22 9.25q0 1.225-.425 2.35t-1.275 2l-6.725 6.75q-.325.325-.725.488T12 21m1-13q.25 0 .475.125t.35.325l1.7 2.55h4.15q.175-.425.263-.862t.087-.888q-.05-1.725-1.15-2.963t-2.75-1.237q-.775 0-1.487.3t-1.238.875l-.675.725q-.125.15-.325.238t-.4.087t-.4-.087t-.35-.238l-.675-.725q-.525-.575-1.225-.9T7.85 5Q6.2 5 5.1 6.263T4 9.25q0 .45.075.888t.25.862H9q.25 0 .475.125t.35.325l.875 1.3l1.35-4.05q.1-.3.362-.5T13 8m.3 3.25l-1.35 4.05q-.1.3-.375.5t-.6.2q-.25 0-.475-.125t-.35-.325L8.45 13H5.9l5.925 5.925q.05.05.088.063T12 19t.088-.012t.087-.063l5.9-5.925H15q-.25 0-.475-.125t-.375-.325z"
          />
        </svg>
      ),
      alt: "PSC1",
      title: "PSC1",
      subtitle: "Prévention et Secours Citoyen de niveau 1",
      time: "1 jour (7h)",
    },
    {
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 25 24"
        >
          <path
            fill="#e53e3e"
            d="M13 2.5c1.2 0 2.18.939 2.246 2.122a9 9 0 0 1 6.254 8.574v1.413h.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h.25v-1.414a9 9 0 0 1 6.254-8.573A2.25 2.25 0 0 1 12 2.5zM13 4h-1a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-1.5 0V6.216A7.5 7.5 0 0 0 5 13.196v1.413h3.75v-1.75a.75.75 0 0 1 1.5 0v1.75h1.5v-1.75a.75.75 0 0 1 1.5 0v1.75h1.5v-1.75a.75.75 0 0 1 1.5 0v1.75H20v-1.414a7.5 7.5 0 0 0-4.75-6.98V7.25a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 0 13 4"
          />
        </svg>
      ),
      alt: "SST",
      title: "SST",
      subtitle: "Sauveteur Secouriste du Travail",
      time: "2 jours (14h)",
    },
    {
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#e53e3e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 3.723A9.003 9.003 0 0 0 2.124 14M9 3.723L6 2.5m3 1.223L8 6.5m11.064 10a8.96 8.96 0 0 0 .936-4c0-4.46-3.243-8.161-7.5-8.876M19.064 16.5l2.936-2m-2.936 2l-1.564-3m-13.984 4a8.99 8.99 0 0 0 7.484 4a8.97 8.97 0 0 0 6-2.292M3.516 17.5H7m-3.484 0V21"
          />
        </svg>
      ),
      alt: "Recyclage",
      title: "Recyclage",
      subtitle: "Maintenir ses compétences",
      time: "1 jour (7h)",
    },
    {
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 256 256"
        >
          <path
            fill="#e53e3e"
            d="M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"
          />
        </svg>
      ),
      alt: "Formations sur mesure",
      title: "Formations sur mesure",
      subtitle: "Entreprises, collectivités, établissements scolaires",
      time: "",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-gray-200" id="formations">
      <div className="xl:w-[90%] w-full flex lg:flex-row flex-col  text-black py-5">
        <div className="lg:w-[30%] w-full h-fit p-5 flex flex-col gap-3">
          <h2 className="uppercase flex gap-2 items-center text-[#e53e3e]">
            nos formations
          </h2>
          <h3 className="text-3xl font-bold">Des formations pour tous</h3>
          <p>
            Que vous soyez particulier, salarié, étudiant ou professionnel, nous
            proposons des formations adaptées à vos besoins.
          </p>
          <div className="w-full text-center lg:text-left">
            <Link href="/FormationsPage">
              <button className="cursor-pointer bg-[#e53e3e] text-white rounded-md px-3 py-2 text-lg">
                Voir toutes nos formations
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 flex-1 gap-5  lg:w-[70%] w-full  p-5 2xl:pr-0">
          {formations.map((formation, index) => (
            <div key={index} className="">
              <div className="w-auto h-full relative overflow-hidden rounded-lg group flex gap-2 justify-around items-center flex-col bg-white p-3">
                {formation.src}
                <div className="flex flex-col flex-1 justify-around w-full ">
                  <h3 className="font-bold">{formation.title}</h3>
                  <p className="text-gray-400 text-sm">{formation.subtitle}</p>
                  <p className="text-gray-400 text-sm">{formation.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
