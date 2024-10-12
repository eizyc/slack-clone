"use client";

import { useChannelId } from "@/hooks/use-channel-id";

const ChannelIdPage = () => {
  const channelId = useChannelId();

  return ( 
    <div className="flex flex-col h-full">
        {channelId}
    </div>
  );
};
 
export default ChannelIdPage;
