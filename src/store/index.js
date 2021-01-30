import { createStore } from 'vuex';

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
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      {id: 1, title: 'picnic', organizer: '...'},
      {id: 2, title: 'beer garden', organizer: '...'},
      {id: 3, title: 'scavenger hunt', organizer: '...'},
      {id: 4, title: 'walking tour', organizer: '...'}
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  //getters can access information about our state
  getters:{
    catLength: state=>{
      return state.categories.length
    },
    //catLength can be used to access the length of the categories array
    
    //the below Getter gets an array of todos that are labled "done"
    doneTodos: state=>{
      return state.todos.filter((todo)=>todo.done)
    },
    //below, we pass the doneTodos Getter into ANOTHER getter to get 
    //all of the todos that are not done
    needTodo: (state, getters)=>{
      return state.todos.length-getters.doneTodos.length
    },
    //below we have a dynamic getter: we can take in an id and use 
    //it to return a specific event that matches the input of that
    //id
    getEventById: state=>id=>{
       const event = state.events.find((event)=>(event.id===id) )
       return event.title
       
    }
  }
});
