const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bisex.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();
    const productsCollection = client.db("Fibix").collection("products");
    console.log("DB Connected!!!!");
  } finally {
  }
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Fibix Is Running!");
});

app.listen(port, () => {
  console.log(`Fibix Is Running on port ${port}!`);
});
