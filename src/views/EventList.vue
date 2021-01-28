<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!--here, we are passing each event from the event array we declare in data to the EventCard component-->
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    };
  },
  async created() {
    try {
      const response = await EventService.getEvents();
      this.events = response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
