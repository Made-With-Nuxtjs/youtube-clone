<template>
  <v-container dark>
    <v-row no-gutters tile>
      <v-col cols="12" md="9">
        <!-- visible sx/...only //down card-->
        <v-card class="sticky-card hidden-xs-and-up hidden-sm-and-up">
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
        <v-card>
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
        <div dense tile class="after-sticky pt-2">
          <NuxtLink to="/videoView" class="text-decoration-none white--text">
            <span class="text-subtitle-2 font-weight-light"># coding </span>

            <div
              class="text-wrap pb-4 text-decoration-none white--text"
              style="font-family: Robot, Arial, sans-serif"
            >
              Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
              convallis tellus.
            </div>
          </NuxtLink>

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
                <span><v-icon class="d-md-flex pr-1 pa-0"
                    >mdi-thumb-down-outline</v-icon
                  ></span
                >
                <span>3</span>
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
            <NuxtLink to="/profile" class="text-decoration-none white--text">
              <v-avatar class="float-left" size="36">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.png"
                  alt="Nirob"
                ></v-img>
              </v-avatar>
            </NuxtLink>
          </div>

          <NuxtLink
            to="/videoView"
            class="font-weight-bold d-inline pl-3 text-decoration-none white--text"
          >
            <NuxtLink to="/profile" class="text-decoration-none white--text">
              <span>The Net Ninja </span>
            </NuxtLink>
            <v-icon size="12" class="d-inline">mdi-check-circle</v-icon>
          </NuxtLink>
          <v-btn depressed color="error" class="d-inline float-right">
            Subcribe
          </v-btn>
          <div class="text-decoration-none white--text">
            <h6 class="font-weight-light d-block ml-12">1M Subcriber</h6>
          </div>
          <div class="px-12 text-wrap white--text d-none d-sm-flex">
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

          <VideoComments/>
        </div>
      </v-col>

      <v-col
        cols="12"
        md="3"
        style="min-width: 100px"
        class="flex-grow-0 flex-shrink-1 pl-3"
      >
        <CategoryChips class="d-none d-sm-flex" />
        <RelatedVideo  class="mb-5"/>
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
.sticky-card {
  /* width: 344px; */
  position: fixed;
  top: 195px;
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
