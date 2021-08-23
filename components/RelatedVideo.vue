<template>
<v-container dense>
  <v-layout row  cols="12" 
  class="justify-center"
   >

  <v-card
    :loading="loading"
    class="mx-auto"
    max-width="600"
  >
  <v-row>
      <v-col md="6" sm="6" lg="6">
        <div>
            <v-img
             height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
        </div>
    </v-col>
    <v-col md="6" sm="6" lg="6">
    <div>
        <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
         </v-card-text>
        </div>
    </v-col>
    </v-row> 
  </v-card>
  </v-layout>
</v-container>
</template>



  




