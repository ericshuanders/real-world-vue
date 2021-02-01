import { createStore } from 'vuex';
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: { id: 'abc123', name: 'Eric Anderson' },
 
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    
    events: [
      // { id: 1, title: 'picnic', organizer: '...' },
      // { id: 2, title: 'beer garden', organizer: '...' },
      // { id: 3, title: 'scavenger hunt', organizer: '...' },
      // { id: 4, title: 'walking tour', organizer: '...' }
    ],
    eventsTotal: null,
    event: {}
  },

  mutations: {
    ADD_EVENT(state, event){
      //adding the new event to the events state
      state.events.push(event)
      console.log('mutation working')
      console.log(state.events)
    },
    SET_EVENTS(state, events){
      state.events=events
    },
    SET_EVENTS_TOTAL(state, number){
      state.eventsTotal=number
    },
    SET_EVENT(state, event){
      state.event=event
      console.log('mutated', event)
    }
  },
  actions: {
  createEvent({commit}, event){
      //calls the ADD_EVENT mutation and passes
      //it the payload it receives from the component
     EventService.postEvent(event).then(()=>{
      commit('ADD_EVENT', event)
     })
    },
    async fetchEvents({commit}, {perPage, page}){
    
      //we've added a payload of perPage and page so we can tell our getEvents
      // API call how many results per page and what page we're on. This
      //payload comes from our component's dispatch

      //Payloads can be a single variable or 
      //an object. Our payload is an OBJECT, with two properties,
      //perPage and page
      try {
        const response = await EventService.getEvents(perPage, page);
        console.log('Total events are: '+ response.headers['x-total-count'])
        commit('SET_EVENTS', response.data) 
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
        console.log("list view", this.events)
      } catch (error) {
        console.log(error);
      }
    },
    // fetchEvent({ commit, getters }, id) {
    //   var event = getters.getEventById(id)

    //   if (event) {
    //     commit('SET_EVENT', event)
    //   } else {
    //     EventService.getEvent(id)
    //       .then(response => {
    //         commit('SET_EVENT', response.data)
    //       })
    //       .catch(error => {
    //         console.log('There was an error:', error.response)
    //       })
    //   }
    // }

    async fetchEvent({commit, getters}, id){
      //Let's user our getter that fetches events by id:
      var event = await getters.getEventById(id)
      console.log('im fetching')
      if(event){
        commit('SET_EVENT', event)
        console.log('getter in fetchEvent')
      }
      else{
      //we get the id as a payload from the component
      try {
        const response = await EventService.getEvent(id);
        console.log('fetching new API')
        console.log(response)
        //id is accessed through props
        commit('SET_EVENT', response.data)
      } catch (error) {
        console.log(error);
      }}
    }
  },
  
  modules: {},
 
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    
    getEventById: state => id => {
       return state.events.find(event => event.id === id);
      
    }
  },

  
});
