import React, {useEffect, useState} from 'react';
import './App.css';
import {apiPlaceHolder, getPlaceHolderObjectType} from "./api/apiPlaceHolder";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {getPlaceHolderObjectThunk} from "./reducers/jsonPlaceHolderReducer";

function App() {
    const dispatch = useAppDispatch()
    const posts=useAppSelector(state => state.jphReducer)

    useEffect(() => {
        dispatch(getPlaceHolderObjectThunk())
         }, [])
    console.log(posts)
    return (
        <div className="App">
            {posts.map(el => {
                return (
                    <div>
                        <span>{el.id} - </span>
                        <span> {el.title}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
