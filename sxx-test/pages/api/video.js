import prisma from "../../prisma/prisma";

export default async function handler(req, res) {
  let mydata = await prisma.video.findMany();
  let data = [];
  data.push(mydata[mydata.length - 1]);
  let lastId = data[0].id;
  let newViews = data[0].views + 1;
  if (req.method === "POST") {
    await prisma.video.update({
      where: {
        id: `${lastId}`,
      },
      data: {
        views: newViews,
      },
    });
    res.json({ success: "true" });
  } else {
    res.json(data);
  }
}
