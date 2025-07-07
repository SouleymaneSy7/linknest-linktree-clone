"use client";

import React from "react";

// import { Button }  from "@/components/ui/button";
import Container from "@/components/Container";
import VisualyHidden from "@/components/VisualyHidden";
import Link from "next/link"
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
    <Container as={"header"} className="container pt-8">
    <nav
        role="navigation"
        className="flex justify-between items-center w-full"
      >
        <Link href={"/"} className="font-space-grotesk font-fw-bold text-fs-lg">
          Link<span className="text-primary">Nest</span>
        </Link>

        {/* <div className="flex gap-3"> */}
        {/*   <Button */}
        {/*     title="Copier le liens dans le presse-papier" */}
        {/*   //  className="bg-secondary-bg-clr rounded-sm w-10 h-8 flex justify-center items-center" */}
        {/*   > */}
        {/*     <VisualyHidden> */}
        {/*       Copier le liens dans le presse-papier. */}
        {/*     </VisualyHidden> */}
        {/*   </Button> */}
        {/**/}
        {/*   <Button */}
        {/*    // className="flex items-center justify-start bg-secondary-bg-clr rounded-sm w-[68px] h-8 p-1" */}
        {/*   > */}
        {/*     <span className="inline-block w-7 h-full rounded-sm bg-primary-clr transition-transform"></span> */}
        {/*     <VisualyHidden> */}
        {/*       Changer le theme en sombre ou lumineux. */}
        {/*     </VisualyHidden> */}
        {/*   </Button> */}
        {/* </div> */}
      </nav>
    </Container>
  );
};

export default Header;
