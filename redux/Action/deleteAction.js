
import { usersData } from "../../Data/DataSource";

export const deleteUser = (id)=>{
        return (dispatch) =>{
            dispatch({type:'DELETE_LOADING'});
            if(id){
              const users=usersData.filter((users)=>{
                return users.id !=id;
              })
                dispatch({
                    type:'DELETE_SUCCESS',
                    users:users
                  });
            }
    }
}
