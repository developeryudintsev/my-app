import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {deletePlaceHolderObjectThunk, getPlaceHolderObjectThunk} from "./reducer/JsonPlaceHolderReducer";

function App() {
    const dispatch=useAppDispatch()
    const posts=useAppSelector(state=>state.jphReducer)

    useEffect(()=>{
        dispatch(getPlaceHolderObjectThunk())
    },[])
    console.log(posts)
let deleteBtn=(id:number)=>{
        dispatch(deletePlaceHolderObjectThunk(id))
}
  return (
      <div className="App">
          {
              posts.map(element=>{
                  return(
                      <div>
                          <button onClick={()=>deleteBtn(element.id)}>X</button>
                          <span>{element.id}-</span>
                          <span>{element.title}</span>
                      </div>
                  )
              })
          }
      </div>
  );
}

export default App;
// const [posts,SetPosts]=useState<Array<getPlaceHolderObjectType>>([])
//
// useEffect(()=>{
//     apiPlaceHolder.get()
//         .then(res=>{
//             SetPosts(res.data)
//         })
// },[])