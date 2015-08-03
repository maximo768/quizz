var models = require('../models/models.js'); 

<<<<<<< HEAD
// GET /quizes/question
exports.question = function(req, res) {
  models.Quiz.findAll().then(function(quiz) {
    res.render('quizes/question', { pregunta: quiz[0].pregunta});
  })
=======
exports.question = function (req,res) {
	models.Quiz.findAll().success(function(quiz){
		res.render('quizes/question', pregunta: quiz[0].pregunta})
	})
>>>>>>> 5b103fbe3a707433ec5c67ea09e0bc8c19d0da0c
};

// GET /quizes/answer
exports.answer = function(req, res) {
  models.Quiz.findAll().then(function(quiz) {
    if (req.query.respuesta === quiz[0].respuesta) {
      res.render('quizes/answer', { respuesta: 'Correcto' });
    } else {
      res.render('quizes/answer', { respuesta: 'Incorrecto'});
    }
  })
};
