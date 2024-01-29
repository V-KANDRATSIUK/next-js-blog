import { MongoClient } from 'mongodb'

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.gzf9cug.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function connectDatabase() {
    return MongoClient.connect(connectionString);
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (
            !email ||
            !email.includes('@') ||
            !message ||
            !name ||
            message.trim() === ''
        ) {
            res.status(422).json(
                { message: 'Wrong Input' }
            );
            return;
        }
        const newMessage = {
            email, name, message
        }
        let client;
        try {
            client = await connectDatabase()
        } catch (e) {
            res.status(500).json({ message: 'ERROR DB CONNECTION' });
            return;
        }
        let result;
        try {
            const db = client.db('events');
            result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;

        } catch (e) {
            res.status(500).json({ message: 'ERROR DB CONNECTION' });
            return;
        }

        res.status(201).json({ message: 'Success', newMessage });
    }
}