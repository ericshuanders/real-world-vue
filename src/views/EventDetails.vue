<template>

<div>
  <h1>{{event.title}}</h1>
  <h2>Hosted by: {{event.organizer}}</h2>
  <h3>{{event.time}} on {{event.date}} at {{event.location}}</h3>
  <p>{{event.description}}</p>
  
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'EventDetail',
  props: ['id'],
  //We can access this "slug" as a prop because we set props:true in our route for EventDetails
  
  
   created() {
     this.$store.dispatch('fetchEvent', this.id)
     console.log(this.id)
     console.log('dispatching')
     
   
  },
  computed: mapState(['event'])
};
</script>
