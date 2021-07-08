// Imports
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose");
const Routine = require("./backend/models/Routine")


// Custom morgan token for request bodies.
morgan.token("bodyContent", (req) => {
    return JSON.stringify(req.body);
});

// Init express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :bodyContent'));

// Data
// let exercisesData = [];

// Routes
app.get("/", async (req, res) => {
    const exerciseData = await Routine.find({});
    console.log(exerciseData);
    res.json(exerciseData);
});

app.post("/", (req, res) => {
    const body = req.body;
    const routineObj = new Routine(body);
    routineObj.save()
    .then(routine => res.json(routine))
    .catch(error => console.log(error));
});

app.get("/api/exercises", (req, res) => {
    res.json(exercisesData);
});

const PORT = process.env.PORT || 3001;

// Connect to Atlast MongoDB.
const { atlastUri } = require("./config");
const uri = atlastUri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        // exerciseData = await Routine.find({});
        // console.log(exerciseData);
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    }).catch(err => console.error(err));
