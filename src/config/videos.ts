export type VideoCategory = "wildlife" | "digiscoping" | "ski" | "exploration";

export type CuratedVideo = {
  id: string;
  category: VideoCategory;
  youtubeUrl: string;
  youtubeId: string | null;
  thumbnail: string;
  titleKey: string;
  descriptionKey: string;
  /**
   * Real publish date as `YYYY-MM-DD`. Required by Google for VideoObject rich
   * results — fill these from each video's "…ago" / publish date on YouTube.
   */
  uploadDate: string | null;
  /** ISO-8601 duration, e.g. `PT4M30S`. Optional but recommended for rich results. */
  duration: string | null;
};

export const featuredVideos: CuratedVideo[] = [
  {
    id: "video-06",
    category: "wildlife",
    youtubeUrl: "https://www.youtube.com/watch?v=6j-AEwMGFE4",
    youtubeId: "6j-AEwMGFE4",
    thumbnail: "https://i.ytimg.com/vi/6j-AEwMGFE4/hqdefault.jpg",
    titleKey: "items.video06.title",
    descriptionKey: "items.video06.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-02",
    category: "digiscoping",
    youtubeUrl: "https://www.youtube.com/watch?v=AvbnQkJQE6A",
    youtubeId: "AvbnQkJQE6A",
    thumbnail: "https://i.ytimg.com/vi/AvbnQkJQE6A/maxresdefault.jpg",
    titleKey: "items.video02.title",
    descriptionKey: "items.video02.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-03",
    category: "exploration",
    youtubeUrl: "https://www.youtube.com/watch?v=yH9cArzx4n8",
    youtubeId: "yH9cArzx4n8",
    thumbnail: "https://i.ytimg.com/vi/yH9cArzx4n8/maxresdefault.jpg",
    titleKey: "items.video03.title",
    descriptionKey: "items.video03.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-04",
    category: "ski",
    youtubeUrl: "https://www.youtube.com/watch?v=wQrx2422wD8",
    youtubeId: "wQrx2422wD8",
    thumbnail: "https://i.ytimg.com/vi/wQrx2422wD8/maxresdefault.jpg",
    titleKey: "items.video04.title",
    descriptionKey: "items.video04.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-05",
    category: "ski",
    youtubeUrl: "https://youtu.be/nEh50VnbfXI?si=1HECZ5WQxbPna1V-",
    youtubeId: "nEh50VnbfXI",
    thumbnail: "https://i.ytimg.com/vi/nEh50VnbfXI/maxresdefault.jpg",
    titleKey: "items.video05.title",
    descriptionKey: "items.video05.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-01",
    category: "wildlife",
    youtubeUrl: "https://youtu.be/wQrx2422wD8?si=rW2Xxw4PZ-AnipT9",
    youtubeId: "wQrx2422wD8",
    thumbnail: "https://i.ytimg.com/vi/wQrx2422wD8/maxresdefault.jpg",
    titleKey: "items.video01.title",
    descriptionKey: "items.video01.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-07",
    category: "exploration",
    youtubeUrl: "https://youtu.be/bn1cIlhqL74?si=kMIpB_29rwCEcnCk",
    youtubeId: "bn1cIlhqL74",
    thumbnail: "https://i.ytimg.com/vi/bn1cIlhqL74/maxresdefault.jpg",
    titleKey: "items.video07.title",
    descriptionKey: "items.video07.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-08",
    category: "wildlife",
    youtubeUrl: "https://www.youtube.com/watch?v=NfDpfAOKuHY",
    youtubeId: "NfDpfAOKuHY",
    thumbnail: "https://i.ytimg.com/vi/NfDpfAOKuHY/maxresdefault.jpg",
    titleKey: "items.video08.title",
    descriptionKey: "items.video08.description",
    uploadDate: null,
    duration: null,
  },
  {
    id: "video-09",
    category: "exploration",
    youtubeUrl: "https://youtu.be/bgMtDKP8j3w?si=KG4Q1GDASiK7JovY",
    youtubeId: "bgMtDKP8j3w",
    thumbnail: "https://i.ytimg.com/vi/bgMtDKP8j3w/maxresdefault.jpg",
    titleKey: "items.video09.title",
    descriptionKey: "items.video09.description",
    uploadDate: null,
    duration: null,
  },
];
