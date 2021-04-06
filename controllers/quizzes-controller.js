const quizService = require('../services/quizzes/quizzes-service')

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        res.send(quizService.findAllQuizzes())
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['quizId']
        res.json(quizService.findQuizById(quizId))
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:quizId", findQuizById)
}