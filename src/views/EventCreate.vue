<template>
  <div>
    <h1>Create Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <Calendar v-model="event.date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';
export default {
  name: 'EventCreate',
  components: {
    Calendar
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00');
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    };
  },
  methods: {
    createEvent() {
      //this function calls the createEvent action in store, which
      //in turn makes a mutation to state. It passes along the payload
      //of this.event

      //Specifying the createEvent inside of event module b/c of NameSpacing
      this.$store.dispatch('event/createEvent', this.event).then(() => {
        //re-route the user to the event page they created
        this.$router.push({
          name: 'EventDetails',
          params: {id:this.event.id}
        })
        this.event = this.createFreshEventObject();
      }).catch(()=>{
        console.log('There was a problem creating your event')
      })
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user;
      //user.user because user is in a module now
      const id = Math.floor(Math.random() * 1000000);
      //when our event is called, it will return this object
      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        date: '',
        time: '',
        attendees: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
