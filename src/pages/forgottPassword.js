import React from 'react';
import HeaderComponent from '../components/header';
import {Redirect} from 'react-router-dom';
import {connect} from  "react-redux"

import "../styles/login.css"
import { validateEmail } from '../utilities/utils';



const mapStateToProps   =   (state)=>({

  passwordRessetStatus : state.profile.passwordRessetStatus,
  user : state.profile.user,
  passwordRessetError:state.profile.passwordRessetError,
  passwordRessetSuccess:state.profile.passwordRessetSuccess

})

const mapDispatch = (dispatch)=>({
     sendPasswordResset : (payload,historyRef)=> dispatch({type:"DO_SEND_PASSWORD_RESSET",payload:payload,historyRef:historyRef})
})

class ForgottPassword extends React.Component{

  state = {
    email:"",
    password:"",
    error:""
  }

   validateEmail(){
       if(!validateEmail(this.state.email)){
           this.setState({error:"Please enter a valid email address"})
       }else{
           this.setState({error:""},()=>{
               this.props.sendPasswordResset({email:this.state.email},this)
           })
       }
   }

   componentDidMount(){
     
   }
   

 
  render(){

     if(this.props.user){
        return <Redirect from="/forgotpassword" to="/" />
     }

      return (
        <body>
           <HeaderComponent fixed={true}/>
           <div class="container-fluid card">
                <div class="row no-gutter">
                  <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                  <div class="col-md-8 col-lg-6">
                    <div class="login d-flex align-items-center py-5">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-9 col-lg-8 mx-auto">
                            <h3 class="login-heading text-dark text-center mb-4">Lets Recover your password!</h3>
                               {
                                 this.state.error?
                                 <div class="alert alert-danger" role="alert">
                                   {this.state.error}
                                 </div>:
                                     this.props.passwordRessetError?
                                      <div class="alert alert-danger" role="alert">
                                          {this.props.passwordRessetError}
                                      </div>
                                     :
                                     null
                               }

                                 {
                                     this.props.passwordRessetSuccess?
                                        <div class="alert alert-success" role="alert">
                                               {this.props.passwordRessetSuccess}
                                        </div>
                                        :null
                                 }

                              <div class="form-label-group">
                                <input onChange={(e)=>this.setState({email:e.target.value})} type="email" id="inputEmail" class="form-control outlineInput" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email address</label>
                              </div>

                              <button onClick={()=>this.validateEmail()} class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" >
                              {this.props.passwordRessetStatus == "started"?
                                 <>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span class="sr-only mr-1">Loading...</span>
                                    <span style={{marginLeft:10}}>Resseting password .... </span>
                                 </>
                               :"Resset password"}
                                
                                </button>
                             
                 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </body>

      )

  }

  }


    



export default connect(mapStateToProps,mapDispatch)(ForgottPassword);
