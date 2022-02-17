import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 flex flex-col justify-center rounded-t-xl bg-gray-50 px-8 pb-32 pt-10">
      <div className="mb-6 text-center font-semibold">
        Copyright &copy; franekostrowski
      </div>
      <div className="mx-auto w-3/5">
        <Image
          src="/wikidata.png"
          alt="Wikidata"
          layout="responsive"
          height={60}
          width={180}
        />
      </div>
    </footer>
  );
};

export default Footer;
