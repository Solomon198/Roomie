var intialState = {
    user:null,
    uploading:false,
    savingProfile:"uninitiated",
    error:"",
    passwordRessetStatus:"uninitiated",
    passwordRessetError:"",
    passwordRessetSuccess:"",
    passwordRessetingError:"",
    passwordRessetingStatus:"",

    bookedStar:null,
    viewdNotification:null,

    requestVideoError:"",
    requestVideoStatus:"",

    savingErr:"",

    matches:[],
    findingErr:""
   
}
export default function profileReducer(
    state=intialState,action){

    switch(action.type){

       
        case "FIND_SUCCESS":{
            return {
                ...state,matches:action.payload
            }
            break;
        }

        case "FIND_FAILED":{
            return {
                ...state,findingErr:action.payload
            };
            break;
        }
    
      
        case "LOG_OUT":{
             return intialState;
        }

        case "DO_SAVE_SUCCESS":{
            return {
                ...state,user:action.payload
            }
            break;
        }

        case "DO_SAVE_FAILED":{
            return {
                ...state,savingErr:action.payload
            }
            break;
        }

        case "RESET":{
            return {
                ...state,savingErr:""
            }
            break;
        }

        

        
        

        case "NEW_PASSWORD_STARTED":{
            return {...state,passwordRessetingStatus:"started"}
            break;
        }

        case "NEW_PASSWORD_FAILED":{
            return {...state,passwordRessetingStatus:"failed",passwordRessetingError:action.payload}
            break;
        }

        case "NEW_PASSWORD_SUCCESS":{
            return {...state,passwordRessetStatus:"",passwordRessetingError:""}
            break;
        }
    

        case "SIGN_UP_USER_SUCCESS":{
            return {...state,user:action.payload};
            break;
        }

        case "LOGIN_SUCCESS":{
            return  {...state,user:action.payload}
            break;
        }

        default:{
            return state;
        }
    }
}