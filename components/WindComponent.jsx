import { getWindData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

async function WindComponent({ lat, lon }) {
  const { speed, deg } = await getWindData(lat, lon);
  return (
    <Card>
      <h6 class="feature-name">Wind</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/assets/icons/icon_wind.png"
          alt="rain icon"
          width={20}
          height={20}
        />
        <h3 class="feature-title">{speed} meter/sec</h3>
        <span class="feature-name">{deg} degrees</span>
      </div>
    </Card>
  );
}

export default WindComponent;
