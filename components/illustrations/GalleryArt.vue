<template>
    <div>
        <v-col>
            <div class="text-center justify">
                <h2>Ilustraciòn Digital</h2>
                <p>Arte digital con vida propia y movimiento
                    <!-- <br>
                    Incrustración de Animaciones 2D, Modelos 3D y diseños gráficos en una sola composición -->
                </p>
            </div>
            <v-row justify="center" class="margin">
                <v-card v-for="(card, i) in cards" :key="i" height="300" width="200" class="ma-2 mx-5 transparent">
                    <v-dialog
                            v-model="dialog"
                            overlay-opacity="1"
                            persistents
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

                        <v-card v-if="aume" class="blr" width="500">
                            <!-- <v-card-title class="text-h5 ma-2">
                            {{cardar.name}}
                            </v-card-title> -->
                            <v-card-subtitle class="pt-4 text-center orange--text">
                                {{cardar.name}} <br> 
                                Concepto e illustracion animada de artes digitales
                            </v-card-subtitle>

                            <v-img class="mx-auto ma-4" width="650" :src="cardar.img2"></v-img>
                            <h5 class="text-center mb-2">
                                <v-icon>mdi-instagram</v-icon>
                                @ismrnobody
                            </h5>

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
                            </v-card-actions>
                        </v-card>
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
                    name: 'The Joker',
                    img: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/joker_00002.png?alt=media&token=a8b2ffa0-a611-4b02-8984-4a6ef46ff53a',
                    img2: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/joker_4.gif?alt=media&token=0be29fb6-567a-4397-bfff-1dd9df800b37'
                },
                {   
                    name: 'The Weeknd',
                    img: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/The%20Weeknd_00012.png?alt=media&token=9251397b-70d4-478b-a0fb-fbd91448195d',
                    img2: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/weknd3.gif?alt=media&token=9f60e74e-1f87-42d2-a51b-4bc2fbdaa83b'
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
.blr {
    background: rgba(184, 0, 0, 0.198);
    backdrop-filter: blur(16px);
}
.br {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/The%20Weeknd_00012.png?alt=media&token=9251397b-70d4-478b-a0fb-fbd91448195d');
}
</style>
