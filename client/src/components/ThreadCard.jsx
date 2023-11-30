import React from "react";

function ThreadCard() {
  return (
    <div className=" flex flex-col w-[]80% p-5 m-6 bg-gray-900 rounded-lg text-white ">
      <div className="flex">
        <div className="flex flex-col">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              className="h-14 w-14"
            />
          </div>
          <div className="grid justify-items-center">
            <div className="h-20 w-1 bg-gray-600"></div>
          </div>
        </div>
        <div className="ml-3">
          <div className="text-xl mb-1">abhoygorai</div>
          <div>
            What do you guys think about the drone detecting landmines ?
          </div>
        </div>
        <div className="ml-[27%] mt-[4%]">
          <img
            src="https://i.pinimg.com/originals/dc/12/46/dc124679726a20dc2cad0aaefdfdb312.png"
            className="h-9 w-9"
          />
        </div>
      </div>
      <div className="flex pl-[18px] items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          className="h-5 w-5"
        />
        <div className="ml-3">2 replies</div>
      </div>
    </div>
  );
}

export default ThreadCard;
