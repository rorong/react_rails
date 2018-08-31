import axios from 'axios'
const ROOT_URL = ' http://localhost:3000/api/v1/'

export function login (values) {
  const request = axios.post(`${ROOT_URL}users/login`, values,Headers)
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

export function show (values,body) {
  const request = axios.put(`${ROOT_URL}users/${values}`,body)
  return {
    type: 'SHOW',
    payload: request
  }
}
export function update (values,token) {
  const request = axios({
    method: 'put',
    url: `${ROOT_URL}/users/update_user`,
    headers: {'X-APISECRET' : token},
    data: values
  })
  return {
    type: 'UPDATE',
    payload: request
  }
}

