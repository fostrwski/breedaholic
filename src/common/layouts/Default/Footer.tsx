import Container from "common/components/Container";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 rounded-t-xl bg-white shadow-xl shadow-gray-100">
      <Container customClasses="leading-4 pt-12 text-center pb-24 md:pb-12 lg:text-lg font-semibold text-gray-500">
        Designed & Created by{" "}
        <a href="https://github.com/franekostrowski" target="blank">
          Franek Ostrowski
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
