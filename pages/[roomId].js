import { useEffect } from "react";

import { useScoket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
import useMediaStream from "@/hooks/useMediaStream";
import Player from "@/components/player";

const Room = () => {
  const socket = useScoket();
  const { peer, myId } = usePeer();
  const { stream } = useMediaStream();

  return (
    <div>
      <Player url={stream} muted playing playerId={myId} />
    </div>
  );
};

export default Room;
