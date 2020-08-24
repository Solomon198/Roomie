import React from 'react';
import HeaderComponent from '../components/header';
import {Redirect,Switch,Route,Link} from 'react-router-dom'
import "../styles/signup.css"
import { connect } from 'react-redux'
;
import SignUpForm from '../components/signUpForm';

import { validateEmail } from '../utilities/utils';

const mapStateToprops = (state)=>({
    //prop listeners
    error: state.auth.error,
    signUpStatus : state.auth.signUpStatus,
    user    : state.profile.user,
    selectedCateogries : state.profile.selectedCateogries,
    savingProfile : state.profile.savingProfile,
    uploading: state.profile.uploading,

 
   })
 
 const mapDispatchStateToProps = (dispatch)=>({
    //action dispatchers
    postError: (error)=> dispatch({type:"DO_ERROR_SIGNING_UP",payload:error,user:"user"}),
    signUp   : (userInfo,historyRef) => dispatch({type:"DO_SIGN_UP",payload:userInfo,historyRef,user:"user"}),
    saveSelectedCategories : (selected) => dispatch({type:"DO_SAVE_SELECTED_CATEGORY",payload:selected,user:"user"}),
    updateUserProfile : (obj,historyRef)=> dispatch({type:"DO_UPDATE_PROFILE",payload:obj,historyRef,user:"user"}),
 })

class SignUp extends React.Component{

       state = {
           showErr:false,
           validationMessage:"",
           showErr1:false,
           showErrSignUp:false,
           errMsgSignUp:"",
          
            fullName:"",
            userName:"",
            email:"", 
            password:"",
            gender:"Male",
            age:"",
            course :""
       }


       setErrSignUp(msg){
           this.setState({
               showErrSignUp:true,
               errMsgSignUp:msg          
             })
       }
      
       
      
    


       _signUp(){

           let {fullName,userName,email,password,gender,course,age} = this.state;

           
           if(!fullName){
               this.setErrSignUp("Please enter first name.")
           }
           else if(!userName){
               this.setErrSignUp("Please enter user name.")    
           }else if(!email){
          
            this.setErrSignUp("Please enter email.")
          
           } else if(!validateEmail(email)){
               this.setErrSignUp("Invalid email formatt please check email formatt!.")
            }else if(!course){
                this.setErrSignUp("Please a course name.")
            }else if(isNaN(parseInt(age))){
            
                    this.setErrSignUp("Please enter a valid age.")
                
            }else if(!gender){
                this.setErrSignUp("Please select a gender.")
            }
            else if(!password){
             
              this.setErrSignUp("Please enter password.")
 
           }else{

                let information = {
                    password:password,
                    email:email,
                    fullName:fullName,
                    userName:userName,
                    age : age,
                    course:course,
                    gender:gender
                }

                this.props.signUp(information,this);

           }
           

       }

    
   
      

      componentDidMount(){

       
      }

      setErr(msg){
          this.setState({
              showErr1:true,
              validationMessage:msg
          })
        console.log("welcome to hthe page")
      }






  render(){
    if(this.props.user){
        return <Redirect from="/forgotpassword" to="/" />
     }
    return (
        <body>
           <div class="container-fluid ">
                <div class="row">
                <div class="col-lg-10 col-xl-9 mx-auto signUpHeight">
                    <div class="card card-signin flex-row my-5 ">
                    <div class="card-img-left2 d-none d-md-flex">
                        {/* <!-- Background image for card set in CSS! --> */}
                    </div>
                    <div class="card-body card-container">

                         
                    <Switch>

                             <Route exact path="/signup">
                                    <SignUpForm  
                                        setPassword={(password)=>this.setState({password})}
                                        setEmail={(email)=>this.setState({email})}
                                        setfullName={(fullName)=>this.setState({fullName})}
                                        setuserName={(userName)=>this.setState({userName})}
                                        setAge={(age)=>this.setState({age})}
                                        setCourse={(course)=>this.setState({course})}
                                        setGender={(gender)=>this.setState({gender})}

                                        showErrSignUp={this.state.showErrSignUp}
                                        errMsgSignUp={this.state.errMsgSignUp}
                                        SignUp={()=>this._signUp()}
                                        user={this.props.user}
                                        responseGoogle={()=>null}
                                        error = {this.props.error}

                                    /> 
                            </Route>
    
                    </Switch>
                           
                            
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </body>

      )

  }

  }



export default connect(mapStateToprops,mapDispatchStateToProps)(SignUp);
