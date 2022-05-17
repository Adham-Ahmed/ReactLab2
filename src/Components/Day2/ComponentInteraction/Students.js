let Students = ({studentsList})=>{
    console.log(studentsList);
    
    let renderStudnets = ()=>{
        if(studentsList.length > 0){
            return studentsList.map((student)=>{
                return (
                    <div className="studentItem">
                    <h3>{student.name}</h3>
                    <h3>{student.email}</h3>
                </div>
            )
        })
    }else{
        return (<h1>No Students</h1>)
    }
}
    return (
        <div className="search-Comp">
            <h2 className="header">Filterd Students</h2>
            {renderStudnets()}
        </div>
    )
}

export default Students;