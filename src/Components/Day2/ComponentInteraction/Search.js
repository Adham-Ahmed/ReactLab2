import { Component } from "react";

// let Search = ()=>{
//     return (
//         <div>
//             <input/>
//         </div>
//     )
// }

// export default Search;

class Search extends Component{
    //props ==> {onKeyChange}
    constructor(props){
        super(props);
        this.state = {
            text:'',
        }
    }

    //onChange()
    changeText = (e)=>{
        // console.log(e.target.value);
        this.setState({text:e.target.value})
        this.props.onKeyChange(e.target.value);
    }

    render(){
        // console.log(this.state.text)
        // console.log(this.props);
        return(
            <div className="search-Comp">
                <h3 className="header">Search Component</h3>
                <input 
                    type="text" 
                    value={this.state.text}
                    onChange={this.changeText}
                />
                {/* <h3>KeyWord: {this.state.text}</h3> */}
            </div>
        )
    }
}

export default Search;
