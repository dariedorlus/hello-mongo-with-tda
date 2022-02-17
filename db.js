import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';

let client = null;

export const dbClient = async () => {

    if(!client) {
        client = new MongoClient(url)
        await client.connect()
    }

    return client;
}