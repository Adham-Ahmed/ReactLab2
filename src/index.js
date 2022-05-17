import { Component } from 'react';
import ReactDom from 'react-dom/client'

//JSX Element
// let element = <h1>Hello Alex &hearts;</h1>
// let element2 = <h1>Hello Open Source</h1>
// ReactDom.render(element,document.querySelector("#root"))
// ReactDom.render(element2,document.querySelector("#root"))
// ReactDom.render(myElement,document.querySelector("#root"))

// let Styles = {
//     style1:{
//         backgroundColor:'red',
//         color:'white'
//     },
//     style2:{}
// }

// let userName = "Aly"

// let myElement = (<div>
//                     <h1 style={ {backgroundColor:'red', color:'white'} }>Hello Alex &hearts;</h1>
//                     <h1 style={ Styles.style1 }>Welcome Open-Source</h1>
//                     <h3>Welcome Mohamed</h3>
//                     <h5 className='sara'>Welcome Sara</h5>
//                     4+4 = {4+4}
//                     <input 
//                         type="text" 
//                         value={userName}
//                         onChange={(e)=>{
//                             // console.log(e.target.value);
//                             userName = e.target.value;
//                             console.log(userName);
//                         }}
//                     />
//                     {userName}
//                 </div>)

// let root = ReactDom.createRoot(document.querySelector("#root"))
// root.render(myElement)


/**
 * Functional Component
 *      function(){ return (<div></div>) }
 * Class Component
 *      class { render(){ return(<div></div>) } }
 */

//Functional Component

// let Element = ()=>{
//     let Styles = {
//                     style1:{
//                         backgroundColor:'red',
//                         color:'white'
//                     },
//                     style2:{}
//                 }

//     let userName = "Aly"
    
//     return (
//         (<div>
//             <input 
//                 type="text" 
//                 value={userName}
//                 onChange={(e)=>{
//                     // console.log(e.target.value);
//                     userName = e.target.value;
//                     console.log(userName);
//                 }}
//             />
//             {userName}
//         </div>)
//     )
// }

//  let root = ReactDom.createRoot(document.querySelector("#root"))
//  root.render(<Element/>)




 //Class Component

//  class Element extends Component{
//      constructor(){
//          super();
//          this.state = {
//              userName:"Aly"
//          }
//      }
//     render(){
//         return (
//                 <div>
//                     <input 
//                         type="text" 
//                         // value={this.state.userName}
//                         onChange={(e)=>{
//                             // console.log(e.target.value);
//                             // this.state.userName = e.target.value;
//                             // console.log(this.state.userName);
//                             this.setState({userName:e.target.value})
//                         }}
//                     />
//                     {this.state.userName}
//                 </div>
//         )
//     }
//  }





//Functional Component [Stateless Component]
//Class Component [StateFull Component [state]]

import './main.css';
import App from './App.js';
 let root = ReactDom.createRoot(document.querySelector("#root"))
 root.render(<App/>)


 //Day 2
 /**
  * Component Interaction
  * Routing
  */

 /**
  * 
  */
