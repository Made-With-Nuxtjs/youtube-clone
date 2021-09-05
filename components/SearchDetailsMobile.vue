<template>
    <v-row>
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
              <v-row class="my-2">
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
          <v-row>
            <v-col cols="6">
              <div>
                <v-img
                  max-height="100"
                  max-width="200"
                  src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                ></v-img>
              </div>
            </v-col>

            <v-col cols="6" dense>
              <div>
                <v-icon class="float-right pr-2 pt-1" size="16"
                >mdi-dots-vertical</v-icon
              >
                <nuxt-link to="/videoView" class="linkStyle">
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <h4 style="font-weight: normal">
                        <span  v-bind="attrs" v-on="on" >
                          Suspendisse faucibus, nunc et pellentesque.
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
                  <div class="text--disabled ma-0">
                    <h6 class="d-inline text-caption">
                      1 M view</h6>
                    <h6 class="d-inline text-caption"
                      >. 1 week ago</h6>
                  </div>
                  <div class="ma-0 text--disabled">
                    <h6 class="text-caption d-inline"
                      >The Net Ninja
                      <v-icon size="12">mdi-check-circle</v-icon>
                    </h6>
                  </div>
                 
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    
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
