const questionsModel = require('../models/questions/questions-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.find({ _id: questionId})
const findQuestionsForQuiz = (quizId) => questionsModel.find({quizId})

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}