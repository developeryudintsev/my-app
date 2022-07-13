import {getPlaceHolderObjectType} from "../api/apiPlaceHolder";

export const intialState:Array<getPlaceHolderObjectType>=[]
export const JsonPlaceHolderReducer=(state=intialState,action:generalType)=>{
switch (action.type){

    case 'xxx':{
        return state
    }
    default:return state
}
}

type generalType=getACType

export type getACType=ReturnType<typeof getAC>

export const getAC=()=>{
    return{
        type:'xxx'
    }as const
}