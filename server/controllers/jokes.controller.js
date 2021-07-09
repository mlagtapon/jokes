const Joke = require('../models/jokes.model'),
    mongoose = require('mongoose');

module.exports = {
    index: (req, res) => {
        Joke.find()
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    create: (req, res) => {
        Joke.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    onejoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then(joke => {
                res.json({results: joke})
            })
            .catch(err => res.json(err.errors))
    },
    update: (req, res) => {
        Joke.findOneAndUpdate({_id: req.params.id}, req.body, {useFindAndModify:true, runValidators:true})
        .then(joke => {
            res.redirect(`/api/jokes/${widget.id}`)
            res.json({results: joke})
        })
        .catch(err => res.json(err.errors))
    },
    destroy : (req, res) => {
        Joke.deleteOne({_id:req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json(err.errors))
    },

    random: (req, res) => {
        Joke.find()
        .then((data) => res.json({ result: data[Math.floor(Math.random()*data.length)] }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
}