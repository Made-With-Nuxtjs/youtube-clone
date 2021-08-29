<template>
  <div class="text-center">
    <v-menu
    
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      transition="scroll-y"
    >
      <template #activator="{ on, attrs }">
        <v-avatar size="36px" v-bind="attrs" v-on="on">
          <img
            class="avatar"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          />
        </v-avatar>
      </template>

      <v-card>
        <v-list max-width="300px">
          <v-list-item>
            <v-list-item-avatar>
              <img
                class="avatar top"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="overline"
                >Nirob Abhee</v-list-item-title
              >
              <v-list-item-subtitle>nirob@and.com.bd</v-list-item-subtitle>

              <nuxt-link
                to="https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=en"
                class="text-decoration-none py-2"
                >Manage your Google Account</nuxt-link
              >
            </v-list-item-content>
            <!-- <v-list-item-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action> -->
          </v-list-item>
          <v-divider></v-divider>
        </v-list>

        <v-list>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-account-box-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Create a channel </v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-cash-usd</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Puchases and memberships</v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-youtube-studio</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">YouTube Studio</v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-account-box</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Switch Account</v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Sign Out</v-list-item-title>
            </v-list-item>
            </a>
          <v-divider></v-divider>
        </v-list>
        <v-list dense>
          <a class="text-decoration-none " href="#">
            <v-list-item dense>
              <v-list-item-action>
                <v-icon>mdi-moon-waxing-crescent</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Appearance: <span>Dark</span> </v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item dense>
              <v-list-item-action>
                <v-icon>mdi-translate</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Language: <span>English</span></v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-web</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Location: <span>Bangladesh</span></v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-decagram-outline </v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Settings</v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-shield-account-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Your Data in YouTube</v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-help-circle-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Help</v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-message-alert-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Send Feedback</v-list-item-title>
            </v-list-item>
            </a>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-keyboard</v-icon>
              </v-list-item-action>
              <v-list-item-title class="subtitle-2">Keybord Shortcuts</v-list-item-title>
            </v-list-item>
            </a>
          <v-divider></v-divider>
        </v-list>
        <v-list>
          <a class="text-decoration-none" href="#">
            <v-list-item>
              <v-list-item-title class="subtitle-2">Restricted Mode: <span>Off</span></v-list-item-title>
            </v-list-item>
            </a>
          
        </v-list>
        
        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="menu = false"> Save </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
}
</script>