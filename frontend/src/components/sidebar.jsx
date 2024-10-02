import React from "react";
import { Folder, HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-red-900 text-white  w-64 rounded-lg">
      <hr className="border-t-1 border-[#B3995D] my-8"></hr>
      <div className="p-4">
        <section className="mb-4">
          <h2 className="text-xs font-extrabold mb-2">USER SEGMENTS</h2>
          <ul>
            {["Lorem Ipsum Dolor", "Sit Amet", "Vivamus Interdum"].map(
              (item, index) => (
                <li key={index} className="flex items-center mb-2 text-[12px]">
                  <Folder className="mr-2 text-blue-300" size={20} />
                  <span>{item}</span>
                  <HelpCircle className="ml-auto text-gray-300" size={16} />
                </li>
              )
            )}
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xs font-bold mb-2">ALIQUAM ORNARE</h2>
          <div className="flex mb-2">
            <input
              type="text"
              placeholder="From"
              className="w-1/2 mr-2 p-1 rounded text-red-900 placeholder-red-300"
            />
            <input
              type="text"
              placeholder="To"
              className="w-1/2 p-1 rounded text-red-900 placeholder-red-300"
            />
          </div>
          <div className="flex">
            <button className="bg-[#B4995D] text-white px-4 py-2 rounded-[20px] mr-2 text-xs ">
              APPLY
            </button>
            <button className="bg-[#3E0000] text-white px-4 py-2 rounded-[20px] text-xs">
              CLEAR
            </button>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-xs font-bold mb-2">NAM GRAVIDA DOLOR</h2>
          <input
            type="text"
            placeholder="Type Here"
            className="w-full p-2 rounded text-red-900 placeholder-red-300"
          />
        </section>

        <section>
          <h2 className="text-xs font-bold mb-2">QUISQUE VITAE VIVERRA</h2>
          <input
            type="text"
            placeholder="Type Here"
            className="w-full p-2 rounded text-red-900 placeholder-red-300"
          />
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
