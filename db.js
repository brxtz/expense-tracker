import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://admin-user1:Stupid-password321@web-app-2-final-project.93ouvze.mongodb.net/?retryWrites=true&w=majority&appName=web-app-2-final-project-database";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();

export const db = client.db("web-app-2-final-project");
