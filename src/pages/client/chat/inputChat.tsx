import { useEffect, useState } from "react";

const InputChat = ({ socket, userName, room }: any) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const [messageList, setMessageList] = useState<[]>([]);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list: any) => [...list, messageData]);
    }
  };
  useEffect(() => {
    socket.on("received_message", (data: any) => {
      setMessageList((list: any) => [...list, data]);
    });
  }, [socket]);
  return (
    <div>
      <div className="chat-header">
        <p>Live chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent: any, index) => {
          return (
            <div
              key={index}
              id={userName === messageContent.author ? "you" : "other"}
            >
              <div className="message-content">{messageContent?.message}</div>
              <div className="message-meta">
                {messageContent?.time}
                {messageContent?.author}
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="ALo..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default InputChat;
