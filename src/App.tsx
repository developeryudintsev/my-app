import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type getPlaceHolderObjectType= {
    "userId": number,
    "id": number,
    "title":string,
    "body": string
}

function App() {

    const [posts,SetPosts]=useState<Array<getPlaceHolderObjectType>>([])

    const getPlaceHolderAPI=async ()=>{
        const result=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=await result.json()
        SetPosts(data)
    }

    useEffect(()=>{
        getPlaceHolderAPI()
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
