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
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fps.png?alt=media&token=4101d316-1922-44c8-b22f-1d7e313ee41d'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fai.png?alt=media&token=183eace4-9ae8-47c2-8190-33281ba9d318'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fae.png?alt=media&token=5d07e230-12d4-4aea-95df-60aad63afa06'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fpr.png?alt=media&token=361573ce-8e16-4c5f-8e80-5b01b132da97'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fcm.png?alt=media&token=eae07d7d-246b-4686-b778-e88a7cfa014b'
          }
      ]
    }),
  }
</script>
