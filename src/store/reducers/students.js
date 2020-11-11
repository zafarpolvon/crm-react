import {
  FETCH_QUIZES_ERROR, 
  FETCH_QUIZES_START, 
  QUIZ_RETRY

} from '../actions/actionTypes'
const initialState = {
  quizes: [],
  loading: false,
  error: null,
}
export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state, loading: true
      }
    // case FETCH_QUIZES_SUCCESS:
    //   return {
    //     ...state, loading: false, quizes: action.quizes
    //   }
    case FETCH_QUIZES_ERROR:
      return {
        ...state, loading: false
      }
    case QUIZ_RETRY:
      return {
        ...state,
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        results: {}
      }  
    default: 
      return state
  }
}