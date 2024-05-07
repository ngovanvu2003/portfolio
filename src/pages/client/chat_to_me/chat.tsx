// import io from "socket.io-client";
// import { useEffect, useState } from "react";
// const socket  = io.connect("http://localhost:8080");
// const Chat = () => {
//   const [userName, setUserName] = useState("");
//   const [room, setRoom] = useState("");
//   const joinRoom = () => {
//     if (userName !== "" && room !== "") {
//       socket.emit("join_room", room);
//     }
//   };
//   const [isChatOpen, setChatOpen] = useState(false);
//   const openChat = () => {
//     setChatOpen(true);
//   };
//   const closeChat = () => {
//     setChatOpen(false);
//   };
//   const [currentMessage, setCurrentMessage] = useState("");

//   const [messageList, setMessageList] = useState<[]>([]);
//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: userName,
//         message: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ":" +
//           new Date(Date.now()).getMinutes(),
//       };
//       await socket.emit("send_message", messageData);
//       setMessageList((list: any) => [...list, messageData]);
//     }
//   };
//   useEffect(() => {
//     socket.on("received_message", (data: any) => {
//       setMessageList((list: any) => [...list, data]);
//     });
//   }, [socket]);
//   return (
//     <div className="chat-container">
//       <div className="icon-message">
//         <button className="chatBtn" onClick={openChat}>
//           <svg
//             height="1.6em"
//             fill="white"
//             xmlSpace="preserve"
//             viewBox="0 0 1000 1000"
//             y="0px"
//             x="0px"
//             version="1.1"
//           >
//             <path d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z"></path>
//           </svg>
//           <span className="tooltip">Chat</span>
//         </button>
//       </div>

//       {isChatOpen && (
//         <div className="chat-box">
//           <div className="header">
//             <span className="close" onClick={closeChat}>
//               &times;
//             </span>
//             Chat Box
//           </div>
//           <div className="chat-body overflow: auto">
//             <div>
//               <h3>Vu chat</h3>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 onChange={(event) => setUserName(event.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Room"
//                 onChange={(event) => setRoom(event.target.value)}
//               />
//               <button onClick={joinRoom}>Join Room</button>
//             </div>

//             {messageList.map((messageContent: any, index) => {
//               return (
//                 <div
//                   key={index}
//                   id={userName === messageContent.author ? "you" : "other"}
//                 >
//                   <div className="message-content">
//                     {messageContent?.message}
//                   </div>
//                   <div className="message-meta">
//                     {messageContent?.time}
//                     {messageContent?.author}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <hr className="input-header" />
//           <div className="input-message ">
//             <input
//               type="text"
//               placeholder="Enter a message..."
//               onChange={(event) => {
//                 setCurrentMessage(event.target.value);
//               }}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;
