import { v4 as uuidv4 } from 'uuid';
import { ADDtodo,Deletetodo, Edittodo,ISdone} from '../action/types';

const initialState=[
    {id:uuidv4(),
        description:"Leran react hooks",
        isDone:false
    },
{id:uuidv4(),
    description:"Leran redux",
    isDone:false
}
]


const reduce=(state=initialState,action)=>{
    
    switch (action.type) {
        
        case ADDtodo:  
        return [...state,action.payload]
        
        case Deletetodo:
        return [...state].filter(el=>el.id!==action.payload)
        case Edittodo:
            const newtodo=[...state]  
            let index=-1
            for(let i=0;i<newtodo.length;i++){
                index++
                if(newtodo[i].id===action.payload.id){
                    break;
                }
            }
            if(index!==-1){
                newtodo[index]=action.payload;
                return newtodo;
            }   
            break;
            case ISdone:
                return state.map(el=>el.id===action.payload ? {...el, isDone:!el.isDone }: el)
               
                 
        default :
            return state
    }
}
export default reduce