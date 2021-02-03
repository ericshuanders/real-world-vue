import { createStore } from 'vuex';

import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
//Above, we are importing all public items into user namespace
//so user.state= { user: { id: 'abc123', name: 'Eric' } }

export default createStore({
  modules:{
    user, event
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
    
    
  }
  
});
