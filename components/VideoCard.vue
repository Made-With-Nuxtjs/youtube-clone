<template>
<v-container dense>
  <v-layout row  
   >
    <div  v-for="n in 10" :key="n">
       <v-col 
       v-for="n in 5" :key="n"
       >
  
      <nuxt-link to="/videoView">
  
      <v-card
        max-width="325"  
        flat 
        tile
        class="pa-0"
      >
    

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        >
        </v-img>
        <h3> Nuxt JS beginner tutorial</h3>
        <div class="text-subtitle-1 pa-0 my-0">
        Programming with Oxf
        </div>
         <div class="">
            <div class="text-subtitle-2 d-inline">
           1 M view 
             </div>
            <div class="text-subtitle-2 d-inline">
           . 1 week ago
             </div>
        </div>

       
    
        </v-card>
        </nuxt-link>
        </v-col>

      
    </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
  }
</script>
<style scoped>
nuxt-link{
  text-decoration: none;
}
</style>

