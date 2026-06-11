import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mountain Fauna Lover",
    short_name: "Mountain Fauna",
    description:
      "Wildlife observation, digiscoping and cinematic alpine stories.",
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#030303",
    icons: [
      {
        src: "/logo/mountain-fauna-logo-v2.png",
        sizes: "800x800",
        type: "image/png",
      },
    ],
  };
}
