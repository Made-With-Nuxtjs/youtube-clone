<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-divider></v-divider>
      <div class="d-inline-flex d-none d-sm-inline">
        <div class="text-wrap pb-4 white--text pr-2" style="font-size: 13px">
          <span class="d-inline-flex white--text pr-2">10</span>
          COMMENTS
        </div>
      </div>

      <v-divider class="d-flex d-sm-none white--text mb-2"></v-divider>
      <div class="d-none d-sm-flex white--text my-6 mx-2">
        <span class="d-inline white--text">
          <v-btn icon>
            <v-icon>mdi-sort-variant</v-icon>
          </v-btn>
        </span>
        <span class="d-inline white--text mt-3" style="font-size: 13px"
          >SORT BY</span
        >
      </div>

      <div class="d-none d-sm-flex">
        <div class="d-inline justify-center">
          <v-avatar size="36">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
              alt="Nirob"
            ></v-img>
          </v-avatar>
        </div>
        <div class="d-inline white--text">
          <span class="font-weight-thin pl-8"
            >commenting publicly as Nirob (Logging User).</span
          >
          <v-divider class="ml-4"></v-divider>
          <h5 class="font-weight-light ml-2 py-5">
            By completing this action you are creating a
            <NuxtLink to="/">channel</NuxtLink>
            and agree to
            <NuxtLink to="/">Youtube's term of service</NuxtLink>.
          </h5>
        </div>
      </div>

      <h5 class="hidden-xs-and-up white--text mb-3">Up-Next</h5>
      <V-row>
        <v-col cols="12">
          <div class="pt-7 d-none d-sm-flex">
            <div class="d-inline-flex white--text">
              <div class="d-inline justify-center">
                <v-avatar size="36">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="Nirob"
                  ></v-img>
                </v-avatar>
              </div>
            </div>

            <div class="d-flex">
              <div class="white--text">
                <NuxtLink to="#" class="text-decoration-none white--text">
                  <h4 class="d-inline ml-7">SangYoul KIm</h4>
                  <span class="text-caption text--disabled">2 years ago</span>
                </NuxtLink>
                <div class="d-flex white--text pl-8">
                  <h4 class="text-body-2">
                    firebase/firestore: Firestore (6.3.0) " The
                    timestampsInSnapshots setting now defaults to true and you
                    no longer need to explicitly set it. In a future release,
                    the setting will be removed entirely and so it is
                    recommended that you remove it from your
                    firestore.settings() call now.
                    <h5>
                      <NuxtLink to="#" class="white--text"
                        >..Read more</NuxtLink
                      >
                    </h5>
                  </h4>
                </div>
                <div class="d-flex white--text pl-8">
                  <span class="text-caption"
                    ><v-icon size="18" class="mr-3">mdi-thumb-up-outline</v-icon
                    >20</span
                  >
                  <span class="text-caption"
                    ><v-icon size="18" class="mx-3"
                      >mdi-thumb-down-outline</v-icon
                    >02</span
                  >
                  <NuxtLink to="#" class="text-decoration-none white--text"
                    ><span class="text-caption ml-3 text-uppercase"
                      >Reply</span
                    ></NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="pt-7 d-none d-sm-flex">
            <div class="d-inline-flex white--text">
              <div class="d-inline justify-center">
                <v-avatar size="36">
                  <v-img
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    alt="Nirob"
                  ></v-img>
                </v-avatar>
              </div>
            </div>

            <div class="d-flex">
              <div class="white--text">
                <NuxtLink to="#" class="text-decoration-none white--text">
                  <h4 class="d-inline ml-7">SangYoul KIm</h4>
                  <span class="text-caption text--disabled">2 years ago</span>
                </NuxtLink>
                <div class="d-flex white--text pl-8">
                  <h4 class="text-body-2">
                    firebase/firestore: Firestore (6.3.0) " The
                    timestampsInSnapshots setting now defaults to true and you
                    no longer need to explicitly set it. In a future release,
                    the setting will be removed entirely and so it is
                    recommended that you remove it from your
                    firestore.settings() call now.
                    <h5>
                      <NuxtLink to="#" class="white--text"
                        >..Read more</NuxtLink
                      >
                    </h5>
                  </h4>
                </div>
                <div class="d-flex white--text pl-8">
                  <span class="text-caption"
                    ><v-icon size="18" class="mr-3">mdi-thumb-up-outline</v-icon
                    >20</span
                  >
                  <span class="text-caption"
                    ><v-icon size="18" class="mx-3"
                      >mdi-thumb-down-outline</v-icon
                    >02</span
                  >
                  <NuxtLink to="#" class="text-decoration-none white--text"
                    ><span class="text-caption ml-3 text-uppercase"
                      >Reply</span
                    ></NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="pt-7 d-none d-sm-flex">
            <div class="d-inline-flex white--text">
              <div class="d-inline justify-center">
                <v-avatar size="36">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                    alt="Nirob"
                  ></v-img>
                </v-avatar>
              </div>
            </div>

            <div class="d-flex">
              <div class="white--text">
                <NuxtLink to="#" class="text-decoration-none white--text">
                  <h4 class="d-inline ml-7">SangYoul KIm</h4>
                  <span class="text-caption text--disabled">2 years ago</span>
                </NuxtLink>
                <div class="d-flex white--text pl-8">
                  <h4 class="text-body-2">
                    firebase/firestore: Firestore (6.3.0) " The
                    timestampsInSnapshots setting now defaults to true and you
                    no longer need to explicitly set it. In a future release,
                    the setting will be removed entirely and so it is
                    recommended that you remove it from your
                    firestore.settings() call now.
                    <h5>
                      <NuxtLink to="#" class="white--text"
                        >..Read more</NuxtLink
                      >
                    </h5>
                  </h4>
                </div>
                <div class="d-flex white--text pl-8">
                  <span class="text-caption"
                    ><v-icon size="18" class="mr-3">mdi-thumb-up-outline</v-icon
                    >20</span
                  >
                  <span class="text-caption"
                    ><v-icon size="18" class="mx-3"
                      >mdi-thumb-down-outline</v-icon
                    >02</span
                  >
                  <NuxtLink to="#" class="text-decoration-none white--text"
                    ><span class="text-caption ml-3 text-uppercase"
                      >Reply</span
                    ></NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </V-row>
    </v-col>
  </v-row>
</template>