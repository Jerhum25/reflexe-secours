/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <div id="contact" className="w-full flex justify-center px-5 py-10">
      <div className="xl:w-[70%] w-full">
        <div className=" flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-10">
            <div className=" flex flex-col gap-3 w-full">
              <h2 className="uppercase flex gap-2 items-center text-[#e53e3e]">
                Contactez-nous
              </h2>{" "}
              <div className="flex flex-col gap-5 md:flex-row w-full justify-between">
                <div className="w-auto h-auto flex gap-1  ">
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
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                        />
                      </svg>
                    </div>
                    <a href="tel:0622334455">06 22 33 44 55</a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M2 20V4h20v16zm10-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                        />
                      </svg>
                    </div>
                    <a href="mailto:contact@reflexe-secours.fr">
                      contact@reflexe-secours.fr
                    </a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
                          <circle cx="12" cy="10" r="3" />
                        </g>
                      </svg>
                    </div>
                    <p>32 rue de l'Oratoire, 25000 BESANCON</p>
                  </div>
                </div>
              <div className=" flex flex-col gap-8 md:items-center">
                <hr className="md:hidden" />
                <p className="text-lg font-bold">Suivez-nous sur les réseaux</p>
                <div className="flex gap-5 md:justify-center">
                  <a href="https://www.instagram.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                      />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <g clipPath="url(#SVGXv8lpc2Y)">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067"
                            clipRule="evenodd"
                          />
                        </g>
                        <defs>
                          <clipPath id="SVGXv8lpc2Y">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0" />
                        <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
