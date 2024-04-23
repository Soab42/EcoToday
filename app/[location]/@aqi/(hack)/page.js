import AQIComponent from "@/components/AQIComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import React from "react";

async function Aqi({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return null;
  }
}

export default Aqi;
