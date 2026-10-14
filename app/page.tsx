"use client";

import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import HorizontalStage from "../components/STAGE/HorizontalStage";
import Panel from "../components/ui/Panel";
import HomePanel from "../components/panels/HomePanel";
import AcademicQualificationsPanel from "../components/panels/AcademicQualificationsPanel";
import PublicationsPanel from "../components/panels/PublicationsPanel";
import WorkExperiencePanel from "../components/panels/WorkExperiencePanel";
import AwardsPanel from "../components/panels/AwardsPanel";
import InvitedTalksPanel from "../components/panels/InvitedTalksPanel";

export default function Home() {
  const [activePanel, setActivePanel] = useState("home");

  useEffect(() => {
    const validHashes = new Set([
      "home",
      "qualifications",
      "work",
      "publications",
      "conferences",
      "awards",
      "invited-talks",
      "home-footer",
    ]);

    const checkHash = () => {
      const rawHash = window.location.hash.slice(1);

      if (!rawHash) {
        return;
      }

      let hash = rawHash;

      try {
        hash = decodeURIComponent(rawHash);
      } catch {
        hash = rawHash;
      }

      if (!validHashes.has(hash)) {
        window.location.replace("/404");
      }
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const handleNavigation = (target: string) => {
    if (target === "contact") {
      window.location.assign("/contact");
      return;
    }

    const element = document.getElementById(target);

    if (!element) {
      return;
    }

    element.scrollTop = 0;

    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    window.setTimeout(() => {
      element.scrollTop = 0;
    }, 350);

    setActivePanel(target);

    // Update the URL without reloading the page
    window.history.pushState(null, "", `#${target}`);
  };

  /*
   * Open the correct panel when the page is loaded
   * with a hash in the URL.
   *
   * Example:
   * yoursite.com/#awards
   */
  useEffect(() => {
    const target = window.location.hash.replace("#", "");

    if (!target) {
      return;
    }

    const element = document.getElementById(target);

    if (!element) {
      return;
    }

    // Small delay so the horizontal stage has mounted first
    window.setTimeout(() => {
      element.scrollIntoView({
        behavior: "instant",
        block: "nearest",
        inline: "start",
      });

      element.scrollTop = 0;
      setActivePanel(target);
    }, 100);
  }, []);

  /*
   * Handle browser back/forward buttons.
   */
  useEffect(() => {
    const handleHashChange = () => {
      const target = window.location.hash.replace("#", "");

      if (!target) {
        return;
      }

      const element = document.getElementById(target);

      if (!element) {
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      element.scrollTop = 0;
      setActivePanel(target);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleContact = () => {
    const homePanel = document.getElementById("home");

    if (!homePanel) {
      return;
    }

    /*
     * If we are not currently on Home,
     * move horizontally to Home first.
     */
    if (activePanel !== "home") {
      homePanel.scrollTop = 0;

      homePanel.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      setActivePanel("home");

      window.history.pushState(null, "", "#home");

      /*
       * Wait for horizontal movement to finish,
       * then move to the footer.
       */
      window.setTimeout(() => {
        const footer = document.getElementById("home-footer");

        if (footer) {
          footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);

      return;
    }

    /*
     * Already on Home.
     * Simply scroll to the footer.
     */
    const footer = document.getElementById("home-footer");

    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navigation
        activePanel={activePanel}
        onNavigate={handleNavigation}
        onContact={handleContact}
      />

      <HorizontalStage onActivePanelChange={setActivePanel}>
        <Panel id="home">
          <HomePanel onNavigate={handleNavigation} />
        </Panel>

        <Panel id="qualifications">
          <AcademicQualificationsPanel />
        </Panel>

        <Panel id="work">
          <WorkExperiencePanel />
        </Panel>

        <Panel id="publications">
          <PublicationsPanel />
        </Panel>


        <Panel id="awards">
          <AwardsPanel />
        </Panel>

        <Panel id="invited-talks">
          <InvitedTalksPanel />
        </Panel>
      </HorizontalStage>
    </>
  );
}