import { MongoClient } from "mongodb";
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !EMAIL_REGEX.test(email) ||
      name.trim() === "" ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid input",
      });
      return;
    }
    const newMessage = {
      name,
      email,
      message,
    };
    let client;
    try {
      client = new MongoClient(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.5n9mkn5.mongodb.net/?retryWrites=true&w=majority&appName=Next-js`
      );
      await client.connect();
    } catch (error) {
      res.status(500).json({ message: "Cannot connect to database" });
      return;
    }
    try {
      const result = await client
        .db(process.env.mongodb_database)
        .collection("messages")
        .insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing new message failed" });
    }
    client.close();
    return res.status(201).json({
      message: "Successfully stored message",
      contactContent: newMessage,
    });
  }
};
export default handler;
