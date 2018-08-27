export default (state = '', action) => {
  switch (action.type) {
  case 'LOGIN':
    if(action.payload)
      return state = action.payload.data || action.payload.message
    else return state = ''
  }
  return state
}