import { getAQIData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

async function AQIComponent({ lat, lon }) {
  const { main, components } = await getAQIData(lat, lon);
  const getAQIRating = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };
  return (
    <Card>
      <h6 class="feature-name">Air Pollution & Quality</h6>
      {/* info items  */}
      <div class="mt-3 space-y-2 lg:space-y-3">
        {/* item  */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Air Quality Index
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {getAQIRating(main?.aqi)}
          </span>
        </div>
        {/* item ends  */}
        {/* item  */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Carbon Monoxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.co} µg/m³
          </span>
        </div>
        {/* item ends  */}
        {/* item  */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Nitric Oxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.no} ppm
          </span>
        </div>
        {/* item ends  */}
        {/* item  */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Nitrogen Dioxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.no2} ppm
          </span>
        </div>
        {/* item ends  */}
        {/* item  */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Ozone
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.o3} µg/m³
          </span>
        </div>
        {/* item ends  */}
        {/* item  */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Sulfur Dioxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.so2} ppm
          </span>
        </div>
        {/* item ends  */}
        {/* item  */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            PM2.5
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.pm2_5} µg/m³
          </span>
        </div>
        {/* item ends  */}
      </div>
    </Card>
  );
}

export default AQIComponent;
