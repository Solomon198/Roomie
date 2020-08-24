import {all,call,takeEvery,takeLatest,put} from 'redux-saga/effects';
import {urlPrefix} from './manageActiveUrl'
import {sendAxiosPostRequest} from "../utilities/utils"

 



const watchSignUp = function*watchSignUp(){
       yield takeEvery("DO_SIGN_UP",function*(action){
         
               yield put({type:"SIGN_UP_USER_STARTED"});
            
               try{
                  let url = urlPrefix + "/signup/"
                 


                  const signup = yield call(sendAxiosPostRequest.bind(this,url,action.payload,""));
                  const {status,data,message} = signup.data;
   
                  if(status === "Success"){

                       yield put({type:"SIGN_UP_USER_SUCCESS",payload:data});
                       action.historyRef.props.history.push("/profile")
   
                  }else{
                      
                       yield put({type:"SIGN_UP_USER_FAILED",payload:message})
                  }
   
               }catch(e){
                    console.log(e)
                       yield put({type:"SIGN_UP_USER_FAILED",payload:e.message})
               }
              
           
       })
}


const watchLogOut = function* watchLogOut(){
     yield takeEvery("DO_USER_LOG_OUT",function*(action){
          let confirmLogout = window.confirm("Are you sure you want to logout ?")
          if(confirmLogout){
               yield put({type:"LOG_OUT"});
          }
     })
}








const watchSaveMatchInfo = function* watchSaveMatchInfo(){
     yield takeEvery("DO_SAVE_MATCH_INFO",function*(action){
          yield put({type:"DO_SAVE_STARTED"});
          try{
 
               
               let url = urlPrefix + "/user/saveInfo";

               const login = yield call(sendAxiosPostRequest.bind(this,url,action.payload,""));
               const {message,data,status} = login.data;
               if(status == "Success"){
                    yield put({type:"DO_SAVE_SUCCESS",payload:data});
                    action.historyRef.props.history.push("/view-match")
               }else{
                    yield put({type:"DO_SAVE_FAILED",payload:message});
               }

          }catch(e){
               yield put({type:"DO_SAVE_FAILED",payload:e.message});
          }
     })
}


const watchFindMatch = function* watchFindMatch(){
     yield takeEvery("DO_FIND_MATCH",function*(action){
          yield put({type:"DO_FIND_STARTED"});
          try{
 
               
               let url = urlPrefix + "/user/find-match";

               const login = yield call(sendAxiosPostRequest.bind(this,url,{userId:action.payload},""));
               const {message,data,status} = login.data;
               if(status == "Success"){
                    yield put({type:"FIND_SUCCESS",payload:data});
               }else{
                    yield put({type:"FIND_FAILED",payload:message});
               }

          }catch(e){
               yield put({type:"FIND_FAILED",payload:e.message});
          }
     })
}




const watchReset = function*  watchReset(){
      yield takeEvery("DO_RESET",function*(action){
             yield put({type:"RESET"});
      })
}




const watchLogin = function* watchLogin(){
     yield takeEvery("DO_LOGIN",function*(action){
          yield put({type:"LOGIN_STARTED"});
          try{
 
               
               let url = urlPrefix + "/user/login";

               const login = yield call(sendAxiosPostRequest.bind(this,url,action.payload,""));
               const {message,data,status} = login.data;
               if(status == "Success"){
                    yield put({type:"LOGIN_SUCCESS",payload:data});
                    action.historyRef.props.history.push("/profile")
               }else{
                    yield put({type:"LOGIN_FAILED",payload:message});
               }

          }catch(e){
               yield put({type:"LOGIN_FAILED",payload:e.message});
          }
     })
}

const watchPasswordResset = function* watchPasswordResset(){
      yield takeEvery("DO_SEND_PASSWORD_RESSET",function*(action){
           try{
               let url = urlPrefix + "/users/ressetPassword"
               yield put({type:"SEND_PASSWORD_RESSET_STARTED"});
               const sendResset = yield call(sendAxiosPostRequest.bind(this,url,action.payload,""));
               const {status,message,data} = sendResset.data;
               if(status == "Success"){
                    
                    yield put({type:"SEND_PASSWORD_RESSET_SUCCESS",payload:data});

               }else{
                    yield put({type:"SEND_PASSWORD_RESSET_FAILED",payload:message});
               }
           }catch(e){
               yield put({type:"SEND_PASSWORD_RESSET_FAILED",payload:e.message});
           }
      })
}




// ROOT SAGA

export default function * rootSaga(){
     yield all([
          watchSaveMatchInfo(),
          watchSignUp(),
          watchLogOut(),
          watchLogin(),
          watchPasswordResset(),
          watchReset(),
          watchFindMatch(),
     ]);
}