import type { Metadata } from "next";
import { StartLearningPage } from "@/components/start-learning-page";

export const metadata: Metadata = {
  title: "Start Learning Game Programming | Game Dev Glory",
  description:
    "Book a beginner-friendly game programming session to choose a first engine, first project, and practical learning path.",
  openGraph: {
    title: "Start Learning Game Programming | Game Dev Glory",
    description:
      "Beginner-friendly 1-on-1 guidance for choosing what to learn, what to build first, and how to avoid tutorial loops.",
    type: "website",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Game Dev Glory logo",
      },
    ],
  },
};

export default function StartLearningGameProgramming() {
  return <StartLearningPage />;
}
