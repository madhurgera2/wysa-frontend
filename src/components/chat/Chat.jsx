import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { io } from "socket.io-client";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("https://wysabackend.onrender.com?delay=2000") 

    socket.on("message", (message) => {
      console.log("message receieved", message);
      if (message == "true") {
        console.log("disconnecting...");
        socket.disconnect();
      } else {
        if (messages.length < 5) {
          console.log(messages.length);
          setMessages((prevMessages) => [...prevMessages, message]);
        }
      }
    });

    return () => {
      socket.disconnect(); 
    };
  }, []);

  return (
    <Box
      className="px-8"
      style={{
        background:
          "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)",
        width: "100%",
        height: "100%",
      }}
    >
      {messages.map((message, index) =>
        typeof message == "string" ? (
          <Typography
            key={index}
            variant="body1"
            className="flex p-2 justify-center text-justify items-center"
            style={{
              backgroundColor: "#fff",
              minheight: "40px",
              width: "fit-content",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          >
            {message}
          </Typography>
        ) : typeof message == "object" && message.image ? (
          <img
            src={message.image}
            className="flex p-2 justify-center items-center"
            style={{
              backgroundColor: "#fff",
              height: "100px",
              width: "fit-content",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          ></img>
        ) : (
          <></>
        )
      )}
    </Box>
  );
};

export default Chatbot;
