// ChatPage.js
import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import Sidebar from "./Sidebar/Sidebar";
import ProfileCardMessaging from "./ProfileCardMessaging";
import "./ChatPage.css"; // Import a new CSS file for styling

const ChatPage = ({ currentUserUid }) => {
  const [selectedChatUid, setSelectedChatUid] = useState(null);

  const handleChatSelect = (chatId, otherUserUid) => {
    setSelectedChatUid(chatId);
  };

  return (
    <div className="chat-page-container">
      <Sidebar
        currentUserUid={currentUserUid}
        onChatSelect={handleChatSelect}
      />
      {selectedChatUid && (
        <>
          <Messages
            currentUserUid={currentUserUid}
            matchUid={selectedChatUid}
          />
          <ProfileCardMessaging selectedChatUid={selectedChatUid} />
        </>
      )}
    </div>
  );
};

export default ChatPage;
