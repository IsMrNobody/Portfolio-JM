<template>
    <v-col class="text-center">
        <Tilt class="bgi">
            <!-- data-tilt-full-page-listening -->
            <p>EARTH</p>
            <v-card
                height="340"
                max-width="300"
                class="bg ma-4 text-center mx-auto"
            >
                    <Tierra v-show="tierra" class="ani fill-height" />
                    <Tierra2 v-show="tierra2" class="ani fill-height" />
                    <Tierra3 v-show="tierra3" class="ani fill-height" />
            </v-card>
            <v-col align="center">
                <v-btn small color="orange" @click="atack()">atack</v-btn>
                <v-btn small color="orange" @click="respirar()">breathe</v-btn>
                <v-btn small color="orange" @click="death()">death</v-btn>
            </v-col>
        </Tilt>
    </v-col>
</template>

<script>
import lottie from 'lottie-web'
import Tilt from 'vanilla-tilt-vue'
import Tierra from '@/components/elements/animaciones/tierra/Tierra'
import Tierra2 from '@/components/elements/animaciones/tierra/Tierra2'
import Tierra3 from '@/components/elements/animaciones/tierra/Tierra3'
export default {
    components: {
        Tilt,
        Tierra,
        Tierra2,
        Tierra3,
    },
    data: () => ({ 
        tierra: false,
        tierra2: true,
        tierra3: false
    }),
    methods: {
        respirar() {
            this.tierra = false
            this.tierra2 = true
            this.tierra3 = false
            lottie.play('tierra2')
        },
        death() {
            this.tierra2 = false
            this.tierra = false
            this.tierra3 = true
            lottie.play('tierra3')
        },
        atack() {
            this.tierra2 = false
            this.tierra = true
            this.tierra3 = false
            lottie.play('tierra')
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
    background: linear-gradient(0deg, rgb(197, 186, 23) 10%, rgba(28,27,26,1) 49%, rgba(0,0,0,1) 90%);
}
.bg {
    transition: 1s;
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