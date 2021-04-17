const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')
const scoreQuiz = (questions) => {
    let numCorrectQuestions = 0
    questions.forEach(question => question.answer === question.correct ?
        numCorrectQuestions++ : numCorrectQuestions)
    return 100 * numCorrectQuestions / questions.length
}
const findAttemptsForQuiz = (quizId) =>
    quizAttemptsModel.find({quiz: quizId}).populate('quiz', 'title _id')
const createAttempt = (quizId, attempt) =>
    quizAttemptsModel.create({quiz: quizId, sys_creation_date: Date.now(), answers: attempt, score: scoreQuiz(attempt)})
const getBestAttemptForQuiz = (quizId) =>
    quizAttemptsModel.find({quiz: quizId}).sort({score: -1}).limit(1)

module.exports = {createAttempt, findAttemptsForQuiz, getBestAttemptForQuiz}