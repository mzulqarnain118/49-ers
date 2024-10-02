import { fetchPlayerDetails } from "@/api/service";
import { create } from "zustand";

const useGameStore = create((set) => ({
  selectedGame: { game_id: 8 }, // Initial state
  playerInfo: {}, // Store player info for a selected player

  // Action to set the selected game
  setSelectedGame: (game) => set({ selectedGame: game }),

  // Action to fetch player info based on player ID
  fetchPlayerInfo: async (selectedGame, playerId) => {
    const data = await fetchPlayerDetails(selectedGame, playerId);

    set({
      playerInfo: data,
    });
  },
}));

export default useGameStore;
