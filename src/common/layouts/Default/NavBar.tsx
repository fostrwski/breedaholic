import Container from "common/components/Container";
import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="mb-2">
      <Container customClasses="py-6 text-center flex gap-2 sm:gap-0 items-center">
        <Link href="/">
          <a className="flex-1 text-4xl font-bold">
            <span className="text-green-700">Breed</span>aholic 🐶
          </a>
        </Link>
      </Container>
    </nav>
  );
};

export default NavBar;
