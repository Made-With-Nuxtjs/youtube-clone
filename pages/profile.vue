<template>
  <v-container dark>
    <v-row no-gutters dense>
      <v-col cols="12" md="12" sm="12" class="flex-grow-1 flex-shrink-0">
        <v-responsive :aspect-ratio="18 / 9">
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card flat>
                <v-img :src="card.src" height="400px" />

                <profile-tabs flat />
              </v-card>
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12,
      },
    ],
    // --------list of link//
    items: [
      {
        details: 'mdi-inbox',
        text: 'Inbox',
      },
      {
        details: 'mdi-star',
        text: 'Star',
      },
      {
        details: 'mdi-send',
        text: 'Send',
      },
      {
        details: 'mdi-email-open',
        text: 'Drafts',
      },
    ],
    show: false,

  }),
}
</script>








<style scoped>
.matchColor {
  background-color: rgba(12, 9, 9, 0.5) !important;
  border-color: white !important;
}
.linkStyle {
  text-decoration: none;
  color: white;
}
</style>
