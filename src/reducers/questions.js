const RECEIVE_QUESTIONS = 'RECEIVE_QUESTION'
const ADD_QUESTION = 'ADD_QUESTION'
const ADD_ANSWER = 'ADD_ANSWER'

export default function questions(questions = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...questions,
                ...action.questions
            }
        case ADD_QUESTION: {
            const { question } = action
            return {
                ...questions,
                [question.id]: question
            }
        }
        case ADD_ANSWER: 
            const { authedUser, qid, answer } = action
            const questionOptions = questions[qid][answer]
            return {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questionOptions,
                       votes: [...questionOptions.votes, authedUser],
                    }
                }
            }

        default:
            return questions
    }
}