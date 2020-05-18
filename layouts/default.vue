<template>
    <div class="">
      <div class="mb-10 fixed top-0 w-full z-10 ">
        <Navbar />
      </div>

      <nuxt />
 
  </div>

</template>

<script>
import Navbar from '@/components/Navbar'
export default{

  components: {
    Navbar
  }
}

</script>
<style>
html{
  font-family: 'Heebo', sans-serif;
}
body{
  margin: 0;
}
</style>
