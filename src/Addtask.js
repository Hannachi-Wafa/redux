import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addtodo } from './action/action';

function Addtask() {
    const  dispatch = useDispatch();

    const [description, setdescription] = useState("");
    const handlchange = (e) => {
        setdescription(e.target.value)
    }

    return (  
        <div>
            
         {/*   <input type="text" value={description} placeholder="new todo....." onChange={handlchange} />
            <button  onClick={()=>{dispatch(addtodo({id:uuidv4(),
            description:description,
            isDone:false}),setdescription(""))}}>ADD</button>*/}
              <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col">
                    <input  value={description}  onChange={handlchange} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .."/>
                </div>
               
                <div className="col-auto px-0 mx-0 mr-2">
                    <button onClick={()=>{dispatch(addtodo({id:uuidv4(),
            description:description,
            isDone:false}),setdescription(""))}} type="button" className="btn btn-primary">Add</button>
                </div>
               
            </div>
        </div>
    </div>
    
        </div>
    )
}

export default Addtask

