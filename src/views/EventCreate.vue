<template>
  <h1>Create Event, {{ user.name }}</h1>
  <p>{{ user.id }}</p>
  <ul >
      <li v-for="(category, id) in categories" :key="id" >{{category}}</li>
  </ul>
  <p>There are {{catLength}} categories</p>
  <!-- able to use the name grabbed from store here-->
  <p>{{getEventById(4)}}</p>
  <ul>
    <li v-for="(event, id) in events" :key="id">{{event.title}}</li>
  </ul>
  <!--Above, we are calling in the getter getEventById-->

  <div>
    <input type="number" v-model.number="incrementBy">
    <button @click="incrementCount">Increment</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'EventCreate',
  data(){
    return{
      incrementBy: null
    }
  },
  methods: {
    incrementCount(){
      //INCREMENT_COUNT is a mutation, this.incrementBy is the payload
      //sending over this.incrementBy as a payload to use in the mutation 
      //this.$store.commit('INCREMENT_COUNT', this.incrementBy)
      
      //Below, we are calling a mutation through an action (updateCount) and
      //pass in the payload of this.incrementBy
      this.$store.dispatch('updateCount', this.incrementBy)
    }
  },
  //below, we can have local computed properties and state variables 
  //by using the spread operator
    computed:{
        // catLength(){
        //   //we get the info about the categories through the getters in store
        //     return this.$store.getters.catLength
        // },
        // getEvent(){
        //   //this accesses the dynamic getter in the store so you can access
        //   //whichever event you want by passing in the ID number in the template
        //   //above.
        //   // return this.$store.getters.getEventById
        // },
        //Using mapGetters, we can streamline accessing our getters from store
        ...mapGetters(['getEventById', 'catLength',]),
        ...mapState(['user','categories','events', 'count'])
    }
  //this is the most concise, calling in our state variables from the store
  //in an array as strings. We don't need to define them with another alias
  //computed: mapState(['user', 'categories'])
 //below is slightly less concise way to access state from store
 //will need to use dot notation in template to access specific data
//  computed: mapState({
//     user: 'user',
//     categories: 'categories'
//   })
  //Using mapState to take in state and return the property of state we want
  //    computed: mapState({
  //        userName: state=>state.user.name,
  //        userId: state=>state.user.id,
  //        categories: state.categories

  //    })

  //grabbing the state variable of user from the store and assigning it to a variable
  //    computed:{
  //        userName(){
  //            return this.$store.state.user.name
  //        },
  //        userId(){
  //            return this.$store.state.user.id
  //        }

  //    }
};
</script>

<style scoped></style>
