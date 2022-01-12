import { saveQuestion, saveQuestionAnswer } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions (questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion (question){
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleAddQuestion( optionOne, optionTwo ){
    return (dispatch, getstate) => {
        const { authedUser } = getstate()

        dispatch(showLoading)

        return saveQuestion({
            optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading))
        .catch(() => {
            alert("Error Adding Question!");
        })
        
    }
}

function addQuestionAnswer({authedUser, qid, answer}){
    return {
        type:SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
} 

export function handleSaveQuestionAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			qid,
			authedUser,
            answer
		})
        .then(() =>
            dispatch(addQuestionAnswer({
                    qid,
                    authedUser,
                    answer,
                })
            )
        )
        .then(() => dispatch(hideLoading()))
        .catch(() => {
            alert("Error Adding Answer!");
        })
	};
}