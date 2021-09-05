<template>

  <v-menu offset-y :nudge-width="200" >

    <template #activator="{ on, attrs }">
      <v-icon
        class="float-right font-weight-thin pt-2 pr-2"
        v-bind="attrs"
        v-on="on"
        >mdi-dots-vertical</v-icon
      >
    </template>
    <v-list>
      <a class="text-decoration-none" href="#">
        <v-list-item v-for="(item, index) in dots_menu" :key="index">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title class="subtitle-2"
            >{{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </a>

      <v-divider></v-divider>

      <a class="text-decoration-none" href="#">
        <v-list-item v-for="(item, index) in dots_menu_differ" :key="index">
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
</template>


<script>
export default {
  data: () => ({
    dots_menu: [
      { icon: 'mdi-playlist-play', title: 'Add to queue' },
      { icon: 'mdi-clock-outline', title: 'Save to watch later' },
      { icon: 'mdi-playlist-plus', title: 'Save to playlist' },
    ],
    dots_menu_differ: [
      {
        icon: 'mdi-minus-circle-outline mdi-rotate-315',
        title: 'Not interested',
      },
      { icon: 'mdi-minus-circle-outline', title: "Don't recommend channel" },
      { icon: 'mdi-flag-outline', title: 'Report' },
    ],
  }),
}
</script>