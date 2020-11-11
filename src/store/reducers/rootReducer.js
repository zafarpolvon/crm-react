import {combineReducers} from 'redux'
import quizReducer from './students'


export default combineReducers({
  students: quizReducer,
  
})