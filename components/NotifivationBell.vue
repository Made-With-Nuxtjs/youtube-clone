<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="400"
      offset-y
      transition="scroll-x"
    >
      <template #activator="{ on, attrs }">
        <v-btn icon class="d-none d-sm-flex" v-bind="attrs" v-on="on">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </template>

      <v-card fill-height>
        <div class="d-flex justify-space-between">
          <h4 class="ma-5">Notifications</h4>
          <span class="ma-5">
            <a class="text-decoration-none" href="#">
              <v-icon>mdi-decagram-outline</v-icon>

            </a>
          </span>
        </div>
        <v-divider></v-divider>
        <v-card-text style="height:500px">
              <div class="mx-auto mt-16 text--disabled" align="center" >
                <v-icon size="100" >mdi-bell-outline</v-icon>
              </div>
              <div class="mx-auto mt-16 text--disabled" align="center">
                <h4>Your notifications live here</h4>
                <h5>Subscribe to your favorite channel to get notified about their latest videos. </h5>
              </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

