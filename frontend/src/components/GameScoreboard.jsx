"use client";
import useSWR from "swr";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchGames } from "@/api/service";
import useGameStore from "@/store/gameStore";
import moment from "moment";

const GameScoreboard = () => {
  const { data, error } = useSWR("games", fetchGames);
  const { selectedGame, setSelectedGame } = useGameStore();

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };
  if (error) return <div>Error loading games.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-8">
        <Swiper
          spaceBetween={25}
          slidesPerView="auto"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-[100vw]"
        >
          {data?.map((game, index) => (
            <SwiperSlide
              key={index}
              className={`bg-${
                game?.game_id === selectedGame?.game_id ? "white" : "[#B4995D]"
              } p-4 rounded-[10px] text-center max-w-[160px] text-black`}
              onClick={() => handleGameSelect(game)}
            >
              <p className="text-sm mb-2">
                {moment(game?.game_date).format("MMMM DD, YYYY") ?? ""}
                <br />
                <span className="font-bold "> {game?.location ?? ""}</span>
              </p>
              <Image
                src={`/assets/${game?.opponent_image}`}
                alt="Team Logo"
                width={30}
                height={30}
                className="mx-auto mb-2"
              />
              <p className="text-sm mb-2">
                vs
                <br />
                <span className="uppercase">
                  {game?.opponent?.split(" ")?.[0]}
                </span>
                <br />
                <span className="font-bold uppercase">
                  {game?.opponent?.split(" ")?.pop()}
                </span>
              </p>
              <p>
                <span className="font-bold">{game?.result}</span>{" "}
                {game?.team_score}-{game?.opponent_score}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="border-[1px]  flex align-center  h-[4vw] w-[100vw] bg-white items-center">
        <div className=" ml-[.5vw] rounded-[7px] bg-[#AA0001] flex align-center justify-center h-[4vw]  w-[6.5vw]  absolute z-10 mt-[2vw]">
          <button className="bg-white rounded-[5px] text-[#B3995D] h-[2.5vw]  w-[6vw]  pl-[.5vw]  mt-[10px]">
            FILTER
          </button>
        </div>
        <input
          type="text"
          placeholder="SEARCH"
          className="border p-2 rounded ml-[9vw] mr-[2vw] h-[2.5vw]  w-[18vw]"
        />
        <button className="bg-white text-red-900 px-4 py-2 rounded">
          EXPORT DATA
        </button>
      </div>
    </div>
  );
};

export default GameScoreboard;
