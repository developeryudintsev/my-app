import axios from "axios";

let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    //withCredentials:true
    // headers:{
    //     'API-KEY':'bgyhhujhnkj'
    // }
})

export const apiPlaceHolder = {
    get: () => {
    return instance.get<Array<getPlaceHolderObjectType>>('/posts')
    }
}

export type getPlaceHolderObjectType={
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}
