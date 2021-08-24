<template>
  <v-row >
    <v-col
      cols="12"
      sm="12"
      md="12"
      class="cardColor"
    >
      <v-sheet
        elevation="10"
        class="py-4 px-1"
      >
        <v-chip-group
          multiple
          active-class="primary--text"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      tags: [
        'All',
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
        'good',
        'Yellow',
        'laptop',
        'pc',
        'net',
        'Purple',
        'massive Monitor',
        'Top',
        'low',
        'Varients',
        'Cream',
        'game',
        'play',
        'new',
        'line'
      ],
    }),
  }
</script>


<style scoped>
#app {
  background: linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(254,254,254,1) 100%);
}
.cardColor {
   background-color: rgba(12, 9, 9, 0.5) !important;
   border-color: white !important;
 }
</style>