

var intialState = {
    error:"",
    signUpStatus:"unitiated",
    loginStatus:"",
    loginError:"",
}
export default function authReducer(
    state= intialState,action){

    switch(action.type){

        case "LOGIN_STARTED":{
            return {...state,loginStatus:"started"}
            break;
        }

        case "LOGIN_FAILED":{
            return {...state,loginStatus:'failed',loginError:action.payload}
            break;
        }

        case "LOGIN_SUCCESS":{
            return  {...state,loginStatus:"success"}
            break;
        }
        

        case "ERROR_SIGNING_UP":{
            return {...state,error:action.payload};
            break;
        }

        case "SIGN_UP_USER_STARTED":{
            return {...state,signUpStatus:"started"};
            break;
        }

        case "SIGN_UP_USER_FAILED":{
            return {...state,signUpStatus:"failed",error:action.payload};
            break;
        }

        
        case "SIGN_UP_USER_SUCCESS":{
            return {...state,signUpStatus:"success",error:""};
            break;
        }

        default:{
            return state;
        }
    }
}