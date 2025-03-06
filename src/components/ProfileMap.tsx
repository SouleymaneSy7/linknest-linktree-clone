import React from "react";
import MapWithNoSSR from "@/components/Map/MapWithNoSSR";
import { LocationIcon } from "./Icons/Icons.component";
import Title from "./Title";
import Container from "./Container";

const ProfileMap: React.FC = () => {
  return (
    <Container
      as={"section"}
      className="rounded-md bg-secondary-bg-clr py-5 px-4 mb-4 lg:py-5 lg:px-6"
    >
      <Title
        level="h2"
        className="font-space-grotesk font-fw-bold text-fs-lg text-text-clr flex gap-3"
      >
        <LocationIcon />
        Addresse
      </Title>

      <div className="w-full h-[213px] rounded-md my-3 overflow-hidden lg:h-60">
        <MapWithNoSSR />
      </div>

      <div>
        <Title
          level="h3"
          className="text-fs-lg font-space-grotesk font-fw-bold"
        >
          Friguiady
        </Title>
        <p>Maneah, Coyah</p>
        <p className="text-paragraph-text-clr">Guinée - Conakry</p>
      </div>
    </Container>
  );
};

export default ProfileMap;
