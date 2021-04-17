const questionService = require('../services/questions/questions-service')

module.exports = (app) => {
    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions))
    }

    const findQuestionsForQuiz = (req, res) => {
        questionService.findQuestionsForQuiz(req.params['quizId'])
            .then(questions => res.json(questions))
    }

    const findQuestionById = (req, res) => {
        questionService.findQuestionById(req.params['questionId'])
            .then(question => res.json(question))
    }

    app.get("/api/questions", findAllQuestions)
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz)
    app.get("/api/questions/:questionId", findQuestionById)
}