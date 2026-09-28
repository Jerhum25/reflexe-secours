import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function APropos() {
  return (
    <div className="w-full h-full  flex justify-center p-5   bg-white"  id="apropos">
      <div className="w-full xl:w-[90%] h-full gap-5 bg-white flex md:flex-row flex-col  text-black ">
        <div className="md:w-[50%]  w-full  flex flex-col gap-3 relative">
          <h2 className="uppercase flex gap-2 items-center text-[#e53e3e]">
            qui sommes nous ?
          </h2>
          <h3 className="text-3xl font-bold">Notre association</h3>
          <h4 className="font-bold">Engagés pour une société plus solidaire</h4>
          <p>
            Réflexe Secours est une association loi 1901, composée de bénévoles
            et de formateurs diplômés, tous passionnés par la prévention et le
            secourisme.
            <br /> Nous intervenons auprès du grand public, des entreprises, des
            établissements scolaires et des collectivités pour transmettre les
            bons gestes et les bons réflexes .
          </p>
        </div>
        <div className="md:w-[50%] w-full h-60 md:h-auto relative ">
          <div className="p-5">
            <Image
              fill
              unoptimized
              alt="cuisine éclairée"
              src="/images/apropos.png
              "
              style={{ objectFit: "cover",}}
              className="rounded-3xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
