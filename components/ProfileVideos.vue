<template>
  <v-container>
    <v-row>
      <v-col md="12" sm="12">
        <v-row>
          <div v-for="n in 24" :key="n">
            <v-col v-for="v in 6" :key="v">
              <v-card flat class="flex-nowrap">
                <v-img
                  class="white--text align-end"
                  height="115px"
                  width="210px"
                  src="https://picsum.photos/350/165?random"
                >
                </v-img>

                <h4 class="pb-0 pt-2 text-truncate">Title Number 10</h4>
                        <h5 class="text--primary">Make Apps with Danny</h5>
                    <h6 class="text--primary pt-3">
                     
                      <span class="font-weight-thin ">1.5K View </span>.<span
                        class="font-weight-thin" > 2 month ago</span>
                    </h6>
              </v-card>
            </v-col>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

