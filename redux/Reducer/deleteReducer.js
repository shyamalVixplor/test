import { usersData } from "../../Data/DataSource";

const initState = {
    //delete States
    deleteLoading: false,
    deleteStatus: false,

    users:usersData

  };
  
  const deleteReducer = (state = initState, action) => {
    switch (action.type) {
      case "DELETE_LOADING":
        return {
          ...state,
          deleteLoading: true,
          deleteStatus: false
        };
      case "DELETE_SUCCESS":
        return {
          ...state,
          deleteLoading: false,
          deleteStatus: true,
          users:action.users
        };

      default:
        return state;
    }
  };
  export default deleteReducer;
  