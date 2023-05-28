import React from "react";
import Chat from "../components/chat/Chat";
import { logout } from "../services/api";
import { Button } from "@mui/material";

const ChatPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex justify-between">
      <p className="text-center bold text-4xl mb-10">Welcome to Wysa Chat</p>
      <div className="flex flex-col px-4">
        <div className="flex items-center">
        <span className="text-center bold text-2xl ">Hii {localStorage.getItem('username')}!</span>
        {localStorage.getItem('photoUrl')&&<img src={localStorage.getItem('photoUrl')} className="h-14 w-14 rounded-md"></img>}
        </div>
        <Button variant="contained" className="text-center bold text-5 mb-10" onClick={logout}>Logout</Button>
      </div>
      </div>
      <Chat />
    </div>
  );
};

export default ChatPage;
