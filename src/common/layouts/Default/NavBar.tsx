import Container from "common/components/Container";
import React from "react";

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
