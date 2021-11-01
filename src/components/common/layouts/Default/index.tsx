import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-4">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
