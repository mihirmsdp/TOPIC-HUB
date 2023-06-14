import { io } from "socket.io-client";
// const socket = io("https://topichub-api.onrender.com");
const socket = io("http://localhost:5000");
export default socket;