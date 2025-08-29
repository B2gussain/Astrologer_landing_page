import type { NextApiRequest, NextApiResponse } from "next";
import { HeroData } from "@/lib/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HeroData>
) {
  res.status(200).json({
    title: "Unlock Your Cosmic Destiny",
    subtitle: "Book sessions with expert astrologers and discover your true path.",
    ctaText: "Book Now",
    ctaLink: "/book",
    imageUrl: "/images/astrologer.jpg",
    badges: [
      { label: "10k+ Sessions", icon: "Star" },
      { label: "Rated 4.9/5", icon: "ThumbsUp" },
      { label: "Verified Expert", icon: "ShieldCheck" }
    ]
  });
}
