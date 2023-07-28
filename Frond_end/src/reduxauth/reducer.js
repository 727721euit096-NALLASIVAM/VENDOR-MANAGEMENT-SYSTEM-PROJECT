const initialState = {
    username: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          username: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;