import { useScoket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
import { useEffect } from "react";

export default function Home() {
  const socket = useScoket();
  usePeer();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
  }, [socket]);

  return <h1>Welcome</h1>;
}
