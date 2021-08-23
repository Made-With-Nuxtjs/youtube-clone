<template>
  <v-container dark>
    <v-row
      no-gutters 
      dense 
    >
      <!-- style="flex-wrap: nowrap;" -->
      <v-col
       cols="12"
        md="8" lg="8" sm="12" xs="12"
        class="flex-grow-1 flex-shrink-0"
      >
          <!-- <v-card
             class="mx-auto" 
          > -->
          <v-responsive :aspect-ratio="16/9">
            <!-- <v-container fluid> -->
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
            <!-- </v-container> -->
            </v-responsive>
          <!-- </v-card> -->



      </v-col>
      <v-col
      cols="12"
      md="4" lg="4" sm="12" xs="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1 pl-3"
      >
        <CategoryChips/>
        <v-card
          class="pa-1"
          outlined
          tile
        >

      <v-row>
        <v-col md="6" lg="6" sm="6">
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
        <v-col md="6" lg="6" sm="6">
         all the space I'm 1 column wide and I grow to take all the space I'm 1 column wide and I grow to take all the space
      </v-col>
      </v-row>
         
          
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

    

