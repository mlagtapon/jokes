const JokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.index); //all jokes
    
    app.get('/api/jokes/random', JokeController.random); // one joke get by matching id

    app.get('/api/jokes/:id', JokeController.onejoke); // one joke get by matching id

    app.post('/api/jokes/new', JokeController.create); // create new joke

    app.put('/api/jokes/update/:id', JokeController.update); //update one joke get my matching id

    app.delete('/api/jokes/delete/:id', JokeController.destroy); // removes joke with matching id

}