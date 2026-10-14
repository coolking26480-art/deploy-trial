import type { Metadata } from "next";

import PrivacyPolicyPageContent from "../../components/PrivacyPolicyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Sujal Jain",
  description:
    "Privacy policy for the personal portfolio website of Sujal Jain.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageContent />;
}
