<template>
    <div
        ref="Container"
        class="tam mx-auto"
        @mouseenter="play()"
        @mouseleave="stop()"
    >
    </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
    data: () => ({}),
    mounted() {
        this.anim = lottie.loadAnimation({
            container: this.$refs.Container, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: false,
            name: 'el',
            path: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fjsonfiles%2Fjoker.json?alt=media&token=104719b5-fa53-480f-9717-b1b99dd1ae26' // the path to the animation json
        })
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('el')
        },
        stop(){
            // lottie.setDirection(-1)
            lottie.stop('el')
        }
    }
}
</script>

<style scoped>
.tam {
    width: 200px;
}
</style>