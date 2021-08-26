<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="10" sm="10" offset-md="1" offset-sm="1">
        <v-card flat>
          <div class="d-inline-flex">
            <div class="d-inline-flex">
              <v-avatar size="50" class="mt-3">
                <v-img
                  src="https://randomuser.me/api/portraits/women/75.jpg"
                  alt="Nirob"
                ></v-img>
              </v-avatar>
            </div>
            <div class="d-inline pl-8 pt-4">
              <div class="font-weight-bold d-inline">
                <h3 class="align-center">The Net Ninja</h3>
              </div>

              <div class="linkStyle">
                <h6 class="font-weight-light d-block">1M Subcriber</h6>
              </div>
            </div>
          </div>
          <v-btn color="error" class="d-inline float-right mt-6">
            Subcribe
          </v-btn>
          <v-tabs color="inherit" fixed class="justify-space-between">
            <v-tab class="pr2">HOME</v-tab>
            <v-tab class="pr2">VIDEOS</v-tab>
            <v-tab class="pr2">PLAYLISTS</v-tab>
            <v-tab class="pr2">COMMUNITY</v-tab>
            <v-tab class="pr2">CHANNEL</v-tab>
            <v-tab class="pr2">ABOUT</v-tab>
            <div class="mt-2">
              <v-icon class="d-inline" size="20">mdi-magnify</v-icon>
            </div>
            <v-tab-item>
              <profile-home />
            </v-tab-item>
            <v-tab-item>
              <profile-videos />
            </v-tab-item>
            <v-tab-item>
              <profile-video-play-list />
            </v-tab-item>
            <v-tab-item>
              <profile-videos />
            </v-tab-item>
            <v-tab-item>
              <profile-videos />
            </v-tab-item>
            <v-tab-item>
              <profile-videos />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>