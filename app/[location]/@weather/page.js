import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import React from "react";

async function WeatherPage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return null;
  }
}

export default WeatherPage;
