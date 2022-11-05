import Container from "common/components/Container";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="mb-2">
      <Container customClasses="py-6 text-center flex gap-2 sm:gap-0 items-baseline">
        <Link href="/">
          <a className="flex-1 text-4xl font-bold">
            Breeda<span className="text-green-700">holic</span> 🐶
          </a>
        </Link>

        <a
          href="https://github.com/franekostrowski/breedaholic"
          target="blank"
          aria-label="Go to Breedaholic's repository on Github"
          className="float-right"
        >
          <NextImage src="/logos/github.svg" width={24} height={24} />
        </a>
      </Container>
    </nav>
  );
};

export default NavBar;
