import axios from 'axios'
const ROOT_URL = ' http://localhost:3000/api/v1/'

export function login (values) {
 //console.log(values,'------------values---------------')
  const request = axios.post(`${ROOT_URL}users/login`, values)
  return {
    type: 'LOGIN',
    payload: request
  }
}

export function signup (values) {
  const request = axios.post(`${ROOT_URL}users`, values)
  return {
    type: 'SIGNUP',
    payload: request
  }
}

export function show (values) {
  const request = axios.get(`${ROOT_URL}users/${values}`)
  return {
    type: 'SHOW',
    payload: request
  }
}
