// const questions = require('./questions.json')
const questionsDao = require('../../daos/questions-dao')

const createQuestion = () => {

}

const createQuestionForQuiz = (quizId) => {

}

const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}

const findQuestionsForQuiz = (quizId) => {
    return questionsDao.findQuestionsForQuiz(quizId)
}

const findQuestionById = (questionId) => {
    return questionsDao.findQuestionById(questionId)
}

const updateQuestion = () => {

}

const deleteQuestion = () => {

}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}