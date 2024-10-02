import React from "react";
import Image from "next/image";
import useGameStore from "@/store/gameStore";

const Modal = ({ onClose }) => {
  const { playerInfo } = useGameStore();

  // Hardcoded bio and additional info if not available
  const bio =
    playerInfo?.bio ||
    'Honored in his hometown of Longview, Texas, with "Trent Williams Day" on May 12, 2010 to celebrate his selection in the NFL Draft.';
  const additionalInfo =
    playerInfo?.additionalInfo ||
    "In 2016, Williams partnered with Nike in order donate over 1,000 shoes to give to each elementary school campus in his hometown of Longview, Texas, for kids who are in need.";

  // Mock data for the chart
  const chartData = [
    10, 8, 12, 9, 11, 13, 10, 14, 11, 15, 12, 9, 13, 11, 14, 10, 12, 15, 13, 11,
  ];

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center p-4 z-50 top-[40%] left-[70%]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-red-800 rounded-t-lg p-4">
          <div className="flex justify-between items-center">
            <div className="text-white text-sm mb-1">
              2023-2024 <br />
              SEASON
            </div>
            <div className="flex justify-between items-center">
              <div className="text-white text-xl ">
                RANKING:{" "}
                <span className="font-bold">{playerInfo?.game_rank || 3}</span>
              </div>
            </div>
          </div>
          <div className="h-32 flex items-end space-x-1 mt-4">
            {chartData.map((value, index) => (
              <div
                key={index}
                className="bg-yellow-600 w-3"
                style={{ height: `${value * 6}px` }}
              ></div>
            ))}
          </div>
          <div className="text-white text-xs text-right mt-1">WK 16</div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Image
              src={
                `/assets/${playerInfo?.image}` ||
                "https://via.assets.so/img.jpg?w=80&h=80&tc=#710000&bg=#cecece"
              }
              alt={playerInfo?.first_name + " " + playerInfo?.last_name}
              width={80}
              height={80}
              className="rounded-lg mr-4"
            />
            <div>
              <h2 className="text-base">
                {playerInfo?.first_name}
                <br />
                {playerInfo?.last_name}
              </h2>
              <p className=" font-bold">
                #{playerInfo?.player_id || "71"} |{" "}
                {playerInfo?.position || "OFFENSIVE TACKLE"}
              </p>
            </div>
          </div>
          <p className="text-sm mb-4">{bio}</p>
          <p className="text-sm">{additionalInfo}</p>
        </div>
        <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-800 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
