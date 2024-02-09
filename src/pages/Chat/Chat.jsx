import Messages from "../../components/Messages";
import SendMessage from "../../components/SendMessage";
import Layout from "../../layout/Layout";

const Chat = () => {
  return (
    <>
      <Layout>
        <div className="w-screen h-screen text-white">
          <Messages />
          <SendMessage />
        </div>
      </Layout>
    </>
  );
};

export default Chat;
