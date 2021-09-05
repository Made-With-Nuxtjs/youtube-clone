<template>
  <div>
    <!-- Subcription nav Item-1 -->
    <v-divider></v-divider>

    <h4 class="overline pl-4 text--disabled">Subcriptions</h4>
    <v-list-item
      v-for="(item, i) in items1"
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
    <!-- </div>
  <div> -->
    <!-- MoreFrom YouTube Nav Item-2-->
    <v-divider></v-divider>

    <h4 class="overline pl-4 text--disabled">More From YouTube</h4>
    <v-list-item
      v-for="(item, i) in items2"
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

    <!-- Setting Realated Nav - Items -3 -->
    <v-divider></v-divider>
    <v-list-item
      v-for="(item, i) in items3"
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
    <v-divider></v-divider>
    <div class="caption text--disabled pl-4 pt-2">
      <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</p>
      <p class="pb-6">
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
      </p>
    </div>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items1: [
        {
          icon: 'mdi-thumb-up-outline',
          title: 'Vue Screencast',
          to: '/',
        },
        {
          icon: 'mdi-youtube-gaming',
          title: 'ICTLayer',
          to: '/',
        },
        {
          icon: 'mdi-access-point',
          title: 'Coding step by step',
          to: '/',
        },
        {
          icon: 'mdi-trophy-outline',
          title: 'Coding with Danny',
          to: '/',
        },
        {
          icon: 'mdi-decagram-outline',
          title: 'Hell World',
          to: '/',
        },
      ],
      items2: [
        {
          icon: 'mdi-youtube-gaming',
          title: 'Gaming',
          to: '/',
        },
        {
          icon: 'mdi-access-point',
          title: 'Live',
          to: '/',
        },
        {
          icon: 'mdi-trophy-outline',
          title: 'Sports',
          to: '/',
        },
      ],
      items3: [
        {
          icon: 'mdi-decagram-outline',
          title: 'Settings',
          to: '/',
        },
        {
          icon: 'mdi-flag-outline',
          title: 'Report History',
          to: '/',
        },
        {
          icon: 'mdi-help-circle-outline',
          title: 'Help',
          to: '/',
        },
        {
          icon: 'mdi-message-alert-outline',
          title: 'Send feedback',
          to: '/',
        },
      ],
    }
  },
}
</script>

<style scoped>
.linkStyle {
  text-decoration: none;
  color: white;
}
</style>