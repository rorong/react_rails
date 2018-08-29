import { combineReducers } from 'redux'
import SignUpReducer from './signUpReducer'
import ShowReducer from './showReducer'
import LoginReducer from './loginReducer'

export default combineReducers({
  LoginReducer,
  SignUpReducer,
  ShowReducer
})