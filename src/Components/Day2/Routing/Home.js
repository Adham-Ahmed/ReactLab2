import React from 'react'
import AddStudent from '../ComponentInteraction/AddStudent';
import Students from "../ComponentInteraction/Students";
import StudentsList from '../ComponentInteraction/students.json'


export default function Home() {
  return (
<div>
    <AddStudent></AddStudent>
    <Students studentsList={StudentsList}></Students>
</div>
  )
}
