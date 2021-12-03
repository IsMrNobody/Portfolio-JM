<template>
  <div>
    <p class="text-center">Web Delevelopment</p>
    <v-sheet
      class="mx-auto transparent"
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
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fvs.png?alt=media&token=4fe2936a-92cf-405b-9be7-652b8fba920b'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fhtml.png?alt=media&token=80bbb096-88d9-487f-a7b5-c8ac99b9c7cb'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fcss.png?alt=media&token=257b8250-94ea-4aef-8305-bebbd6069984'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fjs.png?alt=media&token=c72d1baf-23b1-4752-9028-0d98caffa4d6'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fno2.png?alt=media&token=96082d04-f376-4ff7-9d82-185682a8bc00'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fvu.png?alt=media&token=3bd96db0-816b-4402-82dd-8e73f608fe06'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fvy.png?alt=media&token=522944b0-e967-4b08-960a-ac502c4f9bc6'
          },
          {
              logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Flogos%20programas%2Fnu2.png?alt=media&token=732ba568-ade4-4bf7-becb-ceb48ec57740'
          }
      ]
    }),
  }
</script>
