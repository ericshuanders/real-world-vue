

<template>
    <div class="notification-bar" :class="notificationTypeClass">
        
        <p>{{notification.message}}</p>
      
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        data(){
            return{
                timeout: null
            }
        },
        mounted(){
            this.timeout=setTimeout(()=>this.remove(this.notification), 5000)
        },
        //beforeUnmount is a lifecycle method
        beforeUnmount(){
            //resets the timeout
            clearTimeout(this.timeout)
        },
        props: {
            notification: {
                type: Object,
                required: true
            }
        },
        computed:{
            notificationTypeClass(){
                // below, we are printing out whether the notification is 
                // a success or error: -text-error or -text-success
                // these have css implications that we can use, so we render
                // it dynamically above with v-bind: class
                return `-text-${this.notification.type}`
            }
        },
        //look in the notification module and find the remove action
        methods: mapActions('notification',['remove'])
        
    }
</script>

<style scoped>
.notification-bar{
    margin: 1em 0 1em
}
</style>