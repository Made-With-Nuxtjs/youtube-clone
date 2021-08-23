<template>
<v-container dense>
  <v-layout row  cols="12" 
  class="justify-center"
   >
    <div  v-for="n in 10" :key="n">
       <v-col 
       v-for="N in 4" :key="N"
       >
      <v-card
        max-width="325"  
        flat 
        tile
        class="pa-0"
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
              cols="12" 
               md="2" lg="2" sm="2">
                <v-avatar 
                 class="float-left ma-2"
                 size="32">
                  <img
                    src="https://randomuser.me/api/portraits/women/75.jpg"
                    alt="Nirob"
                  />
                </v-avatar>
                </v-col> 
                <v-col md="10" lg="10" sm="10" ma-0 pa-0>
                    <v-icon class="float-right pt-3">mdi-dots-vertical</v-icon>
                          <nuxt-link to="/videoView" style="text-decoration: none; color: inherit;">
                             <h3>Nuxt JS beginner tutorial </h3>
                          </nuxt-link>
                          <nuxt-link to="/videoView" class="#928E92--text" style="text-decoration: none; color: inherit;">
                            <h5 class="#928E92--text">The Net Ninja  <v-icon size="12">mdi-check-circle</v-icon></h5>  
                          </nuxt-link>
                        <div>
                          <span class="text-subtitle-2 d-inline"> 1 M view</span>
                          <span class="text-subtitle-2 d-inline">. 1 week ago</span>
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



  




