import { getWeather } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

async function WeatherComponent({ lat, lon }) {
  const { main, description } = await getWeather(lat, lon);
  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/assets/icons/icon_rain.png"
          alt="rain icon"
          width={20}
          height={20}
        />
        <h3 class="feature-title">{main}</h3>
        <span class="feature-name">{description}</span>
      </div>
    </Card>
  );
}

export default WeatherComponent;
