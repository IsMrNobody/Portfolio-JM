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
            path: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fjsonfiles%2Fname.json?alt=media&token=2aacbdd8-d9ce-4e24-aca5-1cabfc3f89b8' // the path to the animation json
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
    max-width: 400px;
}
</style>