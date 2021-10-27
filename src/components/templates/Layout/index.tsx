import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="px-4 mt-2">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
