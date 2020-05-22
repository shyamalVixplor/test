import AsyncStorage from "@react-native-community/async-storage";

export const signin = (credential)=>{
        return (dispatch) =>{
            dispatch({type:'LOGIN_LOADING'});
            if(credential){
                const userToken=AsyncStorage.setItem('userToken',credential.username)
                dispatch({
                    type:'LOGIN_SUCCESS'
                  });
            }
    }
}


export const logOut = ()=>{
    return (dispatch) =>{
        AsyncStorage.removeItem('userToken');
          dispatch({
            type: 'LOGOUT',
          });

    }
}