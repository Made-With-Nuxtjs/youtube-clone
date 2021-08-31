v-<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
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