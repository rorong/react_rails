import { combineReducers } from 'redux'
import SignUpReducer from './signUpReducer'
import LoginReducer from './loginReducer'

export default combineReducers({
  LoginReducer,
  SignUpReducer 
})