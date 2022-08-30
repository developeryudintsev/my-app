import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {
    deletePlaceHolderObjectThunk,
    getPlaceHolderObjectThunk,
    postPlaceHolderObjectThunk,
} from "./reducer/JsonPlaceHolderReducer";
import {Input} from "./component/Input";
import {AddUser} from "./component/AddUser";

function App() {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.jphReducer)
    let [toggle,setToglle]=useState<number|null>(null)

    useEffect(() => {
        dispatch(getPlaceHolderObjectThunk())
    }, [])
    console.log(posts)
    let deleteBtn = (id: number) => {
        dispatch(deletePlaceHolderObjectThunk(id))
    }
const AddButn=(title:string)=>{
dispatch(postPlaceHolderObjectThunk(title))
}
    return (
        <div className="App">
            <AddUser callBack={AddButn}/>
            {
                posts.map(element => {
                    return (
                        <div>
                            <button onClick={() => deleteBtn(element.id)}>X</button>
                            <span>{element.id}-</span>
                            {
                                toggle==element.id
                                    ? <Input id={element.id} title={element.title} setToglle={setToglle}/>
                                    :<span onDoubleClick={()=>setToglle(element.id)}>{element.title}</span>
                            }

                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;