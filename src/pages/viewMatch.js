import React from 'react';

import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import HeaderComponent from '../components/header'


const mapState = (state)=>({
    user : state.profile.user,
    savingProfile: state.profile.savingProfile,    
    matches : state.profile.matches,    

})

const mapdispatch = (dispatch)=>({
   getMatch:(userId)=>dispatch({type:"DO_FIND_MATCH",payload:userId})
})

class ViewMatch  extends React.Component{
  state = {

     

  }



  componentDidMount(){

    
    this.props.getMatch(this.props.user.userId)
    window.scrollTo(0, 0)
   
    
  }













  render(){

    if(!this.props.user){
        return <Redirect to="/login"/>
    }
    let max ;
    try{
         max = this.props.matches.reduce(function(prev, current) {
            console.log(current)
            return (prev.percentageMatch > current.percentageMatch) ? prev : current
        }) 
    }catch(e){
        console.log(e)
    }

    

    const {fullName,age,gender,course,email}  = this.props.user;
    const  otherUser = max;   
    

      if(!this.props.user){
          return(
          
                <Redirect from="/profile" to="/"/>
            
          )
      }
    
      let user = this.props.user;

      if(Object.keys(user).length < 1) return<></>
      const isUpdate = this.state.isUpdate;

      return (
        <body>

           <HeaderComponent ref={this}   fixed={true}/>

           <div style={{marginTop:100,backgroundColor:"#fefefe"}} className="container  card py-5">
           
           <h1 className="text-center text-info">Match Result</h1>

           <hr/>
           
           {
               this.props.matches.length > 0?
               <>
                      
                      <div class="row text-center py-5">

                            <div style={{borderRadius:10,borderWidth:1,borderColor:"lightgray",borderStyle:'solid'}} className="col-md-5 text-left mx-auto">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <i class="fas fa-user-circle text-danger" style={{fontSize:150,marginTop:2,marginRight:2}}></i>
                                    </div>
                                    <div className="col-md-7 pt-2 ">
                                            <h1>
                                            {fullName}
                                            </h1>
                                            <p className="mt-2">
                                            {email}
                                            </p>
                                            
                                            <p>
                                            {course}
                                            </p>
                                            <p>
                                                {age}
                                            </p>
                                            <p>
                                            {gender}
                                            </p>
                                    </div>
                                </div>
                                

                            </div>
                            <div style={{borderRadius:10,borderWidth:1,borderColor:"lightgray",borderStyle:'solid'}} className="col-md-5 text-left mx-auto">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <i class="fas fa-user-circle text-danger" style={{fontSize:150,marginTop:2,}}></i>
                                    </div>
                                    
                                    <div className="col-md-7 pt-2 ">
                                            <h1>
                                            {otherUser.user.fullName}
                                            </h1>
                                            <p className="mt-2">
                                            {otherUser.user.email}
                                            </p>
                                            
                                            <p>
                                            {otherUser.user.course}
                                            </p>
                                            <p>
                                                {otherUser.user.age}
                                            </p>
                                            <p>
                                            {otherUser.user.gender}
                                            </p>
                                    </div>
                                </div>
                                

                            </div>








                            </div>

                            <div style={{height:70}} class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width:otherUser.percentageMatch+"%"}} aria-valuenow={otherUser.percentageMatch + ""} aria-valuemin="0" aria-valuemax="100">
                                        <h1>
                                            {Math.round(otherUser.percentageMatch) + "%"}
                                        </h1>
                            </div>
                            </div>


               </>:
               <h1 className="text-center">No Search Result Found</h1>
           }

                 
           </div>


        </body>

      )

  }

  }

export default connect(mapState,mapdispatch)(ViewMatch);
