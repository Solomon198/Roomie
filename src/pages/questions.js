import React from 'react';

import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import HeaderComponent from '../components/header'


const mapState = (state)=>({
    user : state.profile.user,
    savingProfile: state.profile.savingProfile,        
    savingErr: state.profile.savingErr,

})

const mapdispatch = (dispatch)=>({
    resetErr:()=>dispatch({type:"DO_RESET"}),
    updateUserProfile : (obj,historyRef,deleteUrls)=> dispatch({type:"DO_UPDATE_PROFILE",payload:obj,historyRef,user:"star",deleteUrls:deleteUrls}),
    logOut:()=>dispatch({type:"DO_USER_LOG_OUT"}),
    getAccountInfo:(userId)=> dispatch({type:"DO_GET_ACCOUNT_INFO",payload:userId}),
    saveInformation:(info,historyRef)=> dispatch({type:"DO_SAVE_MATCH_INFO",payload:info,historyRef:historyRef})
})

class Questions extends React.Component{
  state = {

     
      questions:[
          {
              question:"When do you sleep ?",
              option:["Before 12am","After 12am"],
              checked:false,
              checkedVal:null,
              checkedVal2:null,
              answer:null,
              howAnswer:null,
              relevance:null,
              importanceScore:null
          },
          {
              question : "How often do you clean ?",
              option:["Every time","Ocassionally"],
              checked:false,
              checkedVal:null,
              checkedVal2:null,
              relevance:null,
              importanceScore:null
          },
          {
              question:" Do you like to entertain people",
              option:["Yes i entertain people in my room","No, I am the entertained"],
              checked:false,
              checkedVal:null,
              checkedVal2:null,
              relevance:null,
              importanceScore:null
          },
          {
              question:"What time do you wake up?",
              option:["Before 7am","After 8am"],
              checked:false,
              checkedVal:null,
              checkedVal2:null,
              relevance:null,
              importanceScore:null

          },
          {
              question:"what time do you read",
              option:["During the day","During the night"],
              checked:false,
              checkedVal:null,
              checkedVal2:null,
              relevance:null,
              importanceScore:null

          }
      ],
      relevance:[
        {title:"irrelevant",score:0},
        {title:"a little irrelevant",score: 1},
        {title:"somewhat important",score:10},
        {title:"very important", score:50},
        {title:"mandatory",score:250}
        
      ],

      activeQuestion:0,

  }



  componentDidMount(){

     this.props.resetErr();
    window.scrollTo(0, 0)

    
    
  }


  submit(){
    let scale = 0;
    let questions = [];
    this.state.questions.forEach((q,index)=>{
      questions.push({
        answer:q.answer,
        howAnswer:q.howAnswer,
        score: q.importanceScore
      })

      scale += q.importanceScore
    })

    this.props.saveInformation({scale:scale,questions:questions,user:this.props.user.userId},this)
  }



  nextQuestion(){
      this.setState({activeQuestion:++this.state.activeQuestion})
  }

  prevQuestion(){
    this.setState({activeQuestion:--this.state.activeQuestion})
}

 

answerQuestion(index){
    let activeQ = this.state.activeQuestion;
    let questions = this.state.questions;
    questions[activeQ].answer = index;
    questions[activeQ].checkedVal = index;
    this.setState({questions:questions})
}

 howAnswerQuestion(index){
    let activeQ = this.state.activeQuestion;
    let questions = this.state.questions;
    questions[activeQ].howAnswer = index;
    questions[activeQ].checkedVal2 = index;
    this.setState({questions:questions})
}

howImportant(index){
    let activeQ = this.state.activeQuestion;
    let questions = this.state.questions;
    let relevance = this.state.relevance;
    questions[activeQ].importanceScore = relevance[index].score;
    questions[activeQ].relevance = index;
    this.setState({questions:questions})
}




  render(){

    if(!this.props.user){
      return(
      
            <Redirect to="/login"/>
        
      )
  }

      let  {question,option,checked,checkedVal,checkedVal2,relevance} = this.state.questions[this.state.activeQuestion];
      let activeQuestion = this.state.activeQuestion;

      
    
      let user = this.props.user;

      if(Object.keys(user).length < 1) return<></>
      const isUpdate = this.state.isUpdate;

      return (
        <body>

           <HeaderComponent ref={this}  fixed={true}/>

           <div style={{marginTop:100,backgroundColor:"#fefefe"}} className="container  card py-5">
           {
                this.state.activeQuestion != 0?
                <button onClick={()=>this.prevQuestion()}  className=" w-25 mt-4  btn btn-primary btn-lg">
                  Prev
                </button>:null
               }
           
              <h4 className="my-3">
                  {question}
              </h4>

              {
                  option.map((opt,index)=>

                <div class="form-check">
                  <input onChange={(e)=>this.answerQuestion(index)} checked={checkedVal == index?true:false} class="form-check-input" type="radio" name={"question"+activeQuestion} id={"question"+activeQuestion} value="option1"/>
                  <label class="form-check-label" for={"question"+activeQuestion}>
                    {opt}
                  </label>
                </div>
                 )
              }

                   <h5 className="my-3">
                    How would you like someone else to answer
                  </h5>

                  {
                  option.map((opt,index)=>

                <div class="form-check">
                  <input onChange={()=>this.howAnswerQuestion(index)} checked={checkedVal2 == index?true:false} class="form-check-input" type="radio" name={"answer"+activeQuestion} id={"question"+activeQuestion}/>
                  <label class="form-check-label" for={"answer"+activeQuestion}>
                    {opt}
                  </label>
                </div>
                 )
              }

                  <h5 className="my-3">
                  
                    How important the question is to you ? 

                  </h5>

                  {
                  this.state.relevance.map((rel,index)=>

                    <div class="form-check">
                    <input onChange={()=>this.howImportant(index)} checked={relevance == index?true:false} class="form-check-input" type="radio" name={"relevance"+activeQuestion} id={"relevance"+activeQuestion}/>
                    <label class="form-check-label" for={"relevance"+activeQuestion}>
                        {rel.title}
                    </label>
                    </div>
                    )
                    }



                        {
                                 this.props.savingErr && this.state.activeQuestion == this.state.questions.length - 1?
                                 <div class="alert alert-danger mt-4 w-25" role="alert">
                                   {this.props.savingErr}
                                 </div>:
                                     null
                            }

                
                 {
                this.state.activeQuestion == (this.state.questions.length - 1)?
                <button  onClick={()=>this.submit()} className="btn  btn-success btn-lg w-25 mt-4">
                  Submit
                </button>:null
            }



                {
                this.state.activeQuestion != (this.state.questions.length - 1)?
                <button  onClick={()=>this.nextQuestion()} className="w-25 mt-4 btn btn-primary btn-lg">
                  Next
                </button>:null
               }

           
                 
           </div>


        </body>

      )

  }

  }

export default connect(mapState,mapdispatch)(Questions);
