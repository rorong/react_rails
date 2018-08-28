export default (state = '', action) => {
  switch (action.type) {
  case 'LOGIN':
    if(action.payload){
    	let obj = {}
    	if(action.payload.data) {
    		obj.data=action.payload.data
    	}
    	else{
    		obj.err =action.payload.message
    	}
      return state = obj
  }
    else return state = ''
  }
  return state
}