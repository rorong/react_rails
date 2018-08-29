export default (state = '', action) => {
  switch (action.type) {
  case 'SHOW':
    if(action.payload)
      return state = action.payload
    else return state = ''
  }
  return state
}