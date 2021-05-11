import React from 'react'
import {  useSelector } from 'react-redux'
import Addtask from './Addtask'
import Filter from './Filter'
import ListTask from './ListTask'


const App=()=> {
  


    return (
      <div className="App">
        <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col"> <h1>TODO List</h1>
        <Addtask ></Addtask>
        <Filter></Filter>

        <ListTask></ListTask>
      </div>
      </div> </div></div> </div>
    )
  
}
export default App
