// const quizzes = require('./quizzes.json')
const quizzesDao = require('../../daos/quizzes-dao')

const createQuiz = () => {

}

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (quizId) => {
    return quizzesDao.findQuizById(quizId)
}

const updateQuiz = () => {

}

const deleteQuiz = () => {

}

module.exports = {createQuiz, findAllQuizzes, findQuizById, updateQuiz, deleteQuiz}