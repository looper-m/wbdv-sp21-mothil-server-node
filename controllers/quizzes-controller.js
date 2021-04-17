const quizService = require('../services/quizzes/quizzes-service')

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        quizService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes))
    }

    const findQuizById = (req, res) => {
        quizService.findQuizById(req.params['quizId'])
            .then(quiz => res.json(quiz))
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:quizId", findQuizById)
}