import React from 'react';
import HeaderComponent from '../components/header';
import "../styles/signup.css"

class SignUp extends React.Component{

  

  render(){

      return (
        <body>
           <HeaderComponent fixed={true}/>
           <div class="container-fluid signUpWrapper">
                <div class="row">
                <div class="col-lg-10 col-xl-9 mx-auto">
                    <div class="card card-signin flex-row my-5">
                    <div class="card-img-left d-none d-md-flex">
                        {/* <!-- Background image for card set in CSS! --> */}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Sign up</h5>
                        <form class="form-signin">

                        <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
                            <label for="inputEmail">Email address</label>
                        </div>
                        
                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                            <label for="inputPassword">Password</label>
                        </div>
                        
                        <div class="form-label-group">
                            <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
                            <label for="inputConfirmPassword">Confirm password</label>
                        </div>

                        <button class="btn btn-lg btn-primary btn-block">Sign Up</button>
                         <a class="d-block text-center mt-2 small" href="#">Sign In</a>
                        <hr class="my-4"/>
                        <button class="btn btn-lg btnGoogle btn-block"><i class="fab fa-google mr-2"></i> Sign up with Google</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </body>

      )

  }

  }



export default SignUp;
