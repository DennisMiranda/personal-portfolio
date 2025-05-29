import emailjs from "@emailjs/nodejs";
import DB from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

const sendEmail = async (name, email, message) => {
  try {
    const res = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      {
        from_name: name,
        email,
        message,
      },
      {
        publicKey: process.env.PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY,
      }
    );

    console.log(res);

    return res.status;
  } catch (error) {
    console.log("sendEmail", error);

    return false;
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Received contact message:", { name, email, message });
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios." });
    }

    await DB.Query(
      "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING id,name,email,message,created_at",
      [name, email, message]
    );

    await sendEmail(name, email, message);

    res.status(201).json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el mensaje." });
  }
};
