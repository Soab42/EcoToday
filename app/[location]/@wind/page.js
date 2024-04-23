import WindComponent from "@/components/WindComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import React from "react";

async function WindPage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return null;
  }
}

export default WindPage;
