"use client";

import React from "react";

import Buttons from "./Buttons";
import Container from "./Container";
import VisualyHidden from "./VisualyHidden";

import { CopyIcon } from "./Icons/Icons.component";
// import useCopyToClipboard from "../hooks/useCopyToClipboard";

const Header: React.FC = () => {
  // const [copiedText, copy] = useCopyToClipboard();
  // const pageURL = window.location.href;
  //
  // const [isDarkMode, setIsDarkMode] = React.useState(false);
  // const root = window.document.documentElement;
  //
  // React.useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") {
  //     root.classList.add("dark");
  //     setIsDarkMode(true);
  //   }
  // }, []);
  //
  // const handleToggle = () => {
  //   if (isDarkMode) {
  //     root.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     localStorage.setItem("theme", "dark");
  //     root.classList.add("dark");
  //   }
  //   setIsDarkMode(!isDarkMode);
  // };
  //
  // const handleCopy = (text: string) => () => {
  //   copy(text)
  //     .then(() => {
  //       console.log("Copied!", { text });
  //     })
  //     .catch((error) => {
  //       console.error("Failed to copy!", error);
  //     });
  // };
  //
  return (
    <Container as={"header"} className="container pt-4 lg:py-8">
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
            title="Copier le liens dans le presse-papier"
            className="bg-secondary-bg-clr rounded-sm w-10 h-8 flex justify-center items-center"
          >
            <CopyIcon className="fill-text-clr" />
            <VisualyHidden>
              Copier le liens dans le presse-papier.
            </VisualyHidden>
          </Buttons>

          <Buttons
            type="button"
            className="flex items-center justify-start bg-secondary-bg-clr rounded-sm w-[68px] h-8 p-1"
          >
            <span className="inline-block w-7 h-full rounded-sm bg-primary-clr transition-transform"></span>
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
