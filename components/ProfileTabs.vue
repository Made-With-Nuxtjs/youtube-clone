<template>
<v-container>
<v-row no-gutters >
<v-col
    md="8"
    offset-md="2"
>



    <v-card flat>
        <div class="d-inline-flex">
            <div class="d-inline-flex">
                <v-avatar size="50" class="mt-3">
                    <v-img
                    src="https://randomuser.me/api/portraits/women/75.jpg"
                    alt="Nirob"
                    ></v-img>
                </v-avatar>
            </div>
            <div class="d-inline pl-8 pt-6">
                <div class="font-weight-bold d-inline ">
                    <h3 class="align-center">The Net Ninja </h3>
                </div>
                  <v-btn color="error" class="d-inline float-right">
                    Subcribe
                  </v-btn>
                  <div class="linkStyle">
                    <h6 class="font-weight-light d-block ">1M Subcriber</h6>
                </div>
            </div>
        </div>

        
        <v-tabs
        color="inherit"
        fixed
        class="justify-space-between"
        >
            <v-tab>HOME</v-tab>
            <v-tab>VIDEOS</v-tab>
            <v-tab>PLAYLISTS</v-tab>
            <v-tab>COMMUNITY</v-tab>
            <v-tab>CHANNEL</v-tab>
            <v-tab>ABOUT</v-tab>

        <!-- <v-tab-item
            v-for="n in 6"
            :key="n"
        >
            <v-container >
            <v-row>
                <v-col
                cols="4" 
                
                >
                
                </v-col>
            </v-row>
            <v-row>
                <v-col
                v-for="i in 20"
                :key="i"
                cols="8"
                md="3"
                >
                <v-img
                    :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                    aspect-ratio="1"
                    max-height="180PX"
                    max-width="auto"
                ></v-img>
                </v-col>
            </v-row>
            </v-container>
        </v-tab-item> -->
        
        
        <v-tab-item>
            <profile-home/>
        </v-tab-item>
        <v-tab-item>
                    <v-container>
                    <v-row no-gutters>
                    <v-col
                        md="6"
                        offset-md="3"
                    >
                        <v-card
                        class="pa-2"
                        outlined
                        tile
                        >
                        .col-md-6 .offset-md-3
                        </v-card>
                    </v-col>
                    </v-row>
                </v-container>   
        </v-tab-item>
        <v-tab-item>
                <v-container>
                <v-row no-gutters>
                <v-col
                    md="6"
                    offset-md="3"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-md-6 .offset-md-3
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
        </v-tab-item>
        <v-tab-item>
            4
        </v-tab-item>
        <v-tab-item>
            5
        </v-tab-item>
        <v-tab-item>
            6
        </v-tab-item>
        
        </v-tabs>
    </v-card>


</v-col>
</v-row>
</v-container>
</template>