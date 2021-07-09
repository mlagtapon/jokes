const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_dbc', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You are now in the mainframe. . ."))
    .catch((err) => console.log("Not working!", err))