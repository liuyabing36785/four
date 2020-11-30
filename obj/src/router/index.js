import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../pages/cao/EventList.vue"
import Login from "../pages/zhao/login.vue"
import table from "../components/Index.vue"
import Meborde from "../components/MessageBoard.vue"
Vue.use(VueRouter);

const routes = [
	{
	path: "/EventList",
	name: "EventList",
	component: EventList
  },
  {
	path: "/table",
	name: "table",
	component: table
  },
  {
	path: "/login",
	name: "login",
	component: Login
  },
  {
	path: "/",
	redirect:'/table'
	
  },
  {
	path: "/Meborde",
	name: "Meborde",
	component: Meborde
	
  },
  
];

const router = new VueRouter({
  routes
});

export default router;