// import React from 'react'
import AddStudent from '../ComponentInteraction/AddStudent';
import Students from "../ComponentInteraction/Students";
import StudentsList from '../ComponentInteraction/students.json'


import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props){
    super(props)
      
    this.state = {
      studentsArrAfterAdd:StudentsList.students
    }
  }    
  
  callBackFunction = (data)=>{
    console.log(data)
    this.state.studentsArrAfterAdd.push(data)
    this.setState({studentsArrAfterAdd:this.state.studentsArrAfterAdd})
  }
  render() {
    // console.log(this.callBackFunction)
    return (
      
        <div>
        {/*  */}
        <AddStudent parentCallBack={this.callBackFunction}></AddStudent>
        {/*  */}
        {console.log(this.callBackFunction)}
        <Students studentsList={this.state.studentsArrAfterAdd}></Students>
        </div>
    )
  }
}

