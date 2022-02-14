import axios from "axios";
const baseUrl = "https://api.nasa.gov";

// Vaatii Node projektin vielä
//Get astronomy picture of the day
const getAPOD = async () => {
  const response = await axios.get(baseUrl + "/planetary/apod");
  return response;
};

export default getAPOD;