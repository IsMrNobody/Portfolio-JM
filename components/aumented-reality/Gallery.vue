<template>
    <div>
        <v-row>
            <v-card v-for="(card, i) in cards" :key="i" height="300" width="200" class="ma-2 mx-5 transparent">
                <v-dialog
                        v-model="dialog"
                        overlay-opacity="1"
                        persistent
                        overlay-color="black"
                        id="full"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <Tilt>
                            <v-img
                                class="cardt"
                                @click="veride(i)"
                                height="300"
                                width="auto"
                                :src="card.img"
                                v-bind="attrs"
                                v-on="on">
                            </v-img>
                            <!-- <p class="text-center mt-2 padi">{{card.name}}</p> -->
                        </Tilt>
                    </template>

                    <v-card v-if="aume" class="black" width="500">
                        <!-- <v-card-title class="text-h5 ma-2">
                        {{cardar.name}}
                        </v-card-title> -->
                        <v-card-subtitle class="pt-4">
                            AR INSTRUCTIONS <br>
                            This poster includes optional Augmented Reality features.
                            Using a phone or tablet, you can experience this poster as
                            it comes to life, including animation and sound
                        </v-card-subtitle>

                        <v-img class="mx-auto ma-4" width="250" :src="cardar.qr"></v-img>
                        <h2 class="text-center">
                            <v-icon>mdi-instagram</v-icon>
                            instagram
                        </h2>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn
                            color="white"
                            text
                            @click="dialog = false"
                        >
                            salir
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="orange"
                            text
                            @click="full()"
                        >
                            continuar
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card v-else>
                        <v-img width="900" :src="cardar.img2" class="text-center">
                            <v-btn @click="salir()" fab text>X</v-btn>
                        </v-img>
                    </v-card>
                </v-dialog>
            </v-card>
        </v-row>
    </div>
</template>

<script>
import Tilt from 'vanilla-tilt-vue'
// import DialogReality from '@/components/aumented-reality/DialogReality.vue'
export default {
    components: {
        Tilt
        // DialogReality
    },
    methods: {
        veride(i) {
            this.$store.dispatch('aumented/sendDat', this.cards[i])
            console.log(this.cardar)
        },
        salir() {
            if (document.exitFullscreen) {
            document.exitFullscreen();
            }
            this.dialog = false
            setTimeout(() => {
                this.aume = true
            }, 500);
        },
        full() {
            this.aume = false
            const elem = document.getElementById("full");
            if (elem.requestFullscreen) {
            elem.requestFullscreen();
            }
        }
    },
    data () {
        return {
            aume: true,
            dialog: false,
            cards: [
                {   
                    qr: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.instagram.com%2Far%2F1076808036507906%2F%3Fch%3DODJhYjU3ZDFkYTgwYzAxZTAyYTZjNDhkYWNjZWVmN2I%253D&chs=180x180&choe=UTF-8&chld=L|2',
                    name: 'Orion Gallery',
                    img: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/banner-rion.png?alt=media&token=30a84d25-c5c8-499e-b4c1-4d7a3b09035f',
                    img2: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2FWallpaper-orion.png?alt=media&token=f4be370c-c7f5-4818-9212-dc3a5466e503'
                },
                {
                    name: 'Path of Alchemist',
                    img: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%204.png?alt=media&token=f6dac9c8-bf74-430a-bc7a-861ad32401b0',
                    img2: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%204.png?alt=media&token=f6dac9c8-bf74-430a-bc7a-861ad32401b0'
                }
            ]
        }
    },
    computed: {
          cardar() {
              return this.$store.state.aumented.reality
          }
      }
}
</script>

<style scoped>
.cardt {
    opacity: 0.8;
}
.cardt:hover {
    opacity: 1;
}
</style>
