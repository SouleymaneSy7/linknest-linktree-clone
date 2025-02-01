import React from "react";
import Map from "./Map";
import { LocationIcon } from "./Icons/Icons.component";

const ProfileMap: React.FC = () => {
  return (
    <section className="rounded-md bg-secondary-bg-clr py-5 px-4 mb-4 lg:py-5 lg:px-6">
      <h2 className="font-space-grotesk text-fs-lg text-text-clr flex gap-3">
        <LocationIcon />
        Addresse
      </h2>

      <div className="w-full h-[213px] rounded-md my-3 overflow-hidden lg:h-60">
        <Map />
      </div>

      <div>
        <h3 className="text-fs-lg font-space-grotesk font-fw-bold">
          Friguiady
        </h3>
        <p>Maneah, Coyah</p>
        <p className="text-paragraph-text-clr">Guinée - Conakry</p>
      </div>
    </section>
  );
};

export default ProfileMap;
