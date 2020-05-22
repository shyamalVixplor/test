const initState = {
    //Login States
    authLoading: false,
    authStatus: false,

  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOGIN_LOADING":
        return {
          ...state,
          authLoading: true,
          authStatus: false
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          authLoading: false,
          authStatus: true
        };

  
      case "LOGOUT":
        return initState;
      default:
        return state;
    }
  };
  export default authReducer;
  