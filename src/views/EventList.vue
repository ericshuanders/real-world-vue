<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div v-show="page>1">
      <!-- The 'previous' link will only show if there is a previous page -->
    <router-link :to="{name: 'EventList', query: {page: page-1}}" rel="prev">Previous Page</router-link>
    </div>
    <div v-show="eventsTotal > page*3">
      <!-- The 'next' link will only show if there are more events to show-->
    <router-link :to="{name: 'EventList', query: {page: page+1}}" rel="next">Next Page</router-link>
    </div>
    <!--here, we are passing each event from the event array we declare in data to the EventCard component-->
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';
import {mapState} from 'vuex'


export default {
  name: 'EventList',
  components: {
    EventCard
  },
  
//We've moved our API call and setting of state variables to that 
//API call return all into our Vuex store.
//1) Our component is created and it dispatches to our store's actions
//2) Our store action fetches the events from the API and commits a mutation
//3) Our mutation sets our state variale of events to the events fetched from our 
//API call that happened in the aciton
//4) Our component access the state variable of 'events' to render the Event Cards

  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    });
    
  },
  computed: {
    page(){
      //Here we are determining which page to pass as a paylaod
      //we take 
      return parseInt(this.$route.query.page || 1)
    },
    ...mapState(['events','eventsTotal'])}
  
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
