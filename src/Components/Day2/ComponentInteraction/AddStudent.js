// import {useState} from "react";
// const INITIAL_FORM_VALUE = {
//   name: '',
//   age: ''
// };
// const AddStudent = ({handleAddStudent}) => {
//   const [formData, setFormData] = useState({...INITIAL_FORM_VALUE});
//   const updateFormData = (key, value) => {
//     setFormData(previous => ({
//       ...previous,
//       [key]: value,
//     }));
//   };
//   const onAddStudentClick = e => {
//     e.preventDefault();
//     handleAddStudent(formData);
//     setFormData({...INITIAL_FORM_VALUE})
//   };
  // return <div>
  //   <form>
  //     <div>
  //       <input name={"name"} placeholder={"Name"} value={formData.name}
  //              onChange={e => updateFormData("name", e.target.value)}/>
  //     </div>
  //     <div>
  //       <input name={"age"} placeholder={"Age"} value={formData.age}
  //              onChange={e => updateFormData("age", e.target.value)}/>
  //     </div>
  //     <button className="btn btn-primary" onClick={onAddStudentClick}>Add</button>
  //   </form>
  // </div>;
// }
// export default AddStudent;

import React, { Component } from 'react'

export default class AddStudent extends Component {
  
  constructor(){
    super()
    this.state = {
      formData:{
        name:'',
        age:0,
      }
    }
  }
  render() {
    
    const onAddStudentClick=()=>{
      console.log(this.state.formData.name+":name")
      console.log(this.state.formData.age+":age")
    };

    const updateFormDataName = (inputValue) => {
        this.setState({
          formData: {
            name:inputValue,
            age:this.state.formData.age
          }
        })
    };


    const updateFormDataAge = (inputValue) => {
        this.setState({
          formData: {
            name:this.state.formData.name,
            age:inputValue,
          }
        })
        const callBackFunction= ()=>{
          this.props.parentCallBack(this.state.formData) 
        }
        callBackFunction()
  };


    
    
    return (
      <div>
      {/* <form> */}
           <input name={"name"} placeholder={"Name"} value={this.state.formData.name}
        
                  onChange={e => updateFormDataName( e.target.value)}
                  />
         <div>
           <input name={"age"} placeholder={"Age"} value={this.state.formData.age}
                  onChange={e => updateFormDataAge( e.target.value)}
                  />
         </div>

         <input type="button" className="btn btn-primary" value="Add" onClick={onAddStudentClick}/>
       {/* </form> */}
       </div>
    )
  }
}
