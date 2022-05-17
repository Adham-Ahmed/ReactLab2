import { useParams } from "react-router-dom";

let UserDetails = ()=>{
    // console.log(props);//props.matchs.params.id
    //hooks(useParam)
    // console.log(useParams());
    // let userId = useParams().id;
    let {id} = useParams();//Destructuring
    console.log(id);
    return(
        <div>
            UserDetails Works
        </div>
    )
}

export default UserDetails;