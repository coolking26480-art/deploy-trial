
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { podcastEpisodes } from "../../lib/podcastGalleryData";

type Episode = (typeof podcastEpisodes)[number];

function getEmbedUrl(episode: Episode): string {
  if (episode.platform === "youtube") {
    try {
      const url = new URL(episode.url);
      let videoId = "";

      if (url.hostname === "youtu.be") {
        videoId = url.pathname.split("/").filter(Boolean)[0] || "";
      } else if (url.hostname.includes("youtube.com")) {
        videoId = url.searchParams.get("v") || "";

        if (!videoId && url.pathname.startsWith("/shorts/")) {
          videoId = url.pathname.split("/")[2] || "";
        }

        if (!videoId && url.pathname.startsWith("/embed/")) {
          videoId = url.pathname.split("/")[2] || "";
        }
      }

      return videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
        : "";
    } catch {
      return "";
    }
  }

  if (episode.platform === "facebook") {
    return (
      "https://www.facebook.com/plugins/video.php?href=" +
      encodeURIComponent(episode.url) +
      "&show_text=false"
    );
  }

  if (episode.platform === "instagram") {
    try {
      const url = new URL(episode.url);

      if (
        !url.hostname.endsWith("instagram.com") ||
        !["/reel/", "/p/", "/tv/"].some((path) =>
          url.pathname.startsWith(path)
        )
      ) {
        return "";
      }

      const parts = url.pathname.split("/").filter(Boolean);
      const shortcode = parts[1];

      if (!shortcode) return "";

      return `https://www.instagram.com/${parts[0]}/${shortcode}/embed`;
    } catch {
      return "";
    }
  }

  return "";
}

