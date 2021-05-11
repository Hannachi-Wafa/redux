import React from 'react'
import { useSelector } from 'react-redux'
import applyFilter from './applyFilter'
import Task from './Task'
function ListTask() {
    const todos = useSelector(state => state.reduce)
    const filter = useSelector(state => state.filter)

    const todoList= applyFilter(todos,filter)


    return (
        <div>

            {todoList.map(el=><Task todo={el} key={el.id}/>)}
        </div>
        
    )
   
}

export default ListTask

