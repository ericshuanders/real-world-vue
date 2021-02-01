import axios from 'axios';

//below, we are creating the single Axios instance we can
//use across our entire app
const apiClient = axios.create({
  // baseURL: "https://my-json-server.typicode.com/ericshuanders/real-world-vue",
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEvents(perPage, page) {
    //pagination: we are sending in how many results per page and the current
    //page we're on
    //we're going for something like events?_limit=3&page=2
    return apiClient.get('/events?_limit=' + perPage + "&_page=" + page);
    
    //this is added on to the base url
  },
  getEvent(id) {
    console.log('hello')
    return apiClient.get(`/events/${id}`);
    
    //this is added on to the base url
  },
  postEvent(event) {
    //takes the payload event and posts it to our mock
    //database
    return apiClient.post('/events', event);
  }
};
