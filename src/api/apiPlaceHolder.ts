import axios from "axios";

let instance= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',

})

export const apiPlaceHolder={
    get:()=>{
        return instance.get<Array<getPlaceHolderObjectType>>('/posts')
    }
}

export type getPlaceHolderObjectType= {
    "userId": number,
    "id": number,
    "title":string,
    "body": string
}