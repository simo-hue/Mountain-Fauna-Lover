export type VideoCategory = "wildlife" | "digiscoping" | "ski" | "exploration";

export type CuratedVideo = {
  id: string;
  category: VideoCategory;
  youtubeUrl: string;
  youtubeId: string | null;
  thumbnail: string;
  titleKey: string;
  descriptionKey: string;
};

export const featuredVideos: CuratedVideo[] = [
  {
    id: "video-01",
    category: "wildlife",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-01.jpg",
    titleKey: "items.video01.title",
    descriptionKey: "items.video01.description",
  },
  {
    id: "video-02",
    category: "digiscoping",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-02.jpg",
    titleKey: "items.video02.title",
    descriptionKey: "items.video02.description",
  },
  {
    id: "video-03",
    category: "exploration",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-03.jpg",
    titleKey: "items.video03.title",
    descriptionKey: "items.video03.description",
  },
  {
    id: "video-04",
    category: "ski",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-04.jpg",
    titleKey: "items.video04.title",
    descriptionKey: "items.video04.description",
  },
  {
    id: "video-05",
    category: "wildlife",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-05.jpg",
    titleKey: "items.video05.title",
    descriptionKey: "items.video05.description",
  },
  {
    id: "video-06",
    category: "digiscoping",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-06.jpg",
    titleKey: "items.video06.title",
    descriptionKey: "items.video06.description",
  },
  {
    id: "video-07",
    category: "exploration",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-07.jpg",
    titleKey: "items.video07.title",
    descriptionKey: "items.video07.description",
  },
  {
    id: "video-08",
    category: "ski",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-08.jpg",
    titleKey: "items.video08.title",
    descriptionKey: "items.video08.description",
  },
  {
    id: "video-09",
    category: "wildlife",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: null,
    thumbnail: "/images/videos/video-09.jpg",
    titleKey: "items.video09.title",
    descriptionKey: "items.video09.description",
  },
];
