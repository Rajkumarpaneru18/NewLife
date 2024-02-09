import { useState } from "react";

import Messages from "../../components/Messages";
import SendMessage from "../../components/SendMessage";
import Layout from "../../layout/Layout";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const sendMessage = () => {
    const userMessage = {
      username: "User",
      message: message,
    };

    const loadingMessage = {
      username: "NewLife",
      message: "",
      isLoading: true,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      loadingMessage,
    ]);

    // API CALL
    // const aiMessage = await askGrowAI(message);
    const newLifeAIMessage = "Hello Buddy";
    const aiMessage = { username: "NewLife", message: newLifeAIMessage };

    setMessages((currentMessages) => {
      return currentMessages.map((m, index) =>
        index === currentMessages.length - 1 ? aiMessage : m
      );
    });
    setMessage("");

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
        <div className="w-[60vw] max-w-[80vw] ">
          <Messages messages={messages} />
          <SendMessage
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </Layout>
    </>
  );
};

export default Chat;
