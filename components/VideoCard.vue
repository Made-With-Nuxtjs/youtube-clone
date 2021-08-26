<template>
<v-container dense>
  <v-layout row 
  class="justify-center"
   >
    <div  v-for="n in 10" :key="n">
       <v-col 
       v-for="v in 4" :key="v"
       >
      <v-card
        max-width="325"  
        flat 
        tile
        class="pa-0 "
      >
        <nuxt-link to="/videoView" style="text-decoration: none; color: inherit;">
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        >
        <v-app-bar
            flat
            tile
            color="rgba(0, 0, 0, 0)"
          >
            <v-spacer></v-spacer>
             <div class="">
            <v-tooltip left class="d-block">
            <template #activator="{ on, attrs }">
            <v-btn
            class="mt-3"
              color="white"
              icon
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-clock</v-icon>
            </v-btn>
             </template>
            <span>WATCH LATER</span>
            </v-tooltip>
            <v-tooltip left class="d-block">
            <template #activator="{ on, attrs }">
            <v-btn
              color="white"
              icon
              dark
              v-bind="attrs"
              v-on="on"
            >
             <v-icon> mdi-dialpad</v-icon>
            </v-btn>
             </template>
            <span>ADD TO QUEUE</span>
            </v-tooltip>
            </div>
          </v-app-bar>
        </v-img>
        </nuxt-link>
        <div>
          <v-row>
             <v-col
               md="2" lg="2" sm="2">
               <div class="mt-3 px-2">
                <v-avatar 
                 class="float-left  pa-2"
                 size="36">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                    alt="Nirob"
                  />
                </v-avatar>
                </div>
                </v-col> 
                <v-col md="10" lg="10" sm="10" class="ma-0 pa-0 mt-3 mb-3">
                  <div class="pl-2">
                    <v-icon class="float-right pt-4 pr-2">mdi-dots-vertical</v-icon>
                          <nuxt-link to="/videoView" style="text-decoration: none; color: inherit;">
                             <h4 class="mt-3">Nissan GTR Vs a Woman | Top Gear Festival Sydney.</h4>
                          </nuxt-link>
                          <nuxt-link to="/videoView" class="#928E92--text" style="text-decoration: none; color: inherit;">
                            <span class="text-subtitle-2 text-caption">The Net Ninja  <v-icon size="12">mdi-check-circle</v-icon></span>  
                          </nuxt-link>
                        <div>
                          <span class="text-subtitle-2 d-inline text-caption"> 1 M view</span>
                          <span class="text-subtitle-2 d-inline text-caption">. 1 week ago</span>
                      </div>
                      </div>
              </v-col> 
            </v-row>
          </div>
          </v-card>
          </v-col> 
    </div>
  </v-layout>
  </v-container>
  </template>

  






  




