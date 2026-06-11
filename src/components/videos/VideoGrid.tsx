"use client";

import { useCallback, useState } from "react";

import { featuredVideos, type CuratedVideo } from "@/config/videos";

import { VideoCard } from "./VideoCard";
import { VideoModal } from "./VideoModal";

export function VideoGrid() {
  const [selected, setSelected] = useState<CuratedVideo | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredVideos.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            index={index}
            onSelect={setSelected}
          />
        ))}
      </div>
      <VideoModal video={selected} onClose={close} />
    </>
  );
}
