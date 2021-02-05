<template>
<div id = "app"> 
  <div id="nav">
    
    <router-link :to="{name: 'EventList'}">Events</router-link> 
    <router-link :to="{name: 'About'}">About</router-link>
    <router-link :to="{name: 'EventCreate'}">Create an Event</router-link>
    
  </div>
  <NotificationContainer/>
  <router-view :key="$route.fullPath"/>
  <!-- Adding :key="$route.fullPath" allows the component ot reload when URL changes, including query parameters -->
  <!--This router-view is a placeholder for whichever component we bring up via the router-->
  </div>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer.vue';
export default {
  components:{
    NotificationContainer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a{
margin: 10px;
}
h4{
  font-size: 20px;
}
.-text-error{
  color:red
}
</style>
