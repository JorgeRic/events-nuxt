<template>
  <div class="mb-10">
    <header class=" border-b md:flex  md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <nuxt-link to='/' class="leading-none text-2xl md:text-4xl tipo-letra no-underline text-gray-700 hover:text-black">
          Social Events
        </nuxt-link>
      </div>
      <nav>
        <ul class="list-reset md:flex md:items-center">
          <div v-if="user === ''">
            <li class="md:ml-4" >
              <nuxt-link
              class="block text-2xl md:text-4xl no-underline hover:underline py-2 text-gray-600 hover:text-black md:border-none md:p-0"
              to="/admin/singup">
                SingUp
              </nuxt-link>
            </li>
            <li class="md:ml-4">
              <nuxt-link
                class="text-2xl md:text-4xl block no-underline hover:underline py-2 text-gray-600 hover:text-black md:border-none md:p-0"
                to="/admin/login"
              >
                Login
              </nuxt-link>
            </li>

          </div>
         <div v-else>
          <li class="md:ml-4">
            <button
              class="text-2xl md:text-4xl block no-underline hover:underline py-2 text-red-300 hover:text-red-500 md:border-none md:p-0"
              @click="onLogout"
            >
              Logout
            </button>
          </li>

         </div>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import {mapState }from 'vuex'
  export default {
    computed:{
      ...mapState(['user'])
    },
    methods:{
      onLogout(){
        this.$store.dispatch('logout')
        this.$router.push ('/')
      }
    }
  }
</script>

<style  scoped>
.tipo-letra{
  font-family: 'Lobster', cursive;
}
</style>