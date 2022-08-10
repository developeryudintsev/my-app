import {apiPlaceHolder, getPlaceHolderObjectType} from "../api/apiPlaceHolder";
import {Dispatch} from "redux";

export let initialState: Array<getPlaceHolderObjectType> = [
    {
        userId: 0,
        id: 0,
        title: 'waiting...',
        body: 'q'
    }
]

export const jsonPlaceHolderReducer = (state = initialState, action: generalType) => {
    switch (action.type) {
        case "GET": {
            return [...action.payload.data]
        }
        case "DELETE":{
            return state.filter(el=>el.id!==action.payload.id)
        }
        default:
            return state
    }
}

type generalType = getPlaceHolderObjectACType
    | deletePlaceHolderACType

type getPlaceHolderObjectACType = ReturnType<typeof getPlaceHolderObjectAC>

const getPlaceHolderObjectAC = (data: Array<getPlaceHolderObjectType>) => {
    return {
        type: 'GET',
        payload: {
            data
        }
    } as const
}

export const getPlaceHolderObjectThunk = () => async (dispatch: Dispatch) => {
    try {
        let result = await apiPlaceHolder.get()
        dispatch(getPlaceHolderObjectAC(result.data))
    } catch {
        console.log('vse propalo')
    }
}

type deletePlaceHolderACType = ReturnType<typeof deletePlaceHolderAC>

const deletePlaceHolderAC = (id:number) => {
    return {
        type: "DELETE",
        payload: {
            id
        }
    } as const
}

export const deletePlaceHolderObjectThunk = (id:number) => async (dispatch: Dispatch) => {
    try {
        let res = await apiPlaceHolder.delete(id)
        console.log(res)
        dispatch(deletePlaceHolderAC(id))
    } catch {
        console.log('Error')
    }
}