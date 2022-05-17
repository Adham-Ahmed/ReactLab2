import { NavLink } from 'react-router-dom';
let Error = ()=>{
    return(
        <div className="container">
            <h2>404</h2>
            <h3>Oops, nothing here...</h3>
            <p>Please Check the URL</p>
            <p>Otherwise, <NavLink to={'/home'}>Home</NavLink> to redirect to homepage.</p>
        </div>
    )
}

export default Error;