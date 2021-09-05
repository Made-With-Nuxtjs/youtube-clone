<template>
  <v-container dark>
    <v-row no-gutters tile>
      <v-col cols="12" md="9">
        <!-- visible sx/...only //down card-->
        <v-card class="sticky-card hidden-sm-and-up">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            class="white--text align-end pa-0"
          >
            <v-card-actions dense tile>
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
          </v-img>
        </v-card>

        <!-- hidden sx/sm...only //down card-->
        <v-card class="">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            max-height="600px"
            class="white--text align-end"
          >
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
          </v-img>
        </v-card>
        <div dense tile class="after-sticky">
          <nuxt-link to="/videoView" class="linkStyle">
            <span class="text-subtitle-2 font-weight-light"># coding </span>

            <div
              class="text-wrap pb-4 linkStyle"
              style="font-family: Robot, Arial, sans-serif"
            >
              Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
              convallis tellus.
            </div>
          </nuxt-link>

          <div class="d-flex justify-space-between white--text">
            <div class="d-inline-flex d-sm-flex">
              <span class="text-subtitle-2 font-weight-thin"> 1 M view</span>
              <span class="text-subtitle-2 font-weight-thin hidden-md-and-down"
                >. 1 week ago</span
              >
            </div>

            <div class="d-sm-flex">
              <v-btn class="matchColor pa-0">
                <v-icon class="pr-1 pa-0">mdi-thumb-up-outline</v-icon>
                <span>3</span>
              </v-btn>
              <v-btn class="matchColor pa-0">
                <span class=""
                  ><v-icon class="d-md-flex pr-1 pa-0"
                    >mdi-thumb-down-outline</v-icon
                  ></span
                >
                <span class="">3</span>
              </v-btn>
              <v-btn class="matchColor pa-0">
                <v-icon class="pa-0">mdi-share </v-icon>
                <span class="ml-2">SHARE</span></v-btn
              >
              <v-btn class="matchColor pa-0 d-none d-sm-flex">
                <v-icon class="pa-0">mdi-playlist-plus</v-icon>
                <span class="ml-2">SAVE</span>
              </v-btn>
              <!-- -----Dotsmenu----- -->
              <v-menu offset-y :nudge-width="200">
                <template #activator="{ on, attrs }">
                  <v-icon
                    class="float-right font-weight-thin pt-1 pl-2"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-dots-horizontal</v-icon
                  >
                </template>
                <v-list>
                  <a class="text-decoration-none" href="#">
                    <v-list-item
                      v-for="(item, index) in dots_menu"
                      :key="index"
                    >
                      <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-action>
                      <v-list-item-title class="subtitle-2"
                        >{{ item.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </a>
                </v-list>
              </v-menu>
              <!-- -----Dotsmenu----- -->
            </div>
          </div>
        </div>

        <v-divider></v-divider>
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
          <div class="pl-8 text-wrap white--text d-none d-sm-flex">
            <span class="mb-4">
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda, qui.Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Assumenda, qui.
              </div>
              <v-expand-transition class="bottom">
                <div v-show="show">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, qui.Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Assumenda, qui. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Assumenda, qui.Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Assumenda, qui.
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </div>
              </v-expand-transition>
              <div
                color="orange lighten-2"
                class="d-flex"
                text
                @click="show = !show"
              >
                <v-btn text class="pa-0">
                  <span>{{ show ? 'SHOW LESS' : 'SHOW MORE' }}</span>
                </v-btn>
              </div>
            </span>
          </div>

          <v-divider></v-divider>
          <div class="d-inline-flex d-none d-sm-inline">
            <div
              class="text-wrap pb-4 white--text pr-2"
              style="font-size: 13px"
            >
              <span class="d-inline-flex white--text pr-2">10</span>
              COMMENTS
            </div>
          </div>
          <v-divider class="d-flex d-sm-none white--text mb-2"></v-divider>
          <div class="d-none d-sm-flex white--text my-6 mx-2">
            <span class="d-inline-flex white--text">
              <v-btn icon>
                <v-icon>mdi-sort-variant</v-icon>
              </v-btn>
            </span>
            <span class="d-inline-flex white--text mt-3" style="font-size: 13px"
              >SORT BY</span
            >
          </div>
          <div class="d-none d-sm-flex">
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

          <h5 class="hidden-xs-and-up white--text mb-3">Up-Next</h5>

          <div class="pt-7 d-none d-sm-flex">
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
      </v-col>

      <v-col
        cols="12"
        md="3"
        style="min-width: 100px"
        class="flex-grow-0 flex-shrink-1 pl-3"
      >
        <Category-chips class="d-none d-sm-flex" />
        <Related-video />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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
    // ......Dotsmenu......//
    dots_menu: [
      { icon: 'mdi-flag-outline', title: 'Report' },
      { icon: 'mdi-newspaper', title: 'Open transcript' },
    ],

    show: false,
  }),
}
</script>

<style scoped>
/* its out of vuetify */

.matchColor {
  background-color: rgba(12, 9, 9, 0.5) !important;
  border-color: white !important;
}
.linkStyle {
  text-decoration: none;
  color: white;
}
.sticky-card {
  /* width: 344px; */
  position: fixed;
  top: 180px;
  z-index: 1;
  /* centering */
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}

/* .after-sticky {
  margin-top: 20px;
} */
</style>
