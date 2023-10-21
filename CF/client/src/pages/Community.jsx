import React, { useState, useEffect } from "react";
import pointer from "../assets/pointer.png";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import ThreadCard from "../components/ThreadCard";

const socket = io.connect("http://localhost:3001/");

const Community = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userName, setUserName] = useState("demo");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: "1",
        author: "demo2",
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.emit("join_room", "1");
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, []);

  return (
    <>
      <div className="bg-[#1c1c24] flex relative  items-center flex-col rounded-[10px] sm:py-10  h-[90%]">
        <div className="w-full h-full mb-16">
          <ScrollToBottom className="bg-[#24242e] flex h-[700px] overflow-y-auto border-t-1 border-b-1 border-gray-600">
            {/* {messageList.map((messageContent) => {
              return (
                <div
                  className={userName === messageContent.author ? "flex justify-end text-right my-3" : "flex justify-start text-left m-3"}
                >
                  <div className={userName === messageContent.author ? "w-fit justify-end text-right" : "w-fit justify-start text-left"}>
                    <div className="rounded-md bg-[#5d5d70] p-3 text-2xl text-white">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className={userName === messageContent.author ? "flex justify-end text-gray-400" : "flex justify-start text-gray-400"}>
                      <p id="time" className="mr-3">{messageContent.time}</p>
                      <p id="author" className="mr-3">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })} */}

            <ThreadCard />


          </ScrollToBottom>
        </div>
        <div className="absolute flex items-center inset-x-0 bottom-0 h-16 m-5 bg-[#32323e] rounded-md">
          <input
            type="text"
            className=" grow text-white mr-3 bg-[#32323e] p-4"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <button className="">
            <img
              src={pointer}
              className="h-7 w-7 m-5 rounded-md"
              onClick={sendMessage}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Community;
