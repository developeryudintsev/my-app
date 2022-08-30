import axios from "axios";

let instance= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    // withCredentials:true,
    // headers:{
    //     'API-KEY':''
    // }
})


export const apiPlaceHolder={
    get:()=>{
        return instance.get<Array<getPlaceHolderObjectType>>('/posts')
    },
    post:(title:string)=>{
        return instance.post('/posts',{title:title})
    },
    delete:(id:number)=>{
        return instance.delete(`/posts/${id}`)
    },
    update:(id:number,newtitle:string)=>{
        return instance.put(`/posts/${id}`,{title:newtitle,body:'new body'})
    }
}

export type getPlaceHolderObjectType=  {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}