import type { Metadata } from "next";

import CookiePolicyPageContent from "../../components/CookiePolicyPageContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Dr. Moitrayee Das",
  description:
    "Cookie and similar technology information for Dr. Moitrayee Das's portfolio website.",
};

export default function CookiePolicyPage() {
  return <CookiePolicyPageContent />;
}
