<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <v-card
          class="pa-2"
          tile
          flat
        >
            <div class="mb-5">
                <h4>Description</h4>
            </div>
            <div class="mb-8">
               <p>I teach you how to create cross-platform apps (for web, iOS, Android, Mac & Windows) using technologies such as Vue.js, Vuex, Firebase & Quasar Framework.</p>
            </div>
          <v-divider class="pt-8 pb-8"></v-divider>
            <div class="mb-8">
                <h4>Details</h4>
            </div>
            <div class="mb-8">
                <v-row>
                    <v-col cols="4" >
                        <div class="pb-8">
                            <span class="d-inline caption text--disabled">For business inquiries:</span>
                        </div>
                        <div class="pb-8">
                            <span class="d-inline caption text--disabled">Location:</span>
                        </div>
                    </v-col>
                    <v-col cols="4">
                        <div class="pb-8">
                            <span class="d-inline caption text--disabled">nirob@and.com.bd</span>
                        </div>
                        <div class="pb-8">
                            <span class="d-inline caption text--disabled">Bangladesh</span>
                        </div>
                    </v-col>
                </v-row>
            </div>
          <v-divider class="pt-8 pb-8"></v-divider>
            <div class="mb-8">
                <h4>Links</h4>
            </div>
            <div class="mb-8">
                
              <v-row>
                    <v-col cols="4" >
                        <div class="pb-8">
                             <nuxt-link to="/videoView" class="linkStyle">
                            <span class="d-inline caption">Course</span>
                             </nuxt-link>
                        </div>
                        <div class="pb-8">
                            <nuxt-link to="/videoView" class="linkStyle">
                            <span class="d-inline caption">Blog</span>
                             </nuxt-link>
                           
                        </div>
                    </v-col>
                    <v-col cols="4">
                        <div class="pb-8">
                            <nuxt-link to="/videoView" class="linkStyle">
                            <span class="d-inline caption">Facebook</span>
                             </nuxt-link>
                        </div>
                        <div class="pb-8">
                            <nuxt-link to="/videoView" class="linkStyle">
                            <span class="d-inline caption">Twitter</span>
                             </nuxt-link>
                        </div>
                    </v-col>
                </v-row>
            </div>
          <v-divider class="pt-8 pb-8"></v-divider>
        </v-card>
      </v-col>
      <v-col
        cols="4"
      >
        <v-card
          class="pa-2 pl-16"
        flat
          tile
        >
          <div class="mb-3">
                <h4>Status</h4>
            </div>
          <v-divider></v-divider>
          <div class="mb-3">
                <h5 class="font-weight-regular pt-2 pb-2">Joined Oct 7, 2014</h5>
            </div>
          <v-divider></v-divider>
          <div class="mb-3">
                <h5 class="font-weight-regular pt-2 pb-2">87,762,161 views</h5>
            </div>
          <v-divider></v-divider>
          <div class="pt-5">
             <v-icon size="22" >mdi-flag-outline</v-icon>

          </div>
        </v-card>
      </v-col>
    </v-row>
      
  </v-container>
</template>

<style scoped>
.linkStyle {
  text-decoration: none;
}
</style>

