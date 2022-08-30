import {ChangeEvent, KeyboardEvent, KeyboardEventHandler, useState} from "react";
import './AddUser.css';
type PropsType={
    callBack:(title:string)=>void
}
export const AddUser=(props:PropsType)=>{
    let [newTitle,setNewTitle]=useState('')
    let [error,setError]=useState<string|boolean>('')
    const TitleHandler=()=>{
        if(newTitle.trim()==''){
            setError('Title filed must be filled')
        }
        if(newTitle.trim()!==''){
            props.callBack(newTitle)
            setNewTitle('')
        }
    }
    let onChangeHendler=(e:ChangeEvent<HTMLInputElement>)=>{
        setError('')
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandeler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.charCode===13){
TitleHandler()
        }

    }
    return(
        <div>
            <input
                value={newTitle}
                placeholder={'title'}
                onKeyPress={onKeyPressHandeler}
            onChange={onChangeHendler}
            />
            <button onClick={TitleHandler}>add</button>
            {error&& <div className={'error'}>{error}</div>}
        </div>
    )
}