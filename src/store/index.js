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
    ]
  },

  mutations: {
    ADD_EVENT(state, event){
      //adding the new event to the events state
      state.events.push(event)
      console.log('mutation working')
      console.log(state.events)
    }
  },
  actions: {
  createEvent({commit}, event){
      //calls the ADD_EVENT mutation and passes
      //it the payload it receives from the component
     EventService.postEvent(event).then(()=>{
      commit('ADD_EVENT', event)
     })
    }
  },
  
  modules: {},
 
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    
    getEventById: state => id => {
      const event = state.events.find(event => event.id === id);
      return event.title;
    }
  },

  
});
