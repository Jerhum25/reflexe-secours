export default function Coordonnees() {
  return (
    <div
      id="contact"
      className="w-full flex justify-center px-5 py-10 bg-white text-black"
    >
      <div className="xl:w-[70%] w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          <h2 className="font-bold text-lg">Nos coordonnées</h2>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e53e3e"
                  d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"
                />
              </svg>
              <a href="tel:0622334455">06 22 33 44 55</a>
            </li>
            <li className="flex gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e53e3e"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                />
              </svg>
              <a href="mailto:contact@reflexe-secours.fr">
                contact@reflexe-secours.fr
              </a>
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#e53e3e"
                  fillRule="evenodd"
                  d="M11.617 8.677a4.5 4.5 0 1 0-7.235 0L8 13.5zm1.203.897a6 6 0 1 0-9.64 0L6.875 14.5H4.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5H9.125zM8 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                  clipRule="evenodd"
                />
              </svg>
              32 rue de l'Oratoire
              <br />
              25000 BESANCON
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e53e3e"
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                />
              </svg>
              Du lundi au vendredi
              <br />
              9h-12h / 14h-18h
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[50%] rounded-2xl flex flex-col gap-4">
          <h2 className="font-bold text-lg">Envoyez-nous un message</h2>
          <form
            action=""
            className=" w-full h-full flex flex-col shadow-2xl p-5 gap-3"
          >
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Sujet"
                className="border border-gray-400 rounded-md p-2 sm:w-[50%]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-400 rounded-md p-2 sm:w-[50%]"
              />
            </div>
            <textarea
              placeholder="Votre message" rows={5}
              className="border border-gray-400 rounded-md p-2 resize-none"
            ></textarea>{" "}
            <div className="w-full text-center lg:text-left">
              <button className="cursor-pointer bg-[#e53e3e] text-white rounded-md px-3 py-2 text-lg">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
