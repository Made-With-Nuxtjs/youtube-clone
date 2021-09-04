<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
      fixed
      left
      temporary
    >
      <!-- expand-on-hover -->
      <div class="d-flex">
        <v-app-bar-nav-icon class="ml-3 mt-3" @click.stop="drawer = !drawer" />
        <nuxt-link to="/">
          <img class="logo mt-4 ml-5" src="/logo.png" alt="logo" />
        </nuxt-link>
        <nuxt-link to="/">
          <v-toolbar-title
            class="float-right mt-4 drawer-title"
            v-text="title"
          />
        </nuxt-link>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          dense
          tile
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <nav-subcriptions />
        <nav-more-from-youtube />
        <nav-setting-related />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon ml-2 @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
        <img class="logo ml-3 mr-1" src="/logo.png" alt="logo" />
      </nuxt-link>
      <nuxt-link to="/" class="linkStyle">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <Search class="pl-sm-10 d-none d-sm-flex" />
      <SearchMobile class="d-flex d-sm-none"/> 
      <v-btn icon class="d-none d-sm-flex">
        <v-icon>mdi-microphone</v-icon>
      </v-btn>
      <v-spacer />
    <!-- components -->
      <CreateVideo />
      <YoutubeApps />
      <NotificationBell/>
      <SignIn/>
      <LoggerOptions />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation class="d-flex d-sm-none pt-2" color="white" fixed>
      <div v-for="(item, i) in footer_items" :key="i">
        <v-btn class="justify-space-between">
          <span>{{ item.title }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </div>
    </v-bottom-navigation>
  </v-app>
</template>
<script>

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-compass-outline',
          title: 'Explore',
          to: '/card',
        },
        {
          icon: 'mdi-youtube-subscription',
          title: 'Subcriptions',
          to: '/profile',
        },

        {
          icon: 'mdi-play-box-multiple-outline',
          title: 'Library',
          to: '/videoView',
        },
        {
          icon: 'mdi-history',
          title: 'History',
          to: '/inspire',
        },
        {
          icon: 'mdi-clock-outline',
          title: 'Watch later',
          to: '/',
        },
        {
          icon: 'mdi-thumb-up-outline',
          title: 'Liked Videos',
          to: '/',
        },
      ],
      footer_items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-compass-outline',
          title: 'Trending',
          to: '/card',
        },
        {
          icon: 'mdi-youtube-subscription',
          title: 'Subcriptions',
          to: '/profile',
        },

        {
          icon: 'mdi-play-box-multiple-outline',
          title: 'Library',
          to: '/videoView',
        },
      ],
      miniVariant: false,
      // right: true,
      title: 'Youtube',
    }
  },
}
</script>

<style scoped>
.input {
  margin-left: 18%;
  margin-top: 30px;
  width: 10px;
}
img.logo {
  height: 25px;
  width: 29px;
  margin-right: 2px;
  margin-top: 4px;
}
.theme--dark.v-application {
  color: rgb(30 29 30);
}
.drawer-title {
  color: white;
}
.linkStyle {
  text-decoration: none;
  color: white;
}
</style>
