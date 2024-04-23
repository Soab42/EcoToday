import { getLocationData } from "@/lib/location-info";
import Image from "next/image";
import React from "react";
import LocationSwitcher from "./LocationSwitcher";

async function LocationInfo({ lat, lon }) {
  const location = await getLocationData(lat, lon);
  return (
    <div class="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div class="mb-2 flex items-center gap-2">
          <h2 class="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {location?.continent}
          </h2>
          <div class="relative">
            <LocationSwitcher />
          </div>
        </div>
        <p class="text-lg text-[#C4C4C4] lg:text-xl">
          {location?.countryName} | {location?.city}
        </p>
        <div class="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{" "}
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;
