<template>

  <!-- <v-container > -->
    <flex-row dense
    class="overflow-hidden"
    absolute
      color="indigo darken-2"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
         <v-responsive>
            <div class="text-center">
                <v-chip
                class="ma-2 " 
                col="12"
                >
                All
                </v-chip>
                <v-chip
                class="ma-2"
                v-for="n in 19" :key="n"
                >
                Default
                </v-chip>
                
            </div>
     </v-responsive>
    </flex-row>
  <!-- </v-container> -->
  
</template>
<script>
export default{
     data(){
    return {
         
           
          
      }
  }
}
</script>





<style scoped>

</style>