
export default (state = '', action) => {
  switch (action.type) {
  case 'SIGNUP':
    if(action.payload)
      return state = action.payload
    else return state = ''
  }
  return state
}