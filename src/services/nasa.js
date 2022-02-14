import axios from "axios";
const baseUrl = "/api/apod";

// Vaatii Node projektin vielä
//Get astronomy picture of the day
const getAPOD = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default getAPOD;