import prisma from "../../prisma/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    const email = session.user.email;
    const img = req.body.img;
    const updateAvatar = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        image: img,
      },
    });
    res.status(201).json(updateAvatar);
  }
}
