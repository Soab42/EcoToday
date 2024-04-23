import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import React from "react";

async function TemperaturePage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return null;
  }
}

export default TemperaturePage;
