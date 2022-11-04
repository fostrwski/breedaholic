import Container from "common/components/Container";
import Link from "next/link";
import React from "react";
import NextImage from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="mb-2">
      <Container customClasses="py-6 text-center flex items-baseline gap-4">
        <Link href="/">
          <a className="flex-1 text-4xl font-bold">
            Breeda<span className="text-green-700">holic</span> 🐶
          </a>
        </Link>

        <a
          href="https://github.com/franekostrowski/breedaholic"
          target="blank"
          aria-label="Go to Breedaholic's repository on Github"
        >
          <NextImage src="/logos/github.svg" width={24} height={24} />
        </a>
      </Container>
    </nav>
  );
};

export default NavBar;
