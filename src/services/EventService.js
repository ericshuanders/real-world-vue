import axios from 'axios'

//below, we are creating the single Axios instance we can 
//use across our entire app
const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/ericshuanders/real-world-vue",
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getEvents(){
        return apiClient.get('/events')
        //this is added on to the base url
    },
    getEvent(id){
        return apiClient.get(`/events/${id}`)
        //this is added on to the base url
    }
}