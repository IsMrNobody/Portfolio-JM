<template>
    <v-col class="text-center">
        <Tilt class="bgi">
            <!-- data-tilt-full-page-listening -->
            <p>FIRE</p>
            <v-card
                height="340"
                max-width="300"
                class="bg ma-4 text-center mx-auto"
            >
                    <!-- <Fire v-show="card" class="ani fill-height" /> -->
                    <Fire2 v-show="card2" class="ani fill-height" />
                    <Tierra3 v-show="card3" class="ani fill-height" />
            </v-card>
            <v-col align="center">
                <v-btn disabled small color="orange" @click="atack()">atack</v-btn>
                <v-btn small color="orange" @click="respirar()">breathe</v-btn>
                <v-btn disabled small color="orange" @click="death()">death</v-btn>
            </v-col>
        </Tilt>
    </v-col>
</template>

<script>
import lottie from 'lottie-web'
import Tilt from 'vanilla-tilt-vue'
import Fire2 from '@/components/elements/animaciones/fuego/Fire2'
// import Tierra2 from '@/components/elements/animaciones/tierra/Tierra2'
import Tierra3 from '@/components/elements/animaciones/tierra/Tierra3'
export default {
    components: {
        Tilt,
        Fire2,
        // Tierra2,
        Tierra3,
    },
    data: () => ({ 
        card: false,
        card2: true,
        card3: false
    }),
    methods: {
        respirar() {
            this.card = false
            this.card2 = true
            this.card3 = false
            lottie.play('fireatack')
        },
        death() {
            this.card2 = false
            this.card = false
            this.card3 = true
            lottie.play('fireatack')
        },
        atack() {
            this.card2 = true
            this.card = false
            this.card3 = false
            lottie.play('fireatack')
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
    background: linear-gradient(0deg, rgb(197, 38, 23) 10%, rgba(28,27,26,1) 49%, rgba(0,0,0,1) 90%);
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