<template>
  <v-container >
    <v-row no-gutters >
      <v-col cols="8" md="8" sm="12">
        <v-card
          outlined
          tile
          class="pa-2 mb-6"
        >
                <div class="justify-center pt-3">
                  <nuxt-link to="/profile" class="linkStyle">
                    <v-avatar class="float-left" size="36">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/john.png"
                        alt="Nirob"
                      ></v-img>
                    </v-avatar>
                  </nuxt-link>
                </div>

            <div class="text-wrap mx-4">
                  <nuxt-link to="/videoView" class="linkStyle">
                    <div class="font-weight-bold d-inline pl-3">
                      <nuxt-link to="/profile" class="linkStyle">
                        <span class="caption">The Net Ninja </span>
                      </nuxt-link>
                      <span class="d-inline caption text--disabled pa-2"
                        >3 month ago</span >
                    </div>
                  </nuxt-link>
                  
                   <div class="pl-8 text-wrap white--text">
                    <span class="mb-4">
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Assumenda, qui.
                      </div>
                      <v-expand-transition class="bottom">
                        <div v-show="show">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Assumenda, qui. Lorem
                          ipsum, dolor sit amet consectetur adipisicing elit.
                          Assumenda, qui.Lorem ipsum, dolor sit amet consectetur
                          adipisicing elit. Assumenda, qui. I'm a thing. But,
                          like most politicians, he promised more than he could
                          deliver. You won't have time for sleeping, soldier,
                          not with all the bed making you'll be doing. Then
                          we'll go with that data file! Hey, you add a one and
                          two zeros to that or we walk! You're going to do his
                          laundry? I've got to find a way to escape.
                        </div>
                      </v-expand-transition>
                    </span>
                    <div color="orange lighten-2" text @click="show = !show">
                      <v-btn text class="pa-0">
                        <span>{{ show ? 'SHOW LESS' : 'SHOW MORE' }}</span>
                      </v-btn>
                    </div>
                     <div class="font-weight-thin">
                       <v-icon class="pr-2" size="13">mdi-thumb-up-outline</v-icon>
                        <span class="pr-2"> 
                            10
                        </span>
                       <v-icon class="pr-2" size="13">mdi-thumb-down-outline</v-icon>
                       <span class="pr-2"> 
                            0
                        </span>
                       <v-icon class="pr-2" size="13">mdi-comment-text-outline</v-icon>
                       <span class="pr-2"> 
                            0
                        </span>
                    </div>
                   </div>
                  
                </div>


        </v-card>
      </v-col>
     
      
      <v-col cols="8" md="8" sm="12">
        <v-card
          outlined
          tile
          class="pa-2 mb-6"
        >
                <div class="justify-center pt-3">
                  <nuxt-link to="/profile" class="linkStyle">
                    <v-avatar class="float-left" size="36">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/john.png"
                        alt="Nirob"
                      ></v-img>
                    </v-avatar>
                  </nuxt-link>
                </div>

                <div class="text-wrap mx-4">
                  <nuxt-link to="/videoView" class="linkStyle">
                    <div class="font-weight-bold d-inline pl-3">
                      <nuxt-link to="/profile" class="linkStyle">
                        <span class="caption">The Net Ninja </span>
                      </nuxt-link>
                      <span class="d-inline caption text--disabled pa-2"
                        >3 month ago</span >
                    </div>
                  </nuxt-link>
                  
                   <div class="pl-8 text-wrap white--text">
                    <span class="mb-4">
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Assumenda, qui.
                      </div>
                      <v-expand-transition class="bottom">
                        <div v-show="show">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Assumenda, qui. Lorem
                          ipsum, dolor sit amet consectetur adipisicing elit.
                          Assumenda, qui.Lorem ipsum, dolor sit amet consectetur
                          adipisicing elit. Assumenda, qui. I'm a thing. But,
                          like most politicians, he promised more than he could
                          deliver. You won't have time for sleeping, soldier,
                          not with all the bed making you'll be doing. Then
                          we'll go with that data file! Hey, you add a one and
                          two zeros to that or we walk! You're going to do his
                          laundry? I've got to find a way to escape.
                        </div>
                      </v-expand-transition>
                    </span>
                    <div color="orange lighten-2" text @click="show = !show">
                      <v-btn text class="pa-0">
                        <span>{{ show ? 'SHOW LESS' : 'SHOW MORE' }}</span>
                      </v-btn>
                    </div>
                        <div>
                            <v-card max-width="1000" class="pb-2 cardColor">
                                <v-row>
                                <v-col md="3" sm="3" lg="3">
                                    <v-img
                                        height="94"
                                        width="168"
                                        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                                    ></v-img>
                                   
                                </v-col>

                                <v-col md="9" sm="9" lg="9" dense>
                                    <div>
                                        <v-icon class="float-right pr-2 pt-1" size="16"
                                            >mdi-dots-vertical</v-icon
                                        >
                                        <nuxt-link to="/videoView" class="linkStyle">
                                            <v-tooltip bottom>
                                            <template #activator="{ on, attrs }">
                                                <h4 style="font-weight: normal">
                                                <span
                                                    class="d-inline "
                                                    style="max-width: 255px"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    Suspendisse faucibus, nunc et pellentesque egestas ok good.
                                                   
                                                </span>
                                                </h4>
                                            </template>
                                            <span
                                                >Suspendisse faucibus, nunc et pellentesque egestas, lacus
                                                ante convallis tellus.</span
                                            >
                                            </v-tooltip>
                                        </nuxt-link>
                                    <nuxt-link to="/profile" class="linkStyle">
                                        <span class="text-subtitle-2 text-caption"
                                        >The Net Ninja
                                        <v-icon size="12">mdi-check-circle</v-icon></span
                                        >
                                    </nuxt-link>
                                    <div>
                                        <span class="text-subtitle-2 d-inline text-caption">
                                        1 M view</span
                                        >
                                        <span class="text-subtitle-2 d-inline text-caption"
                                        >. 1 week ago</span
                                        >
                                    </div>
                                    </div>
                                </v-col>
                                
                                </v-row>
                            </v-card>
                        </div>
                        <div class="font-weight-thin">
                        <v-icon class="pr-2" size="13">mdi-thumb-up-outline</v-icon>
                            <span class="pr-2"> 
                                10
                            </span>
                        <v-icon class="pr-2" size="13">mdi-thumb-down-outline</v-icon>
                        <span class="pr-2"> 
                                0
                            </span>
                        <v-icon class="pr-2" size="13">mdi-comment-text-outline</v-icon>
                        <span class="pr-2"> 
                                0
                            </span>
                        </div>
                   </div>
                  
                </div>


        </v-card>
      </v-col>

       <v-col cols="8" md="8" sm="12">
        <v-card
          outlined
          tile
          class="pa-2 mb-6"
        >
                <div class="justify-center pt-3">
                  <nuxt-link to="/profile" class="linkStyle">
                    <v-avatar class="float-left" size="36">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/john.png"
                        alt="Nirob"
                      ></v-img>
                    </v-avatar>
                  </nuxt-link>
                </div>

            <div class="text-wrap mx-4">
                  <nuxt-link to="/videoView" class="linkStyle">
                    <div class="font-weight-bold d-inline pl-3">
                      <nuxt-link to="/profile" class="linkStyle">
                        <span class="caption">The Net Ninja </span>
                      </nuxt-link>
                      <span class="d-inline caption text--disabled pa-2"
                        >3 month ago</span >
                    </div>
                  </nuxt-link>
                  
                   <div class="pl-8 text-wrap white--text">
                    <span class="mb-4">
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Assumenda, qui.
                      </div>
                      <v-expand-transition class="bottom">
                        <div v-show="show">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Assumenda, qui. Lorem
                          ipsum, dolor sit amet consectetur adipisicing elit.
                          Assumenda, qui.Lorem ipsum, dolor sit amet consectetur
                          adipisicing elit. Assumenda, qui. I'm a thing. But,
                          like most politicians, he promised more than he could
                          deliver. You won't have time for sleeping, soldier,
                          not with all the bed making you'll be doing. Then
                          we'll go with that data file! Hey, you add a one and
                          two zeros to that or we walk! You're going to do his
                          laundry? I've got to find a way to escape.
                        </div>
                      </v-expand-transition>
                    </span>
                    <div color="orange lighten-2" text @click="show = !show">
                      <v-btn text class="pa-0">
                        <span>{{ show ? 'SHOW LESS' : 'SHOW MORE' }}</span>
                      </v-btn>
                    </div>
                    <div>
                        hello
                    </div>
                     <div class="font-weight-thin">
                       <v-icon class="pr-2" size="13">mdi-thumb-up-outline</v-icon>
                        <span class="pr-2"> 
                            10
                        </span>
                       <v-icon class="pr-2" size="13">mdi-thumb-down-outline</v-icon>
                       <span class="pr-2"> 
                            0
                        </span>
                       <v-icon class="pr-2" size="13">mdi-comment-text-outline</v-icon>
                       <span class="pr-2"> 
                            0
                        </span>
                    </div>
                   </div>
                  
                </div>


        </v-card>
      </v-col>

       <v-col cols="8" md="8" sm="12">
        <v-card
          outlined
          tile
          class="pa-2 mb-6"
        >
                <div class="justify-center pt-3">
                  <nuxt-link to="/profile" class="linkStyle">
                    <v-avatar class="float-left" size="36">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/john.png"
                        alt="Nirob"
                      ></v-img>
                    </v-avatar>
                  </nuxt-link>
                </div>

            <div class="text-wrap mx-4">
                  <nuxt-link to="/videoView" class="linkStyle">
                    <div class="font-weight-bold d-inline pl-3">
                      <nuxt-link to="/profile" class="linkStyle">
                        <span class="caption">The Net Ninja </span>
                      </nuxt-link>
                      <span class="d-inline caption text--disabled pa-2"
                        >3 month ago</span >
                    </div>
                  </nuxt-link>
                  
                   <div class="pl-8 text-wrap white--text">
                    <span class="mb-4">
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Assumenda, qui.
                      </div>
                      <v-expand-transition class="bottom">
                        <div v-show="show">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Assumenda, qui.Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Assumenda, qui. Lorem
                          ipsum, dolor sit amet consectetur adipisicing elit.
                          Assumenda, qui.Lorem ipsum, dolor sit amet consectetur
                          adipisicing elit. Assumenda, qui. I'm a thing. But,
                          like most politicians, he promised more than he could
                          deliver. You won't have time for sleeping, soldier,
                          not with all the bed making you'll be doing. Then
                          we'll go with that data file! Hey, you add a one and
                          two zeros to that or we walk! You're going to do his
                          laundry? I've got to find a way to escape.
                        </div>
                      </v-expand-transition>
                    </span>
                    <div color="orange lighten-2" text @click="show = !show">
                      <v-btn text class="pa-0">
                        <span>{{ show ? 'SHOW LESS' : 'SHOW MORE' }}</span>
                      </v-btn>
                    </div>
                    <div>
                        hello
                    </div>
                     <div class="font-weight-thin">
                       <v-icon class="pr-2" size="13">mdi-thumb-up-outline</v-icon>
                        <span class="pr-2"> 
                            10
                        </span>
                       <v-icon class="pr-2" size="13">mdi-thumb-down-outline</v-icon>
                       <span class="pr-2"> 
                            0
                        </span>
                       <v-icon class="pr-2" size="13">mdi-comment-text-outline</v-icon>
                       <span class="pr-2"> 
                            0
                        </span>
                    </div>
                   </div>
                  
                </div>


        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

export default {
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>
.theme--dark.v-card[data-v-174a499b] {
    background-color: #1e1e1e;
    color: #FFFFFF;
    }

.theme--dark.v-card{
    background-color: #121212;
    color: #FFFFFF;
}
.linkStyle {
  text-decoration: none;
  color: white;
}
</style>


