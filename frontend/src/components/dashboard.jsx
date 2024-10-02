import React from "react";
import Image from "next/image";
import GameScoreboard from "./GameScoreboard";
import Header from "./header";
import PlayersTable from "./PlayersTable";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div className="bg-red-900 text-white">
      <div className="container py-8  relative">
        <Header />
        <GameScoreboard />
        <div className="flex  w-[100vw]">
          <Sidebar />
          <PlayersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
