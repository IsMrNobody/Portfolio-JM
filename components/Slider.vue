<template>
  <div class="borde mx-auto">
    <v-sheet
      class="fond"
    >
      <v-card-title>
        Projects</v-card-title>
      <v-slide-group
        v-model="model"
        show-arrows
      >
        <v-slide-item
          v-for="(w, i) in works"
          :key="i"
          v-slot="{ toggle }"
          class="transparent"
        >
          <v-card
            :color="`${w.img}`"
            class="ma-4 logo mx-auto"
            height="80"
            width="80"
            flat
            rounded
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <!-- <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon> -->
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet
          v-if="model != null"
          height="200"
          :class="works[model].bg"
          tile
        >
          <v-row
            justify="center"
            align="center"
            class="d-none d-sm-flex"
          >
            <v-col align="center" class="mt-5">
                <!-- <v-img width="180" :src="works[model].logo"></v-img> -->
            </v-col>
            <v-col class="" align-xs="end">
                <h3 class="text-h6 mt-5">
                  {{ works[model].name }}
                </h3>
                <p>{{ works[model].des }}</p>
                <v-btn large outlined color="orange">IR</v-btn>
            </v-col>
          </v-row>
            <v-col class="d-flex justify-end">
              <v-btn class="d-flex d-sm-none" large outlined color="orange">Ver</v-btn>
            </v-col>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      works: [
        {
          img: `${'bg1'}`,
          name: 'Jartate App',
          des: 'Aplicación web de servicos de comida online',
          bg: `${'bgwork1'}`,
          // logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fja2.png?alt=media&token=b7793ab1-ddfa-4179-a491-f6780e78f9d9',
          web: 'www.jartate.com'
        },
        {
          img: `${'bg2'}`,
          name: 'Orion Gallery',
          des: 'Galeria de Arte y Diseño digital',
          bg: `${'bgwork2'}`,
          // logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fori2.png?alt=media&token=75b2d622-d439-4427-9987-b4bb90988b90',
          web: 'orion-gallery.com'
        },
        {
          img: `${'bg'}`,
          name: 'Crypto Soccer',
          des: 'Diseño de Pagina web de Cryto Soccer games',
          bg: `${'bgwork'}`,
          // logo: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fcs1.png?alt=media&token=bb0a04ea-c02b-4a65-9750-80e5e5f61616',
          web: ''
        },
        {
          img: `${'bg3'}`,
          name: 'Elemenst Game',
          des: 'Diseño y Animacion de personajes',
          bg: `${'bgwork3'}`,
          web: ''
        }
      ]
    }),
  }
</script>

<style scoped>
.bg {
  /* 'crypto' */
  background-image: url('https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fcs0.png?alt=media&token=b2eb3af6-1efa-4fef-af35-569e023785d6');
  background-size: contain;
}
.bg1 {
  /* jartate */
  background-image: url('https://firebasestorage.googleapis.com/v0/b/jartate-5a7af.appspot.com/o/Logo%2Fja.png?alt=media&token=0016c606-3efd-4144-ae71-77ca6c3260cd');
  background-size: contain;
}
.bg2 {
  /* orion */
  background-image: url('https://firebasestorage.googleapis.com/v0/b/jartate-5a7af.appspot.com/o/Logo%2Fori.png?alt=media&token=ed511514-1e6d-4aeb-a51b-c8193b547f94');
  background-size: contain;
}
.bg3 {
  /* orion */
  background-image: url('https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Felm.png?alt=media&token=4d8519a1-8f7a-4001-8e36-48b92fad895f');
  background-size: cover;
}
.fond {
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(28,27,26,1) 49%, rgba(0,0,0,1) 90%);
}
.borde {
  border: 1px orange solid;
  max-width: 900px;
}
.bgwork {
  background-size: cover;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2F05.png?alt=media&token=081b72df-3c15-41e3-aedf-181b9162d4b7');
}
.bgwork1 {
  background-size: cover;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2F04.png?alt=media&token=b8240df7-3b87-487d-bea7-d478ddc44a1c');
}
.bgwork2 {
  background-size: cover;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2F03.png?alt=media&token=6e7eb07f-7f1e-441d-9572-d36f85b4442d');
}
.bgwork3 {
  background-size: cover;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2F02.png?alt=media&token=ffd5926e-742e-4707-b272-20312406242e');
}
.logo{
  transition: 0.51s;
}
.logo:hover {
  transform: scale(1.2);
}
</style>
