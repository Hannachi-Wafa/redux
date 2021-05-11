import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletetodo, edittodo, isdonetodo } from './action/action'
import 'bootstrap/dist/css/bootstrap.min.css';



function Task({todo}) {
    const  dispatch = useDispatch();
    const [edit, setedit] = useState(false)
    const [description, setdescription] = useState(todo.description)
    const handlchange = (e) => {
        setdescription(e.target.value)
    }


    return (
        <div>
            
            <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            
            <div class="form-check" ><input className="checkbox" type="checkbox" onClick={()=>{dispatch(isdonetodo(todo.id))}}/></div> 

                <div className="col">{edit?<input  type='text' value={description} onChange={handlchange}></input>:<h4>{todo.description}</h4>}</div>

           <button className="btn btn-primary" onClick={()=>{
                dispatch(edittodo({
                    ...todo,
                    description:description
                }))
            
                if(edit){setdescription(todo.description)} setedit(!edit)}}>{edit?"update":"Edit"}</button>
            <button className="btn btn-danger" onClick={()=>{dispatch(deletetodo(todo.id))}}>delete</button>
        
        </div>
        </div>
        </div>
        </div>
    )
}

export default Task

