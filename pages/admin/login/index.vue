<template>
  <div>
    <div class="bg-white pt-40 md:pt-24">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
          Login
        <br class="hidden sm:inline" />
        </h2>
        <form @submit.prevent="onSubmit" class="mt-8 sm:flex">
          <input v-model="email" type="email" class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email" />
          <input v-model="password" type="text" class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your password" />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Send 
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data(){
      return{
        isLogin: true,
        email: '',
        password: ''
      }
    },
    methods:{
      onSubmit(){
         this.$store.dispatch('authenticateUser',
        {
         isLogin: this.isLogin,
         email: this.email,
         password: this.password,
         returnSecureToken: true
        })
        .then(()=> {
          console.log(this.email)
          this.$router.push('/private')
        })
        .catch(error => {
          console.log(error)
        })
      },

    },
    middleware: ['check-auth','auth'],
    
    
  }
</script>

<style lang="scss" scoped>

</style>