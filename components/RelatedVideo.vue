<template>
  <v-container dense>
    <!-- <v-layout row  class="justify-center"> -->
    <v-card v-for="n in 10" :key="n" max-width="600" class="pb-2 cardColor">
      <v-row no-gutters>
        <v-col cols="12" sm="5">
          <div class="fill-height">
            <v-img
              max-height="200"
              max-width="330"
              src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            ></v-img>
          </div>
        </v-col>

        <v-col cols="12" sm="7" dense>
          <div class="ml-3">
            <div class="text-right">
              <!-- use-Componets -->
              <DotsMenu />
            </div>

            <NuxtLink to="/videoView" class="linkStyle">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <h4 style="font-weight: normal">
                    <span
                      class="d-block text-truncate"
                      style="max-width: 255px"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Suspendisse faucibus, nunc et pellentesque egestas, lacus
                      ante convallis tellus.
                    </span>
                  </h4>
                </template>
                <span
                  >Suspendisse faucibus, nunc et pellentesque egestas, lacus
                  ante convallis tellus.</span
                >
              </v-tooltip>
            </NuxtLink>
            <NuxtLink to="/profile" class="linkStyle">
              <span class="text-subtitle-2 text-caption"
                >The Net Ninja <v-icon size="12">mdi-check-circle</v-icon></span
              >
            </NuxtLink>
            <div>
              <span class="text-subtitle-2 d-inline text-caption">
                1 M view</span
              >
              <span class="text-subtitle-2 d-inline text-caption"
                >. 1 week ago</span
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!-- </v-layout> -->
  </v-container>
</template>



<style scoped>
.cardColor {
  background-color: rgba(12, 9, 9, 0.5) !important;
  border-color: white !important;
}
.linkStyle {
  text-decoration: none;
  color: white;
}
</style>



  




