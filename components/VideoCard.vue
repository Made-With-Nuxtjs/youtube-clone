<template>
  <v-container dense tile>
    <v-layout row class="justify-center">
      <div v-for="n in 10" :key="n">
        <v-col v-for="v in 4" :key="v">
          <v-card max-width="325" flat tile class="pa-0">
            <NuxtLink
              to="/videoView"
              style="text-decoration: none; color: inherit"
            >
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              >
                <v-app-bar flat tile color="rgba(0, 0, 0, 0)">
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
                          <v-icon>mdi-clock-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>WATCH LATER</span>
                    </v-tooltip>
                    <v-tooltip left class="d-block">
                      <template #activator="{ on, attrs }">
                        <v-btn color="white" icon dark v-bind="attrs" v-on="on">
                          <v-icon> mdi-dialpad</v-icon>
                        </v-btn>
                      </template>
                      <span>ADD TO QUEUE</span>
                    </v-tooltip>
                  </div>
                </v-app-bar>
              </v-img>
            </NuxtLink>
            <div>
              <v-row no-gutters>
                <v-col cols="2">
                  <div class="mt-3 px-2">
                    <v-avatar class="float-left pa-2" size="36">
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.png"
                        alt="Nirob"
                      />
                    </v-avatar>
                  </div>
                </v-col>
                <v-col cols="10" class="ma-0 pa-0 mt-3 mb-3">
                  <div class="pl-2">
                    <div class="text-center">
                      <!-- use-Componets -->
                      <DotsMenu />
                    </div>
                    <NuxtLink
                      to="/videoView"
                      style="text-decoration: none; color: inherit"
                    >
                      <h4 class="mt-3">
                        Nissan GTR Vs a Woman | Top Gear Festival Sydney.
                      </h4>
                    </NuxtLink>
                    <NuxtLink
                      to="/videoView"
                      class="#928E92--text"
                      style="text-decoration: none; color: inherit"
                    >
                      <span class="text-subtitle-2 text-caption d-sm-flex"
                        >The Net Ninja
                        <v-icon size="10">mdi-check-circle</v-icon></span
                      >
                    </NuxtLink>
                    <div class="d-inline-flex">
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
            </div>
          </v-card>
        </v-col>
      </div>
    </v-layout>
  </v-container>
</template>



  






  




