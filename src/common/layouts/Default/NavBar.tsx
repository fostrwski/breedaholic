import React from "react";

import Container from "@/common/components/Container";

const NavBar: React.FC = () => {
  return (
    <nav className="mb-2">
      <Container customClasses="py-6">
        <div className="text-4xl font-bold text-center">
          Breeda<span className="text-green-700">holic</span> 🐶
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
