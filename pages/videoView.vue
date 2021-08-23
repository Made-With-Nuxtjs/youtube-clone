<template>
  <v-container dark>
    <v-row
      no-gutters 
      dense 
    >
      <v-col
       cols="12"
        md="8" lg="8" sm="12" xs="12"
        class="flex-grow-1 flex-shrink-0"
      >
        <v-responsive :aspect-ratio="16/9">
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
                        <v-icon>mdi-rewind</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-play</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-fast-forward</v-icon>
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
            </v-responsive>
        </v-col>
      <v-col
      cols="12"
      md="4" lg="4" sm="12" xs="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1 pl-3"
      >
        <Category-chips/>
        <Related-video/>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import RelatedVideo from '~/components/RelatedVideo.vue'
  export default {
  components: { RelatedVideo },
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      ],
    }),
  }
</script>

    

