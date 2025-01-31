import React from "react";
import Container from "./Container";
import Buttons from "./Buttons";
import { CopyIcon } from "./Icons/Icons.component";
import VisualyHidden from "./VisualyHidden";

const Header: React.FC = () => {
  return (
    <Container as={"header"} className="container py-4 lg:py-8">
      <nav
        role="navigation"
        className="flex justify-between items-center w-full"
      >
        <a href="#" className="font-space-grotesk font-fw-bold text-fs-lg">
          Link<span className="text-primary-clr">Nest</span>
        </a>

        <div className="flex gap-3">
          <Buttons
            type="button"
            title="Copier le liens dans le clipboard"
            className="bg-secondary-bg-clr rounded-md w-10 h-8 flex justify-center items-center"
          >
            <CopyIcon />
            <VisualyHidden>Copier le liens dans le clipboard</VisualyHidden>
          </Buttons>

          <Buttons
            type="button"
            className="bg-secondary-bg-clr rounded-md w-[68px] h-8"
          >
            <VisualyHidden>
              Changer le theme en sombre ou lumineux.
            </VisualyHidden>
          </Buttons>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
