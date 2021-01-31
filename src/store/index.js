import { createStore } from 'vuex';

export default createStore({
  state: {
    user: { id: 'abc123', name: 'Eric Anderson' },
    count: 0,
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
      { id: 1, title: 'picnic', organizer: '...' },
      { id: 2, title: 'beer garden', organizer: '...' },
      { id: 3, title: 'scavenger hunt', organizer: '...' },
      { id: 4, title: 'walking tour', organizer: '...' }
    ]
  },

  mutations: {
    //takes the payload and updates the count with that payload
    INCREMENT_COUNT(state, value) {
      state.count += value;
    }
  },
  
  modules: {},
  //getters can access information about our state
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    //catLength can be used to access the length of the categories array

    //the below Getter gets an array of todos that are labled "done"
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    //below, we pass the doneTodos Getter into ANOTHER getter to get
    //all of the todos that are not done
    needTodo: (state, getters) => {
      return state.todos.length - getters.doneTodos.length;
    },
    //below we have a dynamic getter: we can take in an id and use
    //it to return a specific event that matches the input of that
    //id
    getEventById: state => id => {
      const event = state.events.find(event => event.id === id);
      return event.title;
    }
  },

  actions: {
    updateCount({ state, commit }, value) {
      //{state, commit} is a CONTEXT OBJECT which has access to all the properties
      //of the Vuex store. We use object destructuring to take out state and commit.
      //value is the payload, which we can take from our component and pass in to our
      //mutation.
      if (state.user) {
        commit('INCREMENT_COUNT', value);
      }
    }
  }
});
