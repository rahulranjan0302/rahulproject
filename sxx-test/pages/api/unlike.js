import prisma from "../../prisma/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    const email = session.user.email;
    const vidId = req.body.vidId;
    let { likes } = await prisma.video.findUnique({
      where: {
        id: `${vidId}`,
      },
      select: {
        likes: true,
      },
    });
    likes = likes.filter(item => item != email);

    const video = await prisma.video.update({
      where: {
        id: `${vidId}`,
      },
      data: {
        likes: {
          set: likes,
        },
      },
    });
    res.json(video);
  }
}
