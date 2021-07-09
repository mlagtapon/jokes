const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Set up is required!"],
        minlength: [10, "Set up must be atleast 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must be atleast 3 characters"]
    },
}, {timestamps: true}) // created at, updated at

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;