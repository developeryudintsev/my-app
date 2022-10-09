import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import {useAppDispatch} from "../hooks/hooks";

type propsType={
    id:number,
    title:string
    setToglle:(value:number|null)=>void
}

export const Input=(props:propsType)=>{
    const dispatch = useAppDispatch()
    let [newtitle,setnewTitle]=useState(props.title)

    const onKeyPressHandeler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.charCode===13){
            props.setToglle(null)
            editTitle(props.id,newtitle)
        }

    }

    const editTitle=(id:number, title:string)=>{
        // dispatch(updateEditTitleThunk(id, title))
    }

    let onChangeHendler=(e:ChangeEvent<HTMLInputElement>)=>{
        setnewTitle(e.currentTarget.value)
    }
    return(
        <input
        value={newtitle}
        onChange={onChangeHendler}
        onKeyPress={onKeyPressHandeler}
        />
    )
}