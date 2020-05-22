
import {combineReducers} from 'redux'
// import authReducer from './authReducer'
import authReducer from './Reducer/AuthReducer'
import deleteReducer from './Reducer/deleteReducer';




const rootReducer = combineReducers({
    auth:authReducer,
    dlt:deleteReducer

})

export default rootReducer;