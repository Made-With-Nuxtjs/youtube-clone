<template>
  <v-container class="grey lighten-5">
    <v-row
      no-gutters
      
    >
      <!-- style="flex-wrap: nowrap;" -->
      <v-col
        md="8" lg="8" sm="12" xs="12"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
          <!-- <v-card
             class="mx-auto" 
          > -->
          <v-responsive :aspect-ratio="16/9">
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="600px"
                    >
                    </v-img>

                    <v-card-actions>
                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            </v-responsive>
          <!-- </v-card> -->



      </v-col>
      <v-col
      md="4" lg="4" sm="12" xs="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
      >
        <CategoryChips/>
        <v-card
          class="pa-1"
          outlined
          tile
        >

          I'm 5 column wide and I shrink if there's not enough space I'm 1 column wide and I grow to take
           all the space I'm 1 column wide and I grow to take all the space I'm 1 column wide and I grow to take all the space
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      ],
    }),
  }
</script>

    