export default function PodcastGallery() {
  const scrollSpaceRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const [isOverCard, setIsOverCard] = useState(false);

  // Click detection based on each card's actual screen position.
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    const track = trackRef.current;

    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>("[data-gallery-card]");

    for (const card of cards) {
      const rect = card.getBoundingClientRect();

      if (
        clickX >= rect.left &&
        clickX <= rect.right &&
        clickY >= rect.top &&
        clickY <= rect.bottom
      ) {
        const episodeId = card.getAttribute("data-episode-id");
        const found = podcastEpisodes.find(
          (ep) => String(ep.id) === episodeId
        );

        if (found) {
          setActiveEpisode(found);
          break;
        }
      }
    }
  };

  const handleGalleryMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const cards = trackRef.current?.querySelectorAll<HTMLElement>(
      "[data-gallery-card]"
    );

    if (!cards) return;

    const overCard = Array.from(cards).some((card) => {
      const rect = card.getBoundingClientRect();

      return (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
    });

    setIsOverCard(overCard);
  };

  useEffect(() => {
    const scrollSpace = scrollSpaceRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;

    if (!scrollSpace || !track || !progressBar) return;

    let parent = scrollSpace.parentElement;
    let scrollContainer: HTMLElement | null = null;

    while (parent) {
      const style = window.getComputedStyle(parent);

      if (/(auto|scroll|overlay)/.test(style.overflowY)) {
        scrollContainer = parent;
        break;
      }

      parent = parent.parentElement;
    }

    let targetX = 0;
    let currentX = 0;
    let animationFrame = 0;

    const updateScroll = () => {
      const rect = scrollSpace.getBoundingClientRect();

      let distanceScrolled: number;
      let scrollDistance: number;

      if (scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const containerTop = containerRect.top + scrollContainer.clientTop;

        distanceScrolled = containerTop - rect.top;
        scrollDistance =
          scrollSpace.offsetHeight - scrollContainer.clientHeight;
      } else {
        distanceScrolled = -rect.top;
        scrollDistance = scrollSpace.offsetHeight - window.innerHeight;
      }

      const progress =
        scrollDistance > 0
          ? Math.min(1, Math.max(0, distanceScrolled / scrollDistance))
          : 0;

      const viewportWidth = scrollContainer
        ? scrollContainer.clientWidth
        : window.innerWidth;

      const maxTravel = Math.max(0, track.scrollWidth - viewportWidth);

      targetX = -progress * maxTravel;
      progressBar.style.width = `${progress * 100}%`;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.075;

      track.style.transform = `translate3d(${currentX}px, 0, 0)`;

      const screenMiddle = window.innerWidth / 2;
      const cards = track.querySelectorAll<HTMLElement>(
        "[data-gallery-card]"
      );

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardMiddle = rect.left + rect.width / 2;

        const n = Math.max(
          -1,
          Math.min(1, (cardMiddle - screenMiddle) / screenMiddle)
        );

        // Original cinematic 3D animation preserved.
        const rotateY = n * -28;
        const depth = -Math.abs(n) * 220;
        const verticalOffset = Math.abs(n) * 30;

        card.style.transform =
          `translate3d(0, ${verticalOffset}px, ${depth}px) ` +
          `rotateY(${rotateY}deg)`;

        card.style.zIndex = String(
          100 - Math.round(Math.abs(n) * 50)
        );

        const image = card.querySelector<HTMLElement>(
          "[data-gallery-image]"
        );

        if (image) {
          image.style.transform = `scale(1.15) translateX(${n * -6}%)`;
        }
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScroll, {
        passive: true,
      });
    } else {
      window.addEventListener("scroll", updateScroll, { passive: true });
    }

    window.addEventListener("resize", updateScroll);

    updateScroll();
    animate();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScroll);
      } else {
        window.removeEventListener("scroll", updateScroll);
      }

      window.removeEventListener("resize", updateScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    if (!activeEpisode) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveEpisode(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeEpisode]);

  const modal = activeEpisode ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={activeEpisode.title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setActiveEpisode(null);
        }
      }}
    >
      <div
        className={`relative mx-auto ${
          activeEpisode.orientation === "portrait"
            ? "w-full max-w-[280px] md:max-w-[260px]"
            : "w-full md:w-[80%] md:max-w-5xl"
        }`}
      >
        <div className="mb-4 flex items-center justify-between gap-4 text-white">
          <h2 className="text-sm font-medium md:text-lg">
            {activeEpisode.title}
          </h2>

          <button
            type="button"
            onClick={() => setActiveEpisode(null)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-2xl text-white hover:bg-white/10"
            aria-label="Close video"
          >
            ×
          </button>
        </div>

        <div
          className={`relative w-full overflow-hidden rounded-xl bg-black ${
            activeEpisode.orientation === "portrait"
              ? "aspect-[9/16] max-h-[calc(100dvh-180px)]"
              : "aspect-video"
          }`}
        >
          {activeEpisode.platform === "mp4" ? (
            <video
              key={activeEpisode.url}
              src={activeEpisode.url}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain"
            >
              Your browser does not support video playback.
            </video>
          ) : activeEpisode.platform === "linkedin" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
              <p>
                This video may need to be opened on LinkedIn.
              </p>

              <a
                href={activeEpisode.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/50 px-5 py-3 text-sm hover:bg-white/10"
              >
                Open LinkedIn video ↗
              </a>
            </div>
          ) : getEmbedUrl(activeEpisode) ? (
            <iframe
              key={activeEpisode.url}
              src={getEmbedUrl(activeEpisode) || undefined}
              title={activeEpisode.title}
              className="h-full w-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
              <p>This content cannot be embedded here.</p>

              <a
                href={activeEpisode.url.startsWith("http") ? activeEpisode.url : activeEpisode.destinationUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/50 px-5 py-3 text-sm hover:bg-white/10"
              >
                Open original video ↗
              </a>
            </div>
          )}
        </div>

        <p className="mt-3 text-xs text-white/50">
          If playback is blocked, open the original video on its platform.
        </p>

        <a
          href={activeEpisode.destinationUrl || activeEpisode.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white"
        >
          {activeEpisode.destinationLabel || "Open original video ↗"}
        </a>
      </div>
    </div>
  ) : null;

  return (
    <>
      <section
        ref={scrollSpaceRef}
        aria-label="Podcast and video gallery"
        className="relative h-[500vh] w-full bg-[#1548e6] text-white"
      >
        {/* Keep this sticky wrapper; the animation depends on it. */}
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden [perspective:1200px] bg-[#1548e6] pt-10">
          <h2 className="pointer-events-none absolute inset-x-0 top-[90px] z-30 px-4 text-center font-[Manrope] text-4xl font-light tracking-tight text-white sm:top-[90px] sm:text-4xl md:top-[110px] md:text-5xl">
            Podcasts &amp; Media
          </h2>

          <div
            ref={trackRef}
            onClick={handleContainerClick}
            onMouseMove={handleGalleryMouseMove}
            onMouseLeave={() => setIsOverCard(false)}
            className={`relative mt-8 md:mt-20 flex items-center gap-[5vw] px-[12vw] [transform-style:preserve-3d] will-change-transform ${
              isOverCard ? "cursor-pointer" : "cursor-default"
            }`}
          >
            {podcastEpisodes.map((episode, index) => (
              <div
                key={episode.id}
                data-gallery-card
                data-episode-id={episode.id}
                role="button"
                tabIndex={0}
                aria-label={`Play ${episode.title}`}
                className="group relative block aspect-[16/10] w-[86.4vw] shrink-0 overflow-hidden rounded-[18px] bg-[#1a1a1a] text-left text-white shadow-[0_40px_80px_rgba(0,0,0,0.6)] [transform-style:preserve-3d] md:w-[68vw] md:max-w-[600px]"
              >
                <img
                  data-gallery-image
                  src={episode.thumbnail}
                  alt=""
                  loading={index < 3 ? "eager" : "lazy"}
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-[filter] duration-300 group-hover:brightness-75"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <span className="pointer-events-none absolute left-5 top-5 text-[11px] tracking-widest text-white/80">
                  {String(episode.id).padStart(2, "0")} /{" "}
                  {String(podcastEpisodes.length).padStart(2, "0")}
                </span>

                <span className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-widest">
                  {episode.platformLabel || episode.platform}
                </span>

                <span className="pointer-events-none absolute bottom-5 left-5 right-5 text-base font-medium text-white md:text-lg">
                  {episode.title}
                </span>

                <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/35 text-xl text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  ▶
                </span>

                <span className="pointer-events-none absolute bottom-5 right-5 hidden rounded-full border border-white/60 px-3 py-2 text-xs text-white md:block">
                  Play ↗
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute bottom-8 left-6 right-6 z-20 h-[2px] bg-white/35 md:left-10 md:right-10">
            <div ref={progressRef} className="h-full w-0 bg-white" />
          </div>

          <div className="pointer-events-none absolute bottom-12 right-6 z-20 text-[10px] uppercase tracking-widest text-white/75 md:right-10">
            Scroll to explore
          </div>
        </div>
      </section>

      {modal && typeof document !== "undefined"
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}
