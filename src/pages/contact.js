import React from 'react';

import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import HeaderComponent from '../components/header'


const mapState = (state)=>({
    user : state.profile.user,
    savingProfile: state.profile.savingProfile,        

})

const mapdispatch = (dispatch)=>({
    updateUserProfile : (obj,historyRef,deleteUrls)=> dispatch({type:"DO_UPDATE_PROFILE",payload:obj,historyRef,user:"star",deleteUrls:deleteUrls}),
    logOut:()=>dispatch({type:"DO_USER_LOG_OUT"}),
    getAccountInfo:(userId)=> dispatch({type:"DO_GET_ACCOUNT_INFO",payload:userId})
})

class Profile extends React.Component{
  state = {

     

  }



  componentDidMount(){

    console.log(this.props.user)

    window.scrollTo(0, 0)

    
    
  }













  render(){

      if(!this.props.user){
          return(
          
                <Redirect  to="/login"/>
            
          )
      }
    
      let user = this.props.user;

      if(Object.keys(user).length < 1) return<></>
      const isUpdate = this.state.isUpdate;

      return (
        <body>

           <HeaderComponent ref={this}   fixed={true}/>

           <div style={{marginTop:100,backgroundColor:"#fefefe"}} className="container  card py-5">

           
           <div class="row">

               <div className="col-sm-12 col-md-6 text-center">

                    <i class="fas fa-user-circle text-danger" style={{fontSize:200,marginTop:2}}></i>

               </div>
               <div className="col-sm-12 col-md-6 mt-4 ">
                     <h1>
                       {this.props.user.fullName}
                     </h1>
                     <p className="mt-2">
                       {this.props.user.email}
                     </p>
                     <p>
                       {this.props.user.userName}
                     </p>
                     <p>
                       {this.props.user.course}
                     </p>
                     <p>
                        {this.props.user.age}
                    </p>
                    <p>
                      {this.props.user.gender}
                    </p>

                    <div className="row mt-4 text-center text-light">
                         <div class="col-sm-4 col-md-3 p-2 card mx-2 bg-danger actions">
                               <h6>Contact Us</h6>
                               <p className="sub">24hrs support team</p>
                         </div>
                         <Link to="/view-match" class="text-white col-sm-4 col-md-3 p-2 card mx-2 bg-info actions">
                               <h6>View Match</h6>
                               <p className="sub">My roomate</p>
                         </Link>
                         <Link to="/question" class="text-white col-sm-4 col-md-3 p-2 card mx-2 bg-dark actions">
                               <h6>Find Roomate</h6>
                               <p className="sub">Find a roomate</p>
                         </Link>
                    </div>
                     
               </div>

           </div>

                 
           </div>


        </body>

      )

  }

  }

export default connect(mapState,mapdispatch)(Profile);
