import { combineReducers } from 'redux'
import SignUpReducer from './signUpReducer'
import ShowReducer from './showReducer'
import LoginReducer from './loginReducer'
import UpdateReducer from './updateReducer'

export default combineReducers({
  LoginReducer,
  SignUpReducer,
  ShowReducer,
  UpdateReducer
})