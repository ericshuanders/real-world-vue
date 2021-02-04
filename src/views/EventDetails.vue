<template>

<div>
  <h1>{{event.title}}</h1>
  <h2>Hosted by: {{event.organizer}}</h2>
  <h3>{{event.time}} on {{event.date}} at {{event.location}}</h3>
  <p>{{event.description}}</p>
  
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name:'EventDetail',
  props: ['id'],
  //We can access this "slug" as a prop because we set props:true in our route for EventDetails
  
  
   created() {
     //specifying the fetchEvent inside of event module b/c of NameSpacing
    //  this.$store.dispatch('event/fetchEvent', this.id)

    //We can use mapActions to shorten this syntax, getting rid of $store.dispatch
    this.fetchEvent(this.id)
     console.log(this.id)
     console.log('dispatching')
     
   
  },
  computed: 
  // mapState(['event'])

  //rather than an array, we make mapState take an object where we specify
  //that event should take in state and return the event within the store's
  //event module
  mapState({
    event: state=>state.event.event
  }),

  //We specify the NameSpaced module, 'event,' and then bring in the methods
  //from that module in an array, in this case 'fetchEvent.'
  methods: mapActions('event', ['fetchEvent'])
};
</script>
