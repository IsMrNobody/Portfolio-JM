<template>
  <div>
    <p class="text-center">2D / 3D</p>
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
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fc4d.png?alt=media&token=0616ff3a-730e-42d9-beef-9c932c303fbd'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fsp.png?alt=media&token=6c459162-2040-4176-8b05-032049ddd62e'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/ar.png?alt=media&token=8b01ce62-10f3-4070-a8ef-96d0a5cafd7a'
          }
      ]
    }),
  }
</script>
