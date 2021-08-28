<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="12" sm="12">
        <v-card class="pa-2" flat tile>
          <v-row no-gutters>
            <v-col md="4" sm="4">
              <v-card class="pa-2" flat tile>
                <v-img
                  height="230"
                  width="424"
                  src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                >
                  <v-icon class="float-end pr-2 pt-1" size="16"
                    >mdi-dots-vertical</v-icon
                  >
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <h4 style="font-weight: normal">
                        <span
                          class="d-block text-truncate"
                          style="max-width: 255px"
                          v-bind="attrs"
                          v-on="on"
                        >
                          Suspendisse faucibus, nunc et pellentesque egestas.
                        </span>
                      </h4>
                    </template>
                    <span
                      >Suspendisse faucibus, nunc et pellentesque egestas, lacus
                      ante convallis tellus.</span
                    >
                  </v-tooltip>

                  <v-card-actions style="margin-top: 145px">
                    <v-btn icon>
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-volume-high</v-icon>
                    </v-btn>
                    <h6>02:2/25:20</h6>
                    <h6 pl-1>su..</h6>
                    <v-btn icon>
                      <v-icon>mdi-code-greater-than</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-checkbox-blank-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-rss-box</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-brightness-5</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-fullscreen</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-col>
            <v-col md="4" sm="4">
              <v-card class="pa-2" flat tile>
                <div class="font-weight-bold d-inline">
                  <nuxt-link to="/profile" class="linkStyle">
                    <h4 class="text-wrap pl-4">
                      How To Create a Successfully APP & Quit My Job.
                    </h4>
                  </nuxt-link>
                </div>
                <div class="linkStyle">
                  <h6 class="font-weight-light d-block pl-4 pa-2">
                    4,574 views . 5 months ago
                  </h6>
                </div>
                <div class="pl-4 text-wrap white--text">
                  <span class="mb-2">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, qui.Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Assumenda, qui.
                    </p>
                    
                  </span>
                   <nuxt-link to="/videoView" class="linkStyle">
                  <div text @click="show = !show">
                    <v-btn text class="pa-0">
                      <span>{{ show ? 'READ LESS' : 'READ MORE' }}</span>
                    </v-btn>
                  </div>
                   </nuxt-link>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row class="fill-height">
            <div class="pa-4">
              <div class="d-inline">Uploads</div>
              <v-icon class="d-inline pa-2" size="20">mdi-play</v-icon>
              <h5 class="d-inline pa-2">PLAY ALL</h5>
            </div>

            <v-sheet max-width="100%" flat>
              <v-slide-group multiple class="absulate">
                <v-slide-item v-for="n in 20" :key="n">
                  <v-card class="mx-auto pa-2">
                    <v-img
                      class="white--text align-end"
                      height="120px"
                      width="220px"
                      src="https://picsum.photos/350/165"
                    >
                    </v-img>

                    <h4 class="pb-0 pt-2 text-truncate">Title Number 10</h4>
                        <h5 class="text--primary">Make Apps with Danny</h5>
                    <h6 class="text--primary  pt-2">
                     
                      <span class="font-weight-thin">1.5K View </span>.<span
                        class="font-weight-thin" > 2 month ago</span>
                    </h6>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-row>

          <v-row class="fill-height">
            <div class="pa-4">
              <div class="d-inline">APPS IN 30 MINUTES!</div>
              <v-icon class="d-inline pa-2" size="20">mdi-play</v-icon>
              <h5 class="d-inline pa-2">PLAY ALL</h5>
            </div>

            <v-sheet max-width="100%" flat>
              <v-slide-group multiple>
                <v-slide-item v-for="n in 20" :key="n">
                  <v-card class="mx-auto pa-2">
                    <v-img
                      class="white--text align-end"
                      height="120px"
                      width="220px"
                      src="https://picsum.photos/350/165?random"
                    >
                    </v-img>

                    <h4 class="pb-0 pt-2 text-truncate">Title Number 10</h4>
                        <h5 class="text--primary">Make Apps with Danny</h5>
                    <h6 class="text--primary pt-2">
                      <span class="font-weight-thin ">1.5K View </span>.<span class="font-weight-thin" > 2 month ago</span>
                    </h6>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-row>
          <v-divider></v-divider>
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
.matchColor {
  background-color:#131111;
  border-color: white !important;
}
.linkStyle {
  text-decoration: none;
  color: white;
}
</style>