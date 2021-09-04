<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="185"
      offset-y
      transition="scroll-x"
    >
      <!-- //Template for icom on header bar// -->
      <template #activator="{ on, attrs }">
        <v-btn icon class="d-none d-sm-flex" v-bind="attrs" v-on="on">
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </template>

      <v-card fill-height>
        <a class="text-decoration-none" href="#">
          <v-list-item>
            <v-list-item-action>
              <v-icon class="red--text" size="22">mdi-youtube-tv</v-icon>
            </v-list-item-action>
            <v-list-item-title class="subtitle-2">YouTube TV</v-list-item-title>
          </v-list-item>
        </a>
        <v-divider></v-divider>
        <a class="text-decoration-none" href="#">
          <v-list-item>
            <v-list-item-action>
              <v-icon class="red--text" size="22">mdi-play-circle</v-icon>
            </v-list-item-action>
            <v-list-item-title class="subtitle-2"
              >YouTube Music</v-list-item-title
            >
          </v-list-item>
        </a>
        <a class="text-decoration-none" href="#">
          <v-list-item>
            <v-list-item-action>
              <v-icon class="red--text" size="22">mdi-youtube</v-icon>
            </v-list-item-action>
            <v-list-item-title class="subtitle-2"
              >YouTube Kids</v-list-item-title
            >
          </v-list-item>
        </a>
        <v-divider></v-divider>
        <a class="text-decoration-none" href="#">
          <v-list-item>
            <v-list-item-action>
              <v-icon class="red--text" size="22">mdi-youtube</v-icon>
            </v-list-item-action>
            <v-list-item-title class="subtitle-2"
              >Creator Academy</v-list-item-title
            >
          </v-list-item>
        </a>
        <a class="text-decoration-none" href="#">
          <v-list-item>
            <v-list-item-action>
              <v-icon class="red--text" size="22">mdi-youtube</v-icon>
            </v-list-item-action>
            <v-list-item-title class="subtitle-2"
              >YouTube for Artists</v-list-item-title
            >
          </v-list-item>
        </a>
      </v-card>
    </v-menu>
  </div>
</template>

