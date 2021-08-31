v-<template>
  <div>
    <!-- <hr /> -->
      <v-divider></v-divider>
    <h4 class="overline pl-4 text--disabled">More From YouTube</h4>
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
    <v-divider></v-divider>
    <div class="caption text--disabled pl-4 pt-2">
       <p> AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</p>
       <p class="pb-6"> TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
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
      items: [
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