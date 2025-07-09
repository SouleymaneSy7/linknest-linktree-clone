"use client";

import * as React from "react";

import SwithCustomization from "@/components/ui/switch";
import Container from "@/components/Container";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Container as={"header"} className="container pt-8">
      <nav
        role="navigation"
        className="flex justify-between items-center w-full"
      >
        <Link
          href={"/"}
          className="font-space-grotesk font-bold text-sub-heading"
        >
          Link<span className="text-primary">Nest</span>
        </Link>

        <SwithCustomization />
      </nav>
    </Container>
  );
};

export default Header;
