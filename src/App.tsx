import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {getPlaceHolderObjectThunk} from "./reducer/JsonPlaceHolderReducer";

function App() {
    const dispatch=useAppDispatch()
    const posts=useAppSelector(state=>state.jphReducer)

    useEffect(()=>{
        dispatch(getPlaceHolderObjectThunk())
    },[])
    console.log(posts)

  return (
      <div className="App">
          {
              posts.map(element=>{
                  return(
                      <div>
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