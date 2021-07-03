// Imports
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

// Init express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Data
let exercisesData = [];

// Routes
app.get("/api/exercises", (req, res) => {
    res.json(exercisesData);
});

const PORT = process.env.PORT || 3001;

// Connect to Atlast MongoDB.
const { MongoClient } = require('mongodb');
const { atlastUri } = require("./config");
const uri = atlastUri;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const getAllInitalExercises = async () => {
    try {
        await client.connect();
        exercisesData = await client.db("gym_app").collection("exercises").find({}).toArray();

        // Start listening for HTTP requests.
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}
getAllInitalExercises().catch(err => console.error);