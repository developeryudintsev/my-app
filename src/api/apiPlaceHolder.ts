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
    delete:(id:number)=>{
        return instance.delete(`/posts/${id}`)
    }
}

export type getPlaceHolderObjectType=  {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}