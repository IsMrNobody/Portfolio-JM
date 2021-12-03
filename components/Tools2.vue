<template>
  <div>
    <p class="text-center">Adobe Suits</p>
    <v-sheet
      class="mx-auto transparent"
      max-width="800"
    >
      <v-slide-group
        v-model="model"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(n, i) in logos"
          :key="i"
          v-slot="{ toggle }"
        >
          <v-card
            class="ma-4 transparent"
            height="40"
            width="40"
            flat
            @click="toggle"
          >
          <v-img :src="`${n.logo}`">
              
          </v-img>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <!-- <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition> -->
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      logos: [
          {
              logo: '/ps.png'
          },
          {
              logo: '/ai.png'
          },
          {
              logo: '/ae.png'
          },
          {
              logo: '/pr.png'
          },
          {
              logo: '/cm.png'
          }
      ]
    }),
  }
</script>
