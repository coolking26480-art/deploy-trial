export type PodcastPlatform =
  | "youtube"
  | "facebook"
  | "linkedin"
  | "instagram"
  | "mp4";
   
export type PodcastEpisode = {
  id: number;
  title: string;
  platform: PodcastPlatform;

  // Optional label displayed on the card; does not control playback.
  platformLabel?: string;

  // Original video, reel, or post URL.
  url: string;

  // Optional direct embed URL, especially for LinkedIn posts.
  embedUrl?: string;

  // Optional supporting destination: Spotify, original post, etc.
  destinationUrl?: string;
  destinationLabel?: string;

  orientation: "landscape" | "portrait";
  thumbnail: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 1,
    title: "Understanding Gen Z: Work, Life & Purpose",
    platform: "youtube",
    url: "https://youtu.be/0eEpXxyLK1Y?si=8ACdQ9KCYM4_wxFy",
    destinationUrl:
      "https://youtu.be/0eEpXxyLK1Y?si=8ACdQ9KCYM4_wxFy",
    destinationLabel: "Watch on YouTube",
    orientation: "landscape",
    thumbnail: "/images/podcast/H1.jpg",
  },
  {
    id: 2,
    title: "Mental Health Landscape of Gen Z and Gen Alpha",
    platform: "facebook",
    url: "https://www.facebook.com/FlameUniversity/videos/prof-moitrayee-das-faculty-of-psychology-highlights-the-evolving-mental-health-l/930506519163873/",
    destinationUrl:
      "https://www.facebook.com/FlameUniversity/videos/prof-moitrayee-das-faculty-of-psychology-highlights-the-evolving-mental-health-l/930506519163873/",
    destinationLabel: "Watch on Facebook",
    orientation: "portrait",
    thumbnail: "/images/podcast/h2.jpg",
  },
  {
    id: 3,
    title: "Hope. Sleep. & Kindness.",
    platform: "mp4",
    platformLabel: "Spotify",
    url: "/videos/Vid (3).mp4",
    destinationUrl:
      "https://open.spotify.com/episode/5gGm2vOeLU7ry7n1zgKMx7?si=BbwKm9pbRtKaMhABbjbShA",
    destinationLabel: "Listen on Spotify",
    orientation: "portrait",
    thumbnail: "/images/linkedin-promo.jpg",
  },
  {
    id: 4,
    title: "FLAME Psychology Club Podcast: Burnout to Balance",
    platform: "mp4",
    platformLabel: "Spotify",
    url: "/videos/Vid (4).mp4",
    destinationUrl:
      "https://open.spotify.com/episode/2hctU2rQBDeF0tBxRx5g5s?si=qP6XwOK2S5C12xElodlheA",
    destinationLabel: "Listen on Spotify",
    orientation: "portrait",
    thumbnail: "/images/instagram-promo.jpg",
  },
  {
    id: 5,
    title: "TISS PHD Experience Podcast",
    platform: "youtube",
    url: "https://youtu.be/0j1szPfGsYM",
    destinationUrl: "https://youtu.be/0j1szPfGsYM",
    destinationLabel: "Watch on YouTube",
    orientation: "landscape",
    thumbnail: "/images/podcast/h3.jpg",
  },
  {
    id: 6,
    title: "Teacher Development Open House",
    platform: "youtube",
    platformLabel: "YouTube",
    url: "https://www.youtube.com/watch?v=FljyaVOyA3Y",
    destinationUrl: "https://www.youtube.com/live/FljyaVOyA3Y",
    destinationLabel: "Watch on YouTube",
    orientation: "landscape",
    thumbnail: "/images/instagram-promo.jpg",
  },
  {
    id: 7,
    title: "Goenka School Talk",
    platform: "mp4",
    url: "/videos/Vid (4).mp4",
    destinationUrl: "https://www.instagram.com/reel/DcNdd4QJy56/",
    destinationLabel: "Watch on Instagram",
    orientation: "landscape",
    thumbnail: "/images/podcast/I(4).png",
  },
];