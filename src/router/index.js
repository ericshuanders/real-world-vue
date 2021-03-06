import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue"
import About from "../views/About.vue"
import EventCreate from "../views/EventCreate"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
   component: About
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    //we can send in the route params as a component prop
    component: EventDetails
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
//the history option uses browser's history.pushState API to enable URL navigation without having 
//to reload the page

export default router;
