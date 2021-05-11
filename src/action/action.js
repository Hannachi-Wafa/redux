import {ADDtodo,Deletetodo, Edittodo, ISdone, SET_FILTER} from './types'
export const addtodo=newtodo=>{
    return{
        type:ADDtodo,
        payload:newtodo
    }
}
export const deletetodo=newtodo=>{
    return{
        type:Deletetodo,
        payload:newtodo
    }
}   
export const edittodo=newtodo=>{
    return{
        type:Edittodo,
        payload:newtodo
    }
}
export const isdonetodo=newtodo=>{
    return{
        type:ISdone,
        payload:newtodo
    }
}

export const setFilter=filter=> {
  return {
    type: SET_FILTER,
    filter
  };
};
