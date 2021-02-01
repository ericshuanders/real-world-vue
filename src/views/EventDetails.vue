<template>
  <div v-if="event">
    <!--The above causes the component to wait until it has an event before it renders-->
    <h1>{{ event.title }}</h1>
    <h2>Hosted by: {{event.user.name}}</h2>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js';
export default {
  props: ['id'],
  //We can access this "slug" as a prop because we set props:true in our route for EventDetails
  data() {
    return {
      event: null
    };
  },
  async created() {
    try {
      const response = await EventService.getEvent(this.id);
      //id is accessed throug props
      this.event = response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
