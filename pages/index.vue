<template>
  <div class="pt-40 md:pt-24 ">
    <div class="opacity-75 container min-h-screen w-full bg-gray-100">
      <div class="mx-10">
        
        <div class="pt-16 flex text-center justify-center ">
          <!-- <img src="https://www.hullboxoffice.com/wp-content/uploads/2020/02/green-circlejpeg-MAIN.jpg"/> -->
          <h1 class="text-3xl md:text-6xl tipo-letra px-2 bg-indigo-600 text-white text-bold ">Social Events</h1>
        </div>
          <div v-if="user !== ''">
            <button class="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <nuxt-link to="/private">
                Go to Private Page
              </nuxt-link>
            </button>
          </div>
      <p class="text-2xl md:text-4xl pt-8 md:pt-16" >If you want to participate in social events, meet people and create your own events to invite your new friends, you're going to love this application.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState }from 'vuex'
  export default {
    middleware: ['check-auth','auth'],
    computed:{
      ...mapState(['user'])
    }
  }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  background-image: url('https://www.hughesevents.com.mx/wp-content/uploads/2017/01/Hughes_events_eventossociales.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  width: 100%;
  height: 100%;
  background-size: cover; /* Resize the background image to cover the entire container */
}

.tipo-letra{
  font-family: 'Lobster', cursive;
}
</style>
