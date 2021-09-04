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
          <v-icon>mdi-video-plus-outline</v-icon>
        </v-btn>
      </template>

      <v-card fill-height>
        
        <a class="text-decoration-none" href="#">
          <v-list-item>
            <v-list-item-action>
              <v-icon  size="22">mdi-play-box-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title class="subtitle-2"
              >Upload video</v-list-item-title
            >
          </v-list-item>
        </a>
        <a class="text-decoration-none" href="#">
          <v-list-item>
            <v-list-item-action>
              <v-icon  size="22">mdi-access-point</v-icon>
            </v-list-item-action>
            <v-list-item-title class="subtitle-2"
              >Go live</v-list-item-title
            >
          </v-list-item>
        </a>
        
      </v-card>
    </v-menu>
  </div>
</template>

