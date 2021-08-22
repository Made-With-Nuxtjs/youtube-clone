<template>

  <v-row justify="center" align="center">
     
    <v-col cols="12" sm="12" md="12"  class="ma-0">
   
     <category-chips dense/>
      <video-card dense/>
      
    </v-col>
  </v-row>
 
</template>
<script>
import VideoCard from '../components/VideoCard'
import CategoryChips from '../components/CategoryChips'

export default {
  components: { VideoCard, CategoryChips },
 
}
</script>

