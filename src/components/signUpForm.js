import React from 'react';
import {Link} from "react-router-dom"



const SignUp = (props)=>(
                   <>
                    <h5 class="card-title text-center">Sign up</h5>
                        
                        <form  class="form-signin">
                       
                        <div class="form-label-group">
                            <input onChange={(e)=>props.setfullName(e.target.value)}  type="text" id="fullName" class="form-control outlineInput" placeholder="Full name" required/>
                            <label for="fullName">Full name</label>
                        </div>


                        <div class="form-label-group">
                            <input onChange={(e)=>props.setuserName(e.target.value)}  type="text" id="userName" class="form-control outlineInput" placeholder="Username" required/>
                            <label for="userName">Username</label>
                        </div>

                        <div onChange={(e)=>props.setEmail(e.target.value)} class="form-label-group">
                            <input   type="text" id="inputEmail" class="form-control outlineInput" placeholder="Email address" required/>
                            <label for="inputEmail">Email address</label>
                        </div>


                        <div class="form-label-group">
                            <input onChange={(e)=>props.setCourse(e.target.value)}  type="text" id="course" class="form-control outlineInput" placeholder="Course" required/>
                            <label for="course">Course</label>
                        </div>

                        <div class="form-label-group">
                            <input onChange={(e)=>props.setAge(e.target.value)}  type="text" id="Age" class="form-control outlineInput" placeholder="username" required/>
                            <label for="Age">Age</label>
                        </div>

                         <div class="form-group">
                            <label for="gender">Select Gender</label>
                            <select onChange={(e)=>props.setGender(e.target.value)} class="form-control" id="gender">

                                    <option>Male</option>
                                    <option>Female</option>
                            
                            </select>
                        </div>

                        
                        <div class="form-label-group">
                            <input onChange={(e)=>props.setPassword(e.target.value)}  type="password" id="inputPassword" class="form-control outlineInput" placeholder="Password" required/>
                            <label for="inputPassword">Password</label>
                        </div>
                        
                        {
                            props.showErrSignUp?
                            <div class="alert alert-danger" role="alert">
                                {props.errMsgSignUp}
                            </div> : null
                        }
                        <p class="text-danger text-center text-bold">{props.error}</p>
                       
 
                        <button type="button" onClick={()=> props.SignUp()}   disabled={props.disabled} class="btn btn-lg btn-primary btn-block">
                           
                            
                           <span style={{marginLeft:5}}>
                               {props.disabled?
                                 <>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span class="sr-only mr-1">Loading...</span>
                                    <span style={{marginLeft:10}}>Signing Up .... </span>
                                 </>
                               :"Sign Up"}
                           </span>

                        </button>

                        <Link to="/login"  class="btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2" >
                                 
                                 Log In
                                
                                </Link>
                        <hr class="my-4"/>
                       
                      
                        </form>
                 </>
)

export default SignUp