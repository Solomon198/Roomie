import auth from './auth';
import profile from './profile';
import {combineReducers} from 'redux';


const reducers = combineReducers({
     auth,
     profile,
})


export default reducers;