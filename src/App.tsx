import React, {useEffect, useState} from 'react';
import './App.css';
import {apiPlaceHolder, getPlaceHolderObjectType} from "./api/apiPlaceHolder";

function App() {

    const [posts,SetPosts]=useState<Array<getPlaceHolderObjectType>>([])

    useEffect(()=>{
       apiPlaceHolder.get()
           .then(res=>{
               SetPosts(res.data)
           })
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
