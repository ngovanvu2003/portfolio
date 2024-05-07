// import io from "socket.io-client";
// import { useState } from "react";
// import InputChat from "./inputChat";


// const BoxChat = () => {
//   const [userName, setUserName] = useState("");
//   const [room, setRoom] = useState("");
//   const joinRoom = () => {
//     if (userName !== "" && room !== "") {
//       socket.emit("join_room", room);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <h3>Vu chat</h3>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(event) => setUserName(event.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Room"
//           onChange={(event) => setRoom(event.target.value)}
//         />
//         <button onClick={joinRoom}>Join Room</button>
//       </div>
//       <InputChat socket={socket} userName={userName} room={room} />
//     </div>
//   );
// };

// export default BoxChat;
