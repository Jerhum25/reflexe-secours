"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Liste des projets pour simplifier le code et éviter la répétition
const actions = [
  {
    src: "/images/action1.jpg",
    alt: "Dans les écoles",
    title: "Dans les écoles",
    subtitle: "Apprendre les gestes qui sauvent dès le plus jeune âge.",
  },
  {
    src: "/images/action2.jpg",
    alt: "En entreprise",
    title: "En entreprise",
    subtitle: "Prévenir les risques et renforcer la sécurité au travail.",
  },
  {
    src: "/images/action3.jpg",
    alt: "Lors d'événements",
    title: "Lors d'événements",
    subtitle: "Sensibiliser le grand publique à la prévention.",
  },
];

export default function Actions() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full h-auto flex justify-center bg-white" id="actions">
      <div className="xl:w-[90%] w-full flex lg:flex-row flex-col  text-black py-5">
        <div className="lg:w-[30%] w-full h-fit p-5 flex flex-col gap-3">
          <h2 className="uppercase flex gap-2 items-center text-[#e53e3e]">
            nos actions
          </h2>
          <h3 className="text-3xl font-bold">Prévention & sensibilisation</h3>
          <p>
            Parce que les bons réflexes s'apprennent aussi au quotidien, nous
            intervenons dans de nombreux lieux pour sensibiliser aux risques et
            aux gestes qui sauvent.
          </p>
          <div className="w-full text-center lg:text-left">
            <Link href="/ActusPage">
              <button className="cursor-pointer bg-[#e53e3e] text-white rounded-md px-3 py-2 text-lg">
                Voir nos actualités
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 w-full flex-1 gap-8 pt-8 lg:w-[70%] p-5 2xl:pr-0">
          {actions.map((action, index) => (
            <div key={index} className="flex flex-col gap-3 w-full sm:w-full">
              <div
                className="w-auto h-60 relative cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => setSelectedImage(action)}
              >
                <Image
                  fill
                  unoptimized
                  alt={action.alt}
                  src={action.src}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 text-white w-full h-[35%] sm:h-[45%] p-2">
                  <div className="bg-black left-0 bottom-0 opacity-60 absolute h-full w-full"></div>
                  <p className=" relative">{action.title}</p>
                  <p className="relative flex gap-1 text-gray-300">
                    {action.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale Plein Écran */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:opacity-75 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Évite la fermeture si on clique sur le texte sous l'image
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                unoptimized
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.title} - {selectedImage.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
