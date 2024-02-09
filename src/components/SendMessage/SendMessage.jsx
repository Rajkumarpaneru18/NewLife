import { IoSend } from "react-icons/io5";
import PropTypes from "prop-types";

const SendMessage = ({ message, sendMessage, setMessage }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3  border-t border-gray-600 bg-black min-h-[10vh]">
      <form className="flex-grow mx-4">
        <input
          className="w-full p-3 text-base text-white placeholder-gray-500 bg-gray-700 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent resize-none"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <button
        onClick={() => {
          sendMessage();
        }}
        className="p-3 bg-indigo-500 rounded-full text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
      >
        <IoSend className="w-6 h-6" />
      </button>
    </div>
  );
};

SendMessage.propTypes = {
  message: PropTypes.string,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func,
};

export default SendMessage;
