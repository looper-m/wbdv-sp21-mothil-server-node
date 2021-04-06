const questions = require('./questions.json')

const createQuestion = () => {

}

const createQuestionForQuiz = (quizId) => {

}

const findAllQuestions = () => {
    return questions
}

const findQuestionsForQuiz = (quizId) => {
    return questions.filter(question => question.quizId === quizId)
}

const findQuestionById = (questionId) => {
    return questions.find(question => question._id === questionId)
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