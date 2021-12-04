<template>
    <v-col class="mt">
        <h3 class="text-center orange--text mb-5">Skills</h3>
        <v-row justify="space-around">
                <Tilt
                    data-tilt-max-glare="0.3"
                    data-tilt-glare
                >
            <nuxt-link to="/elements">
                    <!-- data-tilt-full-page-listening -->
                    <v-card
                        height="340"
                        class="bg ma-4"
                    >
                        <v-card-text class="text-center">
                            <p>Web Animation</p>
                        <Animation class="ani fill-height" />
                        </v-card-text>
                    </v-card>
            </nuxt-link>
                </Tilt>
                <Tilt
                    data-tilt-max-glare="0.3"
                    data-tilt-glare
                >
                    <!-- data-tilt-full-page-listening -->
                    <v-card
                        height="340"
                        class="bg ma-4"
                    >
                        <v-card-text class="text-center">
                            <p>Web Development</p>
                        <Animation2 class="ani" />
                        </v-card-text>
                    </v-card>
                </Tilt>
                <Tilt
                    data-tilt-max-glare="0.1"
                    data-tilt-glare
                >
                    <!-- data-tilt-full-page-listening -->
                    <v-card
                        height="340"
                        class="bg ma-4"
                    >
                        <v-card-text class="text-center">
                            <p>Ilustration Digital</p>
                            <Animation3 class="ani" />
                        </v-card-text>
                    </v-card>
                </Tilt>
        </v-row>
    </v-col>
</template>

<script>
import Tilt from 'vanilla-tilt-vue'
import Animation from '@/components/Animation'
import Animation2 from '@/components/Animation2'
import Animation3 from '@/components/Animation3'
export default {
    components: {
        Tilt,
        Animation,
        Animation2,
        Animation3
    },
    data: () => ({ })
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
.bg {
    transform-style: preserve-3d;
    transform: perspective(1000px);
    border: 0.8px solid orange;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(28,27,26,1) 49%, rgba(0,0,0,1) 90%);
}
.bg:hover p{
    color: orange;
}
.mt {
    margin-top: 70px;
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