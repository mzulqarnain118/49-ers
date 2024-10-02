import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Base URL for your API
});

// Function to generate the token
const generateToken = async () => {
  const response = await apiClient.post("?endpoint=token");
  return response.data.token; // Adjust according to your API response
};

// Function to set the Authorization header
const setAuthorizationHeader = async () => {
  const token = await generateToken();
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Function to fetch games data
export const fetchGames = async () => {
  await setAuthorizationHeader(); // Ensure the token is set
  const response = await apiClient.get("?endpoint=games");
  return response.data; // Adjust according to your API response
};

// Function to fetch players based on game ID
export const fetchPlayers = async (gameId) => {
  await setAuthorizationHeader(); // Ensure the token is set
  const response = await apiClient.get(`?endpoint=players&game_id=${gameId}`);
  return response.data; // Adjust according to your API response
};

// Function to fetch a specific player based on game ID and player ID
export const fetchPlayerDetails = async (gameId, playerId) => {
  await setAuthorizationHeader(); // Ensure the token is set
  const response = await apiClient.get(
    `?endpoint=players&game_id=${gameId}&player_id=${playerId}`
  );
  return response.data; // Adjust according to your API response
};
