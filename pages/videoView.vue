<template>
  <v-container dark>
    <v-row
      no-gutters 
      dense 
    >
      <v-col
       cols="12"
        md="9" lg="9" sm="12" xs="12"
        class="flex-grow-1 flex-shrink-0"
      >
        <v-responsive :aspect-ratio="18/9">
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="600px"
                    >
                    </v-img>
                    <v-card-actions>
                      <v-btn icon>
                        <v-icon>mdi-rewind</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-play</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-fast-forward</v-icon>
                      </v-btn>
                      <v-spacer></v-spacer>
                     
                      
                      <v-btn icon>
                        <v-icon>mdi-image-filter-none</v-icon>
                      </v-btn>

                     
                      <v-btn icon>
                        <v-icon>mdi-checkbox-blank-outline</v-icon>
                      </v-btn>
                       <v-btn icon>
                        <v-icon>mdi-rss-box</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-fullscreen</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                   <div class="pt-3 white--text">
                    <nuxt-link to="/videoView" style="text-decoration: none; ">
                        <span class="text-subtitle-2 text-caption ">#coding </v-icon></span> 
                        </nuxt-link>
                    <nuxt-link to="/videoView" style="text-decoration: none; color: inherit;">
                        <div
                          class="text-wrap pb-4"
                          style="
                          text-decoration: none;
                          font-size: 18px;
                          font-family:Robot, Arial, sans-serif;
                          
                          "
                        >
                        Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.
                        </div>
                    </nuxt-link>
                    
                    <div class="pb-4">
                      <span  class="text-subtitle-2 d-inline text-caption"> 1 M view</span>
                      <span class="text-subtitle-2 d-inline text-caption">. 1 week ago</span>
                      <!-- right part -->
                      <v-icon class="float-right pr-2 pt-1" size="16">mdi-dots-horizontal</v-icon>
                      <v-btn class="float-right matchColor pa-0 mr-3"><v-icon class="pr-2" size="24">mdi-playlist-plus</v-icon>SAVE</v-btn>
                      <v-btn class="float-right matchColor pa-0 mr-3"><v-icon class="pr-2" size="24">mdi-share </v-icon>SHARE</v-btn>
                      <v-btn class="float-right matchColor pa-0"><v-icon class="pr-2" size="24">mdi-thumb-down </v-icon>0</v-btn>
                      <v-btn class="float-right matchColor pa-0"><v-icon class="pr-2" size="24">mdi-thumb-up</v-icon>3</v-btn>
                    </div>
                        <!-- <span class="text-subtitle-2 text-caption ">The Net Ninja  <v-icon size="12">mdi-check-circle</v-icon></span>  -->
                    
                  </div>
                    <v-divider></v-divider>
                    <div>
                     <v-row>
                       <v-col>
                         
                       </v-col>
                       <v-col>

                       </v-col>
                     </v-row>
                    </div>
                </v-col>
              </v-row>
            </v-responsive>
        </v-col>
      <v-col
      cols="12"
      md="3" lg="3" sm="12" xs="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1 pl-3"
      >
        <Category-chips/>
        <Related-video/>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import RelatedVideo from '~/components/RelatedVideo.vue'
  export default {
  components: { RelatedVideo },
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      ],
    }),
  }
</script>


<style scoped>

.matchColor {
   background-color: rgba(12, 9, 9, 0.5) !important;
   border-color: white !important;
 }
</style>




    

