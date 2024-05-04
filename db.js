// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://admin-user1:Stupid-password321@web-app-2-final-project.93ouvze.mongodb.net/?retryWrites=true&w=majority&appName=web-app-2-final-project-database";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// export const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


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

var db;


// Use this to connect to the database.
export function connect() {
  
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();
    // Send a ping to confirm a successful connection
    db = client.db("web-app-2-final-project")
    db.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}


// collection is the name of the collection you want to create (as a string)
export function create_collection(collection) {
  db.createCollection(collection, function(err, res) {
    if (err) throw err;
  }).then( items => {
    console.log("Collection created!");
  });
}


// You can insert an expense object into the database using this, expense_collection_name should
// be the same as the collection string passed in the above function
export function insert_expense(expense_collection_name, expense) {
  db.collection(expense_collection_name).insertOne(expense, function(err, res) {
    if (err) throw err;
  }).then( items => {
    console.log("expense inserted")
  });
}

// you can delete an expense by its id
export function delete_expense_by_id(expense_collection_name, idno) {
  db.collection(expense_collection_name).deleteOne({id: idno}, function(err, res) {
    if (err) throw err;
  }).then( items => {
    console.log("expense deleted")
  })
}

// finds an expense by an id and returns as an array (in case there are multiple matches for some reason)
export function find_expense_by_id(expense_collection_name, idno) {
  db.collection(expense_collection_name).find({id: idno}).toArray(function(err, res) {
    if(err) throw err;
  }).then( items => {
    return res;
    console.log("expense found")
  })
}


