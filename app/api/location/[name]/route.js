import { getLocationByName } from "../location-utils";

export const GET = async (_request, { params }) => {
  const locationData = await getLocationByName(params?.name);
  const response = new Response(JSON.stringify(locationData), {
    headers: {
      "Access-Control-Allow-Origin": "https://eco-today-nojn.vercel.app", // Replace this with the appropriate origin
      "Access-Control-Allow-Methods": "GET", // Specify the allowed HTTP methods
      "Access-Control-Allow-Headers": "Content-Type", // Specify the allowed headers
      "Content-Type": "application/json", // Set content type of response
    },
  });

  return response;
};
