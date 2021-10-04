<template>
  <v-container class="white--text">
    <v-row no-gutters>
      <v-col md="8" offset-md="2" dense>
        <v-expansion-panels class="matchColor">
          <v-expansion-panel flat tile>
            <v-expansion-panel-header>
              <div>
                <v-btn text class="pa-0 text--disabled">
                  <v-icon size="27"> mdi-filter-variant</v-icon>
                  <span class="capitalize">Filter</span>
                </v-btn>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row no-gutters class="my-2">
                <v-col>
                  <h5 class="text-caption">UPLOAD DATE</h5>
                  <hr />
                  <div class="text--disabled">
                    <div class="py-2 caption">Last hour</div>
                    <div class="py-2 caption">Today</div>
                    <div class="py-2 caption">This weak</div>
                    <div class="py-2 caption">This month</div>
                    <div class="py-2 caption">Last Year</div>
                  </div>
                </v-col>
                <v-col>
                  <h5 class="text-caption">TYPE</h5>
                  <hr />
                  <div class="text--disabled">
                    <div class="py-2 caption">Video</div>
                    <div class="py-2 caption">Channel</div>
                    <div class="py-2 caption">Playlist</div>
                    <div class="py-2 caption">Movie</div>
                  </div>
                </v-col>
                <v-col>
                  <h5 class="text-caption">DURATION</h5>
                  <hr />
                  <div class="text--disabled">
                    <div class="py-2 caption">Under 4 minutes</div>
                    <div class="py-2 caption">4 - 20 minutes</div>
                    <div class="py-2 caption">Over 20 minutes</div>
                  </div>
                </v-col>
                <v-col>
                  <h5 class="text-caption">FEATURES</h5>
                  <hr />
                  <div class="text--disabled">
                    <div class="py-2 caption">Live</div>
                    <div class="py-2 caption">4K</div>
                    <div class="py-2 caption">HD</div>
                    <div class="py-2 caption">Subtitles/CC</div>
                    <div class="py-2 caption">Creative Commons</div>
                    <div class="py-2 caption">360</div>
                    <div class="py-2 caption">VR180</div>
                    <div class="py-2 caption">3D</div>
                    <div class="py-2 caption">HDR</div>
                    <div class="py-2 caption">Location</div>
                    <div class="py-2 caption">Purchased</div>
                  </div>
                </v-col>
                <v-col>
                  <h5 class="text-caption">SORT BY</h5>
                  <hr />
                  <div class="text--disabled">
                    <div class="py-2 caption">Relevance</div>
                    <div class="py-2 caption">Upload date</div>
                    <div class="py-2 caption">View count</div>
                    <div class="py-2 caption">This month</div>
                    <div class="py-2 caption">Rating</div>
                  </div>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-divider class="ma-2"></v-divider>

        <div v-for="i in 5" :key="i">
          <v-row no-gutters class="mt-2">
            <v-col cols="4">
              <div>
                <v-img
                  height="202"
                  src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                ></v-img>
              </div>
            </v-col>

            <v-col cols="8" dense>
              <div class="mx-5">
                <v-icon class="float-right pt-1" size="16"
                >mdi-dots-vertical</v-icon
              >
                <NuxtLink to="/videoView" class="linkStyle">
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <h4 style="font-weight: normal">
                        <span v-bind="attrs" v-on="on">
                          Suspendisse faucibus, nunc et pellentesque egestas,
                          lacus ante convallis tellus.
                        </span>
                      </h4>
                    </template>
                    <span
                      >Suspendisse faucibus, nunc et pellentesque egestas, lacus
                      ante convallis tellus.</span
                    >
                  </v-tooltip>
                </NuxtLink>
                <NuxtLink to="/profile" class="linkStyle">
                  <div class="text--disabled">
                    <span class="d-inline text-caption">
                      1 M view</span
                    >
                    <span class="d-inline text-caption"
                      >. 1 week ago</span
                    >
                  </div>
                  <div class="mt-3 text--disabled">
                    <div class="d-inline justify-center">
                      <v-avatar size="22">
                        <v-img
                          src="https://randomuser.me/api/portraits/women/75.jpg"
                          alt="Nirob"
                        ></v-img>
                      </v-avatar>
                    </div>
                    <span class="text-caption d-inline"
                      >The Net Ninja
                      <v-icon size="12">mdi-check-circle</v-icon>
                    </span>
                  </div>
                  <span
                    class="d-inline-block text-truncate text--disabled py-2"
                    style="max-width: 575px"
                  >
                   <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio voluptates nisi illum amet accusantium eligendi deserunt blanditiis, numquam eos?</h5>
                  </span>
                </NuxtLink>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    
  </v-container>
</template>

<style scoped>
.matchColor {
  background-color: rgba(12, 9, 9, 0.5) !important;
  border-color: white !important;
}
.linkStyle {
  text-decoration: none;
  color: white;
}
</style>
