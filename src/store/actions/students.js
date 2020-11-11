import axios from '../../axios/axios-crm'
import {
  FETCH_QUIZES_ERROR, 
  FETCH_QUIZES_START, 
  QUIZ_RETRY
} from './actionTypes'

export function fetchQuizes() {
  return async dispatch => {
    dispatch(fetchQuizesStart())
    try {
      const response = await axios.get('https://crm-react-school.firebaseio.com/users/students.json')
      const quizes = []
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        })
      })
      
    } catch(e) {
      dispatch(fetchQuizesError(e))
    }
  }
}
// export function fetchQuizById(quizId) {
//   return async dispatch => {
//     dispatch(fetchQuizesStart())

//     try {
//       const response = await axios.get(`https://crm-react-school.firebaseio.com/users/students/${quizid}.json`)
//       const quiz = response.data
//       dispatch(fetchQuizSuccess(quiz))
//     } catch (e) {
//       dispatch(fetchQuizesError(e))
//     }
//   }
// }
export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START
  }
}
export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e
  }
}
export function retryQuiz() {
  return {
    type: QUIZ_RETRY
  }
}