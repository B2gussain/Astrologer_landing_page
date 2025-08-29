import type { NextApiRequest, NextApiResponse } from "next";
import { Testimonial } from "@/lib/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Testimonial[]>
) {
  res.status(200).json([
    {
      name: "Sophia Lee",
      feedback: "The session was life-changing! I got so much clarity.",
      imageUrl: "/images/client1.jpg"
    },
    {
      name: "David Kim",
      feedback: "Accurate predictions and very professional.highly recomended",
      imageUrl: "/images/client2.avif"
    },
    {
      name: "Emma Watson",
      feedback: "I feel more confident about my future now. Amazing experience!",
      imageUrl: "/images/client3.jpg"
    }]);
}
