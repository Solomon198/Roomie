import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const mapstateToprops = (state)=>({
  user : state.profile.user,
})


const mapDispatchProps = (dispatch)=>({
  
  logOut:(ref)=>dispatch({type:"DO_USER_LOG_OUT",ref:ref}),

})


class HeaderComponent extends React.Component {
  

  render(){


  return (
    <nav className={`py-1 navbar navbar-expand-lg text-dark navbar-dark navbar-custom ${
        this.props.fixed ?"fixed-top":null
    }`}>

    <div className="container">
        
         <Link className="navbar-brand text-primary" to="#">
            <h1 class="logo-font">My Roomie</h1>
         </Link>

          <div class="mr-auto"></div>
         

             {
                this.props.user?
                <li onClick={()=>this.props.logOut(this.props.ref)} className="nav-item d-flex justify-content-center align-items-center mt-1 d-lg-none">
                      
                     <div class="nav-link">
                         <i class="fas fa-power-off text-primary   fa-lg pr-2"></i>  
                      </div>

              </li>:null
         }

        {
          this.props.user?
          <Link to="/profile" className="nav-link text-dark marginize d-lg-none">
          
             <div class=" text-transform-uppercase font-weight-bold align-items-center justify-content-center text-light d-flex defaultIcon">
                 <i class="fas fa-user-circle text-primary" style={{fontSize:25,marginTop:2}}></i>
             </div>
          
          </Link>:null
        }
     

         {
           !this.props.user?
             this.props.loginPage?
             <Link to="/signup" className="btn btn-primary d-lg-none" type="button" >
             Create Account
         </Link>:
             <Link to="/login" className="btn btn-primary d-lg-none" type="button" >
             Login
         </Link>
           :null
         }
              
      <div className="collapse navbar-collapse App" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">

       
      

           {
                this.props.user?
                <li onClick={()=>this.props.logOut()} className="nav-item d-flex justify-content-center align-items-center">
                      
                     <div class="nav-link">
                         <i class="fas fa-power-off text-primary   fa-lg pr-2"></i>  
                      </div>

              </li>:null
        }

      {
          this.props.user?
             <li className="nav-item">
                   <Link to="/profile" className="nav-link text-dark marginize d-sm-none d-lg-block">
                       
                          <div class=" text-transform-uppercase font-weight-bold align-items-center justify-content-center text-light d-flex defaultIcon">
                          <i class="fas fa-user-circle text-primary" style={{fontSize:25,marginTop:2}}></i>
                          </div>

                  </Link>
             </li>
            :null
        }

          
         


             
                  
         
          {
            this.props.user?
            <>
               {
                 !this.props.logout?
                 <li  className="nav-item d-lg-none">
                 <Link className="nav-link text-dark" to="/profile">Profile</Link>
               </li>:null
               }
             

            </>:
            <>
                <li  className="nav-item">
                <Link className="nav-link text-dark" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/login">Log In</Link>
              </li>
                </>
          }
        
       
        </ul>
      </div>
      
    </div>

  </nav>
)
        }

        }

export default connect(mapstateToprops,mapDispatchProps)(HeaderComponent)