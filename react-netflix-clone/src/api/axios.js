import axios from "axios"

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3", 
    params : {
        api_key :"45cba8a0f916d03c57ceb0d3e685dc18",
        language : "ko-KR",
    },
})

export default instance;