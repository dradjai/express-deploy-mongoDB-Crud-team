import { MongoClient } from "mongodb";
import { mongoUri } from "../service-account.js";

const client = new MongoClient(mongoUri);

export const db = client.db('my-cars');

