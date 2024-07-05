import prisma from "../../prisma/prisma";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, type, city, phone, topic, text } = req.body;

    const data = await prisma.form.create({
      data: {
        name: name,
        type: type,
        city: city,
        phone: phone,
        topic: topic,
        text: text
      },
    });
    res.status(201).json(data);
  }
}