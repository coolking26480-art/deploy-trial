"use client";

import {
  Children,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface HorizontalStageProps {
  children: ReactNode;
  onActivePanelChange?: (panelId: string) => void;
}

export default function HorizontalStage({
  children,
  onActivePanelChange,
}: HorizontalStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const panels = Array.from(stage.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );

    if (panels.length === 0) {
      return;
    }

    /*
     * If the URL already contains a panel hash,
     * move to that panel when the page loads.
     */
    const initialHash = window.location.hash.replace("#", "");

    if (initialHash) {
      const initialPanel = document.getElementById(initialHash);

      if (initialPanel) {
        window.setTimeout(() => {
          initialPanel.scrollIntoView({
            behavior: "instant",
            block: "nearest",
            inline: "start",
          });

          initialPanel.scrollTop = 0;
        }, 100);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visiblePanel = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (!visiblePanel) {
          return;
        }

        const panelId = (visiblePanel.target as HTMLElement).id;

        if (!panelId) {
          return;
        }

        /*
         * Update the active navigation state.
         */
        onActivePanelChange?.(panelId);

        /*
         * Update the browser URL whenever the visible
         * panel changes.
         *
         * This works for:
         * - mouse wheel horizontal scrolling
         * - trackpad scrolling
         * - dragging the scrollbar
         * - touch/swipe navigation
         * - navigation buttons
         */
        if (!isNavigatingRef.current) {
          const currentHash = window.location.hash.replace("#", "");

          if (currentHash !== panelId) {
            window.history.replaceState(
              null,
              "",
              `#${panelId}`,
            );
          }
        }
      },
      {
        root: stage,
        threshold: [0.5, 0.75, 0.9],
      },
    );

    panels.forEach((panel) => observer.observe(panel));

    /*
     * Detect when the user is manually scrolling.
     */
    const handleScroll = () => {
      isNavigatingRef.current = false;
    };

    stage.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    /*
     * Listen for browser back/forward navigation.
     */
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) {
        return;
      }

      const panel = document.getElementById(hash);

      if (!panel) {
        return;
      }

      isNavigatingRef.current = true;

      panel.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      panel.scrollTop = 0;

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }

      navigationTimeoutRef.current = window.setTimeout(() => {
        isNavigatingRef.current = false;
      }, 500);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      observer.disconnect();

      stage.removeEventListener("scroll", handleScroll);

      window.removeEventListener("popstate", handlePopState);

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [onActivePanelChange]);

  return (
    <main
      ref={stageRef}
      className="no-scrollbar flex h-screen w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth"
    >
      {Children.map(children, (child) => child)}
    </main>
  );
}