import { getLocations } from "./location-utils";

export const GET = async () => {
  // Get location data
  const locationData = getLocations();

  // Set headers
  const headers = {
    "Access-Control-Allow-Origin": "https://eco-today-nojn.vercel.app",
    "Access-Control-Allow-Methods": "GET, OPTIONS", // Add any other methods you need
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Type": "application/json", // Set content type
  };

  // Create and return response
  return new Response(JSON.stringify(locationData), {
    status: 200,
    headers,
  });
};
