"use client";

import { Manrope } from "next/font/google";
import { useState, useRef, useEffect } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300"],
});



type VideoSource =
  | { type: "youtube"; url: string }
  | { type: "facebook"; url: string }
  | { type: "mp4"; src: string };

interface VideoItem {
  source: VideoSource;
  orientation: "horizontal" | "vertical";
  link?: string;
  banner?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");
    let videoId: string | null = null;

    if (hostname === "youtu.be") {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v");
      } else if (["shorts", "embed", "live"].includes(pathParts[0] ?? "")) {
        videoId = pathParts[1] ?? null;
      }
    }

    if (!videoId || !/^[A-Za-z0-9_-]{11}$/.test(videoId)) return null;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&playsinline=1`;
  } catch {
    return null;
  }
}

function getFacebookEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");
    if (hostname !== "facebook.com" && hostname !== "m.facebook.com") return null;

    const embedUrl = new URL("https://www.facebook.com/plugins/video.php");
    embedUrl.searchParams.set("href", url);
    embedUrl.searchParams.set("show_text", "false");
    embedUrl.searchParams.set("autoplay", "true");
    return embedUrl.toString();
  } catch {
    return null;
  }
}

const videos: VideoItem[] = [
  {
    source: { type: "youtube", url: "https://youtu.be/0eEpXxyLK1Y?si=8ACdQ9KCYM4_wxFy" },
    orientation: "horizontal",
    link: "https://youtu.be/0eEpXxyLK1Y?si=8ACdQ9KCYM4_wxFy",
    banner: "/images/recent-media/I(1).avif",
  },
  {
    source: {
      type: "facebook",
      url: "https://www.facebook.com/FlameUniversity/videos/prof-moitrayee-das-faculty-of-psychology-highlights-the-evolving-mental-health-l/930506519163873/",
    },
    orientation: "vertical",
    link: "https://www.facebook.com/FlameUniversity/videos/prof-moitrayee-das-faculty-of-psychology-highlights-the-evolving-mental-health-l/930506519163873/",
    banner: "/images/recent-media/I(2).jpg",
  },
  {
    source: { type: "mp4", src: "/videos/Vid (3).mp4" },
    orientation: "vertical",
    link: "https://open.spotify.com/episode/5gGm2vOeLU7ry7n1zgKMx7?si=BbwKm9pbRtKaMhABbjbShA",
  },
  {
    source: { type: "mp4", src: "/videos/Vid (4).mp4" },
    orientation: "horizontal",
    link: "https://www.instagram.com/reel/DcNdd4QJy56/",
    banner: "/images/recent-media/I(4).png",
  },
  {
    source: { type: "mp4", src: "/videos/Vid (5).mp4" },
    orientation: "vertical",
    link: "https://www.instagram.com/reel/DcygLe7pj_j/",
  },
];



export default function RecentMedia() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lockedIndex, setLockedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const activeIndex = lockedIndex ?? hoveredIndex;
  const selectedVideo = lockedIndex === null ? null : videos[lockedIndex];
  const selectedEmbedUrl = selectedVideo?.source.type === "youtube"
    ? getYouTubeEmbedUrl(selectedVideo.source.url)
    : selectedVideo?.source.type === "facebook"
      ? getFacebookEmbedUrl(selectedVideo.source.url)
      : null;

  // --- Smooth infinite autoscroll with native scroll support ---
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollSpeed = 0.75; // Adjust scrolling speed here

    const step = () => {
      if (!isPaused && lockedIndex === null && !isDragging.current) {
        el.scrollLeft += scrollSpeed;

        // Loop smoothly when reaching half width (duplicate list boundary)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, lockedIndex]);

  // --- Drag-to-scroll handlers (for mouse users) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
        <section className="relative overflow-hidden bg-blue-700 pt-14 pb-10">
<div style={{ zoom: 0.85, width: "100%" }}>
{/* Clean Single Heading with tight spacing - Centered */}
<div className="mx-auto mb-8 w-full max-w-[1280px] px-6 text-center md:px-10 lg:px-12 xl:px-16">
  <h2
    className={`${manrope.className} text-[36px] font-light tracking-[-0.035em] text-white md:text-[56px]`}
  >
   Recent Media
  </h2>
</div>



      {/* Horizontally scrollable + draggable track */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleMouseUpOrLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className="no-scrollbar flex cursor-grab overflow-x-auto active:cursor-grabbing px-6 md:px-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex w-max items-center gap-5 py-6">
          {/* Duplicated 3 times to ensure infinite smooth seamless looping */}
          {[...videos, ...videos, ...videos, ...videos, ...videos, ...videos].map((video, index) => {
            const originalIndex = index % videos.length;
            const isActive = activeIndex === originalIndex;

            return (
              <button
  key={`${video.source.type === "mp4" ? video.source.src : video.source.url}-${index}`}
  type="button"
  onMouseEnter={() => {
    if (lockedIndex === null) setHoveredIndex(originalIndex);
  }}
  onMouseLeave={() => {
    if (lockedIndex === null) setHoveredIndex(null);
  }}
  onClick={() => {
    if (isDragging.current) return;
    setLockedIndex(lockedIndex === originalIndex ? null : originalIndex);
    setHoveredIndex(null);
  }}
  className={`group relative shrink-0 select-none overflow-hidden rounded-2xl bg-slate-950 text-left transition-all duration-300 ${
    video.orientation === "horizontal"
      ? "w-[300px] aspect-video md:w-[380px]"
      : "w-[185px] aspect-[9/16] md:w-[215px]"
  } ${
    isActive
      ? "z-20 scale-[1.04] ring-1 ring-white/60 shadow-[0_0_20px_rgba(255,255,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)]"
      : "ring-1 ring-transparent hover:ring-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)]"
  }`}
  aria-label={`Play media ${originalIndex + 1}`}
>
  {/* Plain video — completely clean, no overlay */}
  {video.source.type === "mp4" && (
    <video
      src={video.source.src}
      muted
      loop
      playsInline
      autoPlay={isActive}
      className="pointer-events-none h-full w-full object-cover"
    />
  )}
{/* Optional Banner Overlay: Fades out on hover to reveal video */}
{video.banner && (
  <img
    src={video.banner}
    alt="Video preview banner"
    className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
      video.source.type !== "mp4" || !isActive ? "opacity-100" : "opacity-0"
    }`}
  />
)}
  {/* Index tag on the bottom-left */}
  <span
    className={`pointer-events-none absolute bottom-3 left-3 text-xs font-medium tracking-[0.15em] text-white transition-opacity duration-300 ${
      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    }`}
  >
    0{originalIndex + 1}
  </span>

  {/* NEW: Arrow link button on the bottom-right */}
  <a
    href={video.link || "#"} // Add your link here or in the videos array
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()} // Prevents triggering the card modal/lock click
    aria-label={`Open media link ${originalIndex + 1}`}
    className={`absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900 ${
      isActive ? "opacity-100 scale-100" : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  </a>

</button>
            );
          })}
        </div>
      </div>
      </div>

      {/* Modal / Locked Preview */}
      {lockedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-6 py-8 backdrop-blur-sm"
          onClick={() => {
            setLockedIndex(null);
            setHoveredIndex(null);
          }}
        >
          <div
            className={`relative max-h-[85vh] overflow-hidden rounded-2xl bg-black shadow-[0_30px_100px_rgba(0,0,0,0.5)] ${
              selectedVideo?.orientation === "horizontal"
                ? "w-full max-w-[900px]"
                : "aspect-[9/16] h-[80vh] max-w-[90vw]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedEmbedUrl ? (
              <iframe
                src={selectedEmbedUrl}
                title={`${selectedVideo?.source.type === "youtube" ? "YouTube" : "Facebook"} recent media video`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            ) : selectedVideo?.source.type === "mp4" ? (
              <video
                src={selectedVideo.source.src}
                autoPlay
                loop
                playsInline
                controls
                className="h-full w-full object-contain"
              />
            ) : (
              <p className="p-6 text-white">This video link could not be embedded.</p>
            )}

            <button
              type="button"
              onClick={() => {
                setLockedIndex(null);
                setHoveredIndex(null);
              }}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              aria-label="Close media"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}