import Link from "next/link";
import React from "react";

import Container from "@/common/components/Container";

const NavBar: React.FC = () => {
  return (
    <nav className="mb-2">
      <Container customClasses="py-6 text-center">
        <Link href="/">
          <a className="text-4xl font-bold">
            Breeda<span className="text-green-700">holic</span> 🐶
          </a>
        </Link>
      </Container>
    </nav>
  );
};

export default NavBar;
