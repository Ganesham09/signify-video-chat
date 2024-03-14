import { useEffect } from "react";

import { useScoket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
import {} from "react";

const Room = () => {
  const socket = useScoket();
  const { peer, myId } = usePeer();
};

export default Room;
