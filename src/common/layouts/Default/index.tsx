import Container from "common/components/Container";
import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Container>
        <main className="min-h-screen">{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
