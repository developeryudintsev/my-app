import {apiPlaceHolder, getPlaceHolderObjectType} from "../api/apiPlaceHolder";
import {Dispatch} from "redux";
import {RootState} from "../store/store";
import {stat} from "fs";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export let initialState: Array<getPlaceHolderObjectType> = [
    {
        userId: 0,
        id: 0,
        title: 'waiting...',
        body: 'q'
    }
]

const slice=createSlice({
    name:'jsonPlaceHolderReducer',
    initialState:initialState,
    reducers:{
        getPlaceHolderObjectAC(state,action:PayloadAction<{data:Array<getPlaceHolderObjectType>}>){
           let newState=[...state]
            newState=action.payload.data
            return newState
        },
        deletePlaceHolderAC(state,action:PayloadAction<{id:number}>){
            return state.filter(f=>f.id!==action.payload.id)
        },
        updatePlaceHolderAC(state,action:PayloadAction<{ body:string, id:number, title:string}>){
            console.log(action.payload.title)
            return state.map((el)=>el.id===action.payload.id
                ?{...el,title:action.payload.title,body:action.payload.body}
            :el)
        }

    }
})

export const jsonPlaceHolderReducer =slice.reducer
const {getPlaceHolderObjectAC,deletePlaceHolderAC,updatePlaceHolderAC}=slice.actions

export const getPlaceHolderObjectThunk = () => async (dispatch: Dispatch) => {
    try {
        let result = await apiPlaceHolder.get()
        dispatch(getPlaceHolderObjectAC(result))
    } catch {
        console.log('vse propalo')
    }
}


export const deletePlaceHolderObjectThunk = (id:number) => async (dispatch: Dispatch) => {
    try {
        let res = await apiPlaceHolder.delete(id)
        console.log(res)
        dispatch(deletePlaceHolderAC({id}))
    } catch {
        console.log('Error')
    }
}

export const updateEditTitleThunk=(titleid:number, newtitle:string)=>async (dispatch:Dispatch)=>{
    try {
        let res=await apiPlaceHolder.update(titleid,newtitle)
        dispatch(updatePlaceHolderAC(res.data))
    }catch {
        console.log('error')
    }
}
//
//  export const postPlaceHolderObjectThunk = (title: string) => async (dispatch: Dispatch, getState: () => RootState) => {
//     try {
//         let result = await apiPlaceHolder.post(title)
//         dispatch(postPlaceHolderObjectAC({...result.data, id: getState().jphReducer.length + 1}))
//     } catch {
//         console.log('vse propalo')
//     }
// }
