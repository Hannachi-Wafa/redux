import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cLEARSEARCH, searchactive, searchcomplet, setFilter } from './action/action'

function Filter() {
    const dispatch=useDispatch()

    return (
        <div>
            <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col"> 
            <ul class="nav nav-pills todo-nav">
                        <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link" onClick = {(e) => dispatch(setFilter('SHOW_ALL'))}>All</a></li>
                        <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link" onClick = {(e) => dispatch(setFilter('SHOW_ACTIVE'))}>Active</a></li>
                        <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link"onClick = {(e) => dispatch(setFilter('SHOW_COMPLETED'))}>Completed</a></li>
                    </ul>
        </div>
        </div></div></div></div>
    )
}

export default Filter
