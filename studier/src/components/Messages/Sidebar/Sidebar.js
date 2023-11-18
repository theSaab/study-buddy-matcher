// Sidebar.js
import React, { useState, useEffect } from "react";
import { getChats, getChatUsers } from "../../../services/messages";

const Sidebar = ({ currentUserUid, onChatSelect }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const userChats = await getChats(currentUserUid);

        // Iterate over each chat object and find the other user's UID
        const filteredChats = userChats.map((chat) => {
          const otherUserUid = chat.users.find((uid) => uid !== currentUserUid);
          return { id: chat.id, otherUserUid };
        });
        setChats(filteredChats);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, [currentUserUid]);

  return (
    <div style={{ border: "3px solid black" }}>
      <h2>Your Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onChatSelect(chat.otherUserUid)}>
            {chat.otherUserUid}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
