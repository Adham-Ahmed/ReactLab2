// import React from 'react'
import AddStudent from '../ComponentInteraction/AddStudent';
import Students from "../ComponentInteraction/Students";
import StudentsList from '../ComponentInteraction/students.json'


import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super()
      const callBackFunction = ()=>{
    }
    this.state = {
      studentsArrAfterAdd:StudentsList.students
      // .push({name:"adham",age:'23'})
    }
  }
  render() {
    this.state.studentsArrAfterAdd.push({name:"adham",age:'23'})
    return (
      
        <div>
        <AddStudent parentCallBack={this.callBackFunction}></AddStudent>
        {console.log(this.callBackFunction)}
        <Students studentsList={this.state.studentsArrAfterAdd}></Students>
        </div>
    )
  }
}

