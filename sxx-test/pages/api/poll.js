import prisma from "../../prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
  } else {
    const data = await prisma.project.findMany({
      orderBy: {
        votes: "desc",
      },
    });
    let desData = data;
    desData.sort((a, b) => {
      return parseFloat(b.votes.length) - parseFloat(a.votes.length);
    });

    var totalVotes = 0;
    desData.forEach(item => {
      totalVotes += item.votes.length;
    });

    desData.forEach(item => {
      let percent =
        ((item.votes.length * 100) / totalVotes).toPrecision(4) || 0;
      item["votecount"] = item.votes.length;
      item["percent"] = percent;
    });
    res.json(desData);
  }
}
