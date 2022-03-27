<template>
    <div>
        <v-col>
            <div class="text-center justify">
                <h2>Realidad Aumentada - AR</h2>
                <p>Construcción de piezas gráficas en Realidad Aumentada para redes sociales (Instagram - facebook)
                    <br>
                    Incrustración de Animaciones 2D, Modelos 3D y diseños gráficos en una sola composición
                </p>
            </div>
            <v-row justify="center" class="margin">
                <v-card v-for="(card, i) in cards" :key="i" height="300" width="200" class="ma-2 mx-5 transparent">
                    <v-dialog
                            v-model="dialog"
                            overlay-opacity="1"
                            persistent
                            overlay-color="black"
                            id="full"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <Tilt class="chang">
                                <v-img
                                    class="cardt"
                                    @click="veride(i)"
                                    height="300"
                                    width="auto"
                                    :src="card.img"
                                    v-bind="attrs"
                                    v-on="on">
                                </v-img>
                                <p class="text-center mt-2 padi">{{card.name}}</p>
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
                        <div v-else>
                            <v-btn @click="aume = true" small outlined class="mb-3">info</v-btn>
                            <v-card width="700">
                                <v-img :src="cardar.img2" class="text-center">
                                    <v-btn class="arrib" @click="salir()" fab text>X</v-btn>
                                </v-img>
                            </v-card>
                        </div>
                    </v-dialog>
                </v-card>
            </v-row>
        </v-col>
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
            const elem = document.getElementById("full");
            if (elem.exitFullscreen) {
            elem.exitFullscreen();
            }
            this.dialog = false
            setTimeout(() => {
                this.aume = true
            }, 500);
        },
        full() {
            this.aume = false
            // const elem = document.getElementById("full");
            // if (elem.requestFullscreen) {
            // elem.requestFullscreen();
            // }
        }
    },
    data () {
        return {
            aume: true,
            dialog: false,
            cards: [
                {   
                    name: 'Orion Gallery',
                    qr: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.instagram.com%2Far%2F976725169642373%2F%3Fch%3DMjU5MDUwNTU4NzZmMjViODdiMTk1YjkzOThjOWQwYTI%253D&chs=180x180&choe=UTF-8&chld=L|2',
                    img: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/banner-rion.png?alt=media&token=30a84d25-c5c8-499e-b4c1-4d7a3b09035f',
                    img2: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2FWallpaper-orion.png?alt=media&token=f4be370c-c7f5-4818-9212-dc3a5466e503'
                },
                {
                    name: 'Path of Alchemist',
                    qr: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.instagram.com%2Far%2F650670312689208%2F%3Fch%3DM2VlMmM2MmQ0YTU1ZWEzN2NlYmQyM2U0NTk1ZmM4YmQ%253D&chs=180x180&choe=UTF-8&chld=L|2',
                    img: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%204.png?alt=media&token=f6dac9c8-bf74-430a-bc7a-861ad32401b0',
                    img2: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fpost_academia-2.png?alt=media&token=ab1b82db-0f82-4075-8a6f-9d590c68abeb'
                },
                {
                    name: 'Arcane',
                    qr: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.instagram.com%2Far%2F942010949809981%2F%3Fch%3DMWU1NGYzMWNiNGFkNzY5NDVlNjhmMGQ1NWYxMTc2YTQ%253D&chs=180x180&choe=UTF-8&chld=L|2',
                    img: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/arcane-granade.png?alt=media&token=9cb3000b-4e33-4fe2-a993-f902ea1393a8',
                    img2: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/arcane-granade-2.png?alt=media&token=e2a32873-4187-4202-8cbb-f59b722442f8'
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
.padi {
    /* position: absolute; */
    z-index: -1;
    opacity: 0;
    transition: 0.7s;
}
.chang:hover .padi {
    color: orange;
    z-index: 1;
    opacity: 1;
}
.arrib {
    z-index: 100;
}
.margin {
    margin-top: 70px;
}
</style>
