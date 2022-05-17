let Students = ({studentsList})=>{
    console.log(studentsList);
    
    // const Students = () => {
    //     const [studentsList, setStudentsList] = useState(StudentsService.getStudents());
    //     const handleAddStudent = student => {
    //       student.id = Math.ceil(Math.random() * 99999);
    //       setStudentsList(previous => previous.concat([student]))
    //     }

    let renderStudnets = ()=>{
        if(studentsList.students.length > 0){
            return studentsList.students.map((student)=>{
                return (
                    <div className="studentItem">
                    <h4>{student.name}</h4>
                    <h4>{student.email}</h4>
                </div>
            )
        })
    }else{
        return (<h1>No Students</h1>)
    }
}
    return (
        <div className="search-Comp">
            <h3 className="header">Filterd Students</h3>
            {renderStudnets()}
        </div>
    )
}

export default Students;