import { useState } from "react";

import Messages from "../../components/Messages";
import SendMessage from "../../components/SendMessage";
import Layout from "../../layout/Layout";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const sendMessage = (text) => {
    console.log(text);
    addMessage(text, "user");

    try {
      // API Call
      console.log("Data added");
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage("Error occurred", "ai");
    }
  };
  return (
    <>
      <Layout>
        <div className="w-[80vw] max-w-[80vw] text-white">
          <SendMessage sendMessage={sendMessage} />
        </div>
      </Layout>
    </>
  );
};

export default Chat;
