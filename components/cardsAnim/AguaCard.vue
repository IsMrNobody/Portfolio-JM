<template>
    <v-row justify="center" class="text-center">
        <Tilt class="bgi">
            <!-- data-tilt-full-page-listening -->
            <p>WATER</p>
            <v-card
                height="340"
                max-width="300"
                class="bg ma-4 text-center mx-auto"
            >
                    <Water v-show="water" class="ani fill-height" />
                    <Water2 v-show="water2" class="ani fill-height" />
                    <Water3 v-show="water3" class="ani fill-height" />
            </v-card>
            <v-col align="center">
                <v-btn small color="orange" @click="atack()">atack</v-btn>
                <v-btn small color="orange" @click="respirar()">breathe</v-btn>
                <v-btn small color="orange" @click="death()">jump</v-btn>
            </v-col>
        </Tilt>
    </v-row>
</template>

<script>
import lottie from 'lottie-web'
import Tilt from 'vanilla-tilt-vue'
import Water from '@/components/elements/animaciones/agua/Water'
import Water2 from '@/components/elements/animaciones/agua/Water2'
import Water3 from '@/components/elements/animaciones/agua/Water3'
export default {
    components: {
        Tilt,
        Water,
        Water2,
        Water3,
    },
    data: () => ({ 
        water: false,
        water2: true,
        water3: false
    }),
    methods: {
        respirar() {
            this.water = false
            this.water2 = true
            this.water3 = false
            lottie.play('water2')
        },
        death() {
            this.water2 = false
            this.water = false
            this.water3 = true
            lottie.play('water3')
        },
        atack() {
            this.water2 = false
            this.water = true
            this.water3 = false
            lottie.play('water')
        }
    }
}
</script>

<style scoped>
.ani {
     transform: translateZ(0px);
     transition-duration: 1s;
}
.ani:hover {
     transform: translateZ(60px);
}
.bg:hover {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgb(23, 98, 197) 10%, rgba(28,27,26,1) 49%, rgba(0,0,0,1) 90%);
}
.bg {
    transform-style: preserve-3d;
    transform: perspective(1000px);
    border: 0.8px solid orange;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(28,27,26,1) 49%, rgba(0,0,0,1) 90%);
}
.bgi:hover p{
    color: orange;
}
.mt {
    margin-top: 300px;
    margin-bottom: 100px;
}
p {
  font-family: "Lucida Console", "Courier New", monospace;
}
h3 {
    font-family: 'Outfit', sans-serif;
    font-size: 2em;
}
</style>