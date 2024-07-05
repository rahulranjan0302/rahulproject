import prisma from "../../prisma/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    const email = session.user.email;
    const projectId = req.body.projectId;
    const { votes } = await prisma.project.findUnique({
      where: {
        id: `${projectId}`,
      },
      select: {
        votes: true,
      },
    });
    const projects = await prisma.project.update({
      where: {
        id: `${projectId}`,
      },
      data: {
        votes: {
          set: [...votes, email],
        },
      },
    });
    res.json(projects);
  } else {
    const data = await prisma.project.findMany();
    res.json(data);
  }
}
