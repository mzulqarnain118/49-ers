"use client";
import React, { useState } from "react";
import Modal from "./modal";
import useGameStore from "@/store/gameStore";
import { fetchPlayers } from "@/api/service";
import useSWR from "swr";
import MUITable from "./Table";

const PlayersTable = () => {
  const { selectedGame, fetchPlayerInfo } = useGameStore();

  const { data: players, error } = useSWR(
    selectedGame?.game_id ? ["players", selectedGame?.game_id] : null,
    () => fetchPlayers(selectedGame?.game_id)
  );
  
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handlePlayerClick = (playerId) => {
    fetchPlayerInfo(selectedGame?.game_id, playerId);
    setSelectedPlayer(playerId);
    setSelectedRowId(playerId); // Mark the selected row
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
  };

  if (error) return <div>Error loading players.</div>;
  if (!players) return <div>Loading...</div>;

  // Prepare the rows and columns for the DataGrid
  const rows = players?.map((player) => ({
    id: player?.player_id,
    firstName: player?.first_name,
    lastName: player?.last_name,
    age: player?.age,
    fullName: `${player?.first_name || ""} ${player?.last_name || ""}`,
    seasonRank: player?.season_rank,
    gameRank: player?.game_rank,
    position: player?.position,
    height: player?.height,
    weight: player?.weight,
    experience: player?.experience,
    college: player?.college,
  }));

  // Define custom columns with conditional rendering for specific styles
  const columns = [
    {
      field: 'seasonRank',
      headerName: 'Season Rank',
      width: 100,
      cellClassName: "bg-[#333333] text-[#B3995D] font-bold p-2",
      editable:false,
    },
    {
      field: 'gameRank',
      headerName: 'Game Rank',
      width: 100,
      cellClassName: "bg-[#F5F5F5] font-bold p-2",
      editable:false,
    },
    { field: 'id', headerName: 'ID', width: 90,editable:false },
    { field: 'firstName', headerName: 'First Name', width: 150, editable: false },
    { field: 'lastName', headerName: 'Last Name', width: 150, editable: false },
    { field: 'position', headerName: 'Position', width: 100 },
    { field: 'height', headerName: 'Height', width: 100 },
    { field: 'weight', headerName: 'Weight', width: 100 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number', editable: false },
    { field: 'experience', headerName: 'Experience', width: 100,editable:false },
    { field: 'college', headerName: 'College', width: 150,editable:false },
  ];

  return (
    <div className="bg-white text-black  w-[100vw]">
      {/* Use the MUI Table instead of the HTML table */}
      <MUITable
        rows={rows}
        columns={columns}
        onRowClick={(params) => handlePlayerClick(params.id)} // Click handler to open modal
      />
      
      {/* Modal to show player info */}
      {isModalOpen && (
        <Modal player={selectedPlayer} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PlayersTable;
