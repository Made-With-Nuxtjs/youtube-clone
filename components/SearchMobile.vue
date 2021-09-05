
<template>
  <div class="d-flex d-sm-none">
    <v-row>
      <v-icon class="pl-2 ml-16" @click="dialog2 = true">mdi-magnify</v-icon>
      
      <v-dialog v-model="dialog2" max-width="700px" >
        <v-card class="d-flex align-start">
          <v-card-text >
            <v-text-field           
              label="Search"
              clearable
              append-icon="mdi-magnify"
              prepend-icon="mdi-arrow-left"
            >
            </v-text-field>
            <!-- <v-btn text @click="dialog2 = false"> Close </v-btn> -->
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>




<script>
export default {
  data() {
    return {
      dialog2: false,
     
    }
  },
}
</script>












