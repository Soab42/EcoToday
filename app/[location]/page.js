import LocationInfo from "@/components/LocationInfo";
import NotFoundLocation from "@/components/NotFoundLocation";
import { getResolvedLatLon } from "@/lib/location-info";
import React from "react";

async function LocationPage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NotFoundLocation location={location} />;
  }
}

export default LocationPage;
