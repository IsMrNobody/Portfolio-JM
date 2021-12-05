<template>
    <v-row justify="center" class="text-center">
        <Tilt class="bgi">
            <!-- data-tilt-full-page-listening -->
            <p>AIR</p>
            <v-card
                height="340"
                max-width="300"
                class="bg ma-4 text-center mx-auto"
            >
                    <Air v-show="aire" class="ani fill-height" />
                    <Air2 v-show="aire2" class="ani fill-height" />
                    <Air3 v-show="aire3" class="ani fill-height" />
            </v-card>
            <v-col align="center">
                <v-btn small color="orange" @click="atack()">atack</v-btn>
                <v-btn small color="orange" @click="respirar()">breathe</v-btn>
                <v-btn small color="orange" @click="death()">death</v-btn>
            </v-col>
        </Tilt>
    </v-row>
</template>

<script>
import lottie from 'lottie-web'
import Tilt from 'vanilla-tilt-vue'
import Air from '@/components/elements/animaciones/aire/Air'
import Air2 from '@/components/elements/animaciones/aire/Air2'
import Air3 from '@/components/elements/animaciones/aire/Air3'
export default {
    components: {
        Tilt,
        Air,
        Air2,
        Air3,
    },
    data: () => ({ 
        aire: false,
        aire2: true,
        aire3: false
    }),
    methods: {
        respirar() {
            this.aire = false
            this.aire2 = true
            this.aire3 = false
            lottie.play('air2')
        },
        death() {
            this.aire2 = false
            this.aire = false
            this.aire3 = true
            lottie.play('air3')
        },
        atack() {
            this.aire2 = false
            this.aire = true
            this.aire3 = false
            lottie.play('air')
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
    background: linear-gradient(0deg, rgb(107, 201, 255) 10%, rgba(28,27,26,1) 49%, rgba(0,0,0,1) 90%);
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