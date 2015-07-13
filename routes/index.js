var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var autor = require('../autor/autor');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/autor/autor',autor.autor);

module.exports = router;
