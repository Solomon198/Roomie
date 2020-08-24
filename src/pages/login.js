import React from 'react';
import HeaderComponent from '../components/header';
import {Redirect,Link} from 'react-router-dom';
import {connect} from  "react-redux"

import "../styles/login.css"
import { validateEmail } from '../utilities/utils';



const mapStateToProps   =   (state)=>({
  loginStatus:state.auth.loginStatus,
  loginError:state.auth.loginError
})

const mapDispatch = (dispatch)=>({
     login : (user,historyRef)=> dispatch({type:"DO_LOGIN",payload:user,historyRef:historyRef})
})

class Login extends React.Component{

  state = {
    email:"",
    password:"",
    error:""
  }


  login(){
    const {email,password} = this.state;

    if(!email.trim()){
       this.setState({error:"Please enter an email address"});

    }else if(!validateEmail(email)){
      this.setState({error:"Please enter a valid email address"})
    }
    else if(!password.trim()){
      this.setState({error:"Please enter password"})
    }else{
       this.setState({error:""},()=>{
          this.props.login({email:email,password:password,isSocial:false},this)
       })
    }
  }
   
   
 
 
  render(){

    if(this.props.user){
      return <Redirect from="/login" to="/" />
   }

      return (
           <div class="container-fluid card">
                <div class="row no-gutter">
                  <div class="col-md-8 col-lg-6">
                    <div class="login d-flex align-items-center py-5">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-9 col-lg-8 mx-auto">
                            <h3 class="login-heading text-dark text-center mb-4">Sign In</h3>
                               {
                                 this.state.error?
                                 <div class="alert alert-danger" role="alert">
                                   {this.state.error}
                                 </div>:
                                     this.props.loginError?
                                      <div class="alert alert-danger" role="alert">
                                          {this.props.loginError}
                                      </div>
                                     :
                                     null
                               }

                              <div class="form-label-group">
                                <input onChange={(e)=>this.setState({email:e.target.value})} type="email" id="inputEmail" class="form-control outlineInput" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email address</label>
                              </div>

                              <div class="form-label-group">
                                <input onChange={(e)=>this.setState({password:e.target.value})} type="password" id="inputPassword" class="form-control outlineInput" placeholder="Password" required/>
                                <label for="inputPassword">Password</label>
                              </div>

                              <button onClick={()=>this.login()} class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" >
                              {this.props.loginStatus == "started"?
                                 <>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span class="sr-only mr-1">Loading...</span>
                                    <span style={{marginLeft:10}}>Signing in .... </span>
                                 </>
                               :"Sign In"}
                                
                                </button>
                                <Link to="/signup"  class="btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2" >
                                 
                                 Sign Up
                                
                                </Link>

                              <div class="text-center my-3">
                                <Link class="small" to="forgotpassword">Forgot password?</Link>
                              </div>

                              
                               
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>

                </div>
              </div>

      )

  }

  }


    



export default connect(mapStateToProps,mapDispatch)(Login);
