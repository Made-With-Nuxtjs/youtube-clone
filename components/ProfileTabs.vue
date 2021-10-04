<template class="matchColor">
  <v-container >
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

              <div class="text-decoration-none white--text">
                <h6 class="font-weight-light d-block">1M Subcriber</h6>
              </div>
            </div>
          </div>
          <v-btn color="error" class="d-inline float-right mt-6 text-uppercase">
            Subcribe
          </v-btn>
          <v-tabs color="inherit" fixed class="justify-space-between">
            <v-tab class="pr-10 text-uppercase">Home</v-tab>
            <v-tab class="pr-10 text-uppercase">Videos</v-tab>
            <v-tab class="pr-10 text-uppercase">PLAYLISTS</v-tab>
            <v-tab class="pr-10 text-uppercase">COMMUNITY</v-tab>
            <v-tab class="pr-10 text-uppercase">CHANNEL</v-tab>
            <v-tab class="pr-10 text-uppercase">About</v-tab>
            <div class="mt-2">
             <NuxtLink to="/searchDetails" class="text-decoration-none">
              <v-icon class="d-inline" size="20">mdi-magnify</v-icon>
             </NuxtLink>
            </div>
            <v-tab-item>
              <ProfileHome />
            </v-tab-item>
            <v-tab-item>
              <ProfileVideos />
            </v-tab-item>
            <v-tab-item>
              <ProfileVideoPlayList />
            </v-tab-item>
            <v-tab-item>
              <ProfileCommunity />
            </v-tab-item>
            <v-tab-item>
              <ProfileVideos />
            </v-tab-item>
            <v-tab-item>
              <ProfileAbout />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.matchColor {
  background-color: rgba(19, 17, 17, 0.959) !important;
  border-color: #131111;
  
}
</style>