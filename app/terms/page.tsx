import type { Metadata } from "next";

import TermsOfUsePageContent from "../../components/TermsOfUsePageContent";

export const metadata: Metadata = {
  title: "Terms of Use | Sujal Jain",
  description: "Terms of use for Sujal Jain's personal portfolio website.",
};

export default function TermsPage() {
  return <TermsOfUsePageContent />;
}
