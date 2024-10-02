import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="w-screen">
      <div className="flex items-center justify-evenly mb-4 ">
        <div className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="49ers Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <h1 className="text-3xl font-bold">San Francisco 49ers</h1>
        </div>
        <span className="text-xl">2023-2024 SEASON</span>
      </div>
      <hr className="border-[0.1px] border-[#B3995D] mb-8"></hr>
    </header>
  );
}

export default Header;
