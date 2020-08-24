import React from 'react';
import HeaderComponent from '../components/header';
import {Redirect} from 'react-router-dom';
import {connect} from  "react-redux"

import "../styles/login.css"



const mapStateToProps   =   (state)=>({

    passwordRessetingStatus: state.profile.passwordRessetingStatus,
    passwordRessetingError : state.profile.passwordRessetingError,

})

const mapDispatch = (dispatch)=>({
    
    ressetPassword:(token,password,historyRef)=> dispatch({type:"DO_NEW_PASSWORD",payload:{password,token},historyRef:historyRef})

})

class RessetPassword extends React.Component{

  state = {
    token:"",
    password:''
  }


  componentDidMount(){
      const {token} = this.props.match.params;
      this.setState({token:token});
  }

   validatePassword(){
       if(!this.state.password.trim()){
           this.setState({error:"Please enter a valid Password"})
       }else{
           this.setState({error:""},()=>{
              this.props.ressetPassword(this.state.token,this.state.password,this)
           })
       }
   }
   

 
  render(){

     if(!this.props.match.params.token){
        return <Redirect from="/resset-password" to="/" />
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
                            <h3 class="login-heading text-dark text-center mb-4">New Password!</h3>
                               {
                                 this.state.error?
                                 <div class="alert alert-danger" role="alert">
                                   {this.state.error}
                                 </div>:
                                     this.props.passwordRessetingError?
                                      <div class="alert alert-danger" role="alert">
                                          {this.props.passwordRessetingError}
                                      </div>
                                     :
                                     null
                               }

                                

                              <div class="form-label-group">
                                <input onChange={(e)=>this.setState({password:e.target.value})} type="password" id="inputEmail" class="form-control outlineInput" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Passsword</label>
                              </div>

                              <button disabled={this.props.passwordRessetingStatus=="started"} onClick={()=>this.validatePassword()} class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" >
                              {this.props.passwordRessetingStatus == "started"?
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


    



export default connect(mapStateToProps,mapDispatch)(RessetPassword);
