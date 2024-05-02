/* eslint-disable @typescript-eslint/no-unsafe-call */
import io from "socket.io-client";



import io from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export const socket: new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData> = io.connect("http://localhost:8080");