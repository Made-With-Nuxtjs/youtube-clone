<template>
  <v-container dark>
    <v-row no-gutters dense>
      <v-col cols="12" md="9" class="flex-grow-1 flex-shrink-0">
        <v-responsive :aspect-ratio="18 / 9">
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card>
                <v-img :src="card.src" height="600px" />
                <v-card-actions bottom>
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
              <div dense tile>
                <nuxt-link to="/videoView" class="linkStyle">
                  <span class="text-subtitle-2 font-weight-light"
                    ># coding
                  </span>
                </nuxt-link>

                <!-- <div class="float-left"> -->
                  <nuxt-link to="/videoView" class="linkStyle">
                    <div
                      class="text-wrap pb-4 linkStyle"
                      style="font-family: Robot, Arial, sans-serif"
                    >
                      Suspendisse faucibus, nunc et pellentesque egestas, lacus
                      ante convallis tellus.
                    </div>
                    <span
                      class="text-subtitle-2 d-inline-flex font-weight-thin"
                    >
                      1 M view</span
                    >
                    <span class="text-subtitle-2 font-weight-thin  d-inline-flex d-none"
                      >. 1 week ago</span
                    >
                  </nuxt-link>
                <!-- </div> -->
                <!-- right part -->
                <div dense tile class="float-right">
                  <v-icon class="float-right pr-2 pt-1" size="16"
                    >mdi-dots-horizontal</v-icon
                  >
                  <v-btn class="float-right matchColor pa-0 mr-3"
                    ><v-icon class="pr-2" size="24">mdi-playlist-plus</v-icon
                    >SAVE</v-btn
                  >
                  <v-btn class="float-right matchColor pa-0 mr-3"
                    ><v-icon class="pr-2" size="24">mdi-share </v-icon
                    >SHARE</v-btn
                  >
                  <v-btn class="float-right matchColor pa-0"
                    ><v-icon class="pr-2" size="24">mdi-thumb-down </v-icon
                    >0</v-btn
                  >
                  <v-btn class="float-right matchColor pa-0"
                    ><v-icon class="pr-2" size="24">mdi-thumb-up</v-icon
                    >3</v-btn
                  >
                </div>
              </div>

              <v-divider class="my-2"></v-divider>
              <div>
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
                <div class="mx-4">
                  <nuxt-link
                    to="/videoView"
                    class="font-weight-bold d-inline pl-3 linkStyle"
                  >
                    <nuxt-link to="/profile" class="linkStyle">
                      <span>The Net Ninja </span>
                    </nuxt-link>
                    <v-icon size="12" class="d-inline">mdi-check-circle</v-icon>
                  </nuxt-link>
                  <v-btn depressed color="error" class="d-inline float-right">
                    Subcribe
                  </v-btn>
                  <div class="linkStyle">
                    <h6 class="font-weight-light d-block pl-8">1M Subcriber</h6>
                  </div>
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
                  </div>

                  <v-divider></v-divider>
                  <div class="d-inline-flex">
                    <div
                      class="text-wrap pb-4 white--text pr-2"
                      style="
                        font-size: 13px;
                        font-family: Robot, Arial, sans-serif;
                      "
                    >
                      <span class="d-inline-flex white--text pr-2">10</span>
                      COMMENTS
                    </div>
                  </div>
                  <div class="d-inline-flex white--text my-6 mx-2">
                    <span class="d-inline-flex white--text">
                      <v-btn icon>
                        <v-icon>mdi-sort-variant</v-icon>
                      </v-btn>
                    </span>
                    <span
                      class="d-inline-flex white--text mt-3"
                      style="
                        font-size: 13px;
                        font-family: Robot, Arial, sans-serif;
                      "
                      >SORT BY</span
                    >
                  </div>
                  <div>
                    <div class="d-inline justify-center">
                      <v-avatar size="36">
                        <v-img
                          src="https://randomuser.me/api/portraits/women/75.jpg"
                          alt="Nirob"
                        ></v-img>
                      </v-avatar>
                    </div>
                    <div class="d-inline white--text">
                      <span class="font-weight-thin pl-8"
                        >commenting publicly as Nirob (Logging User).</span
                      >
                      <v-divider inset></v-divider>
                      <h5 class="font-weight-light ml-2 pt-5 pl-16">
                        By completing this action you are creating a
                        <nuxt-link to="/">channel</nuxt-link>
                        and agree to
                        <nuxt-link to="/">Youtube's term of service</nuxt-link>.
                      </h5>
                    </div>
                  </div>

                  <div class="pt-7">
                    <div class="d-inline-flex white--text">
                      <div class="d-inline justify-center">
                        <v-avatar size="36">
                          <v-img
                            src="https://randomuser.me/api/portraits/women/75.jpg"
                            alt="Nirob"
                          ></v-img>
                        </v-avatar>
                      </div>
                    </div>
                    <div class="d-inline-flex">
                      <div class="white--text">
                        <div class="d-flex white--text pl-8">
                          <h5>hello mr</h5>
                        </div>
                        <div class="d-flex white--text pl-8">
                          <h5>hello mr xyc</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
      <v-col
        cols="12"
        md="3"
        style="min-width: 100px"
        class="flex-grow-0 flex-shrink-1 pl-3"
      >
        <Category-chips />
        <Related-video />
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
      {
        title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12,
      },
    ],
    // --------list of link//
    items: [
      {
        details: 'mdi-inbox',
        text: 'Inbox',
      },
      {
        details: 'mdi-star',
        text: 'Star',
      },
      {
        details: 'mdi-send',
        text: 'Send',
      },
      {
        details: 'mdi-email-open',
        text: 'Drafts',
      },
    ],
    show: false,
  }),
}
</script>

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
