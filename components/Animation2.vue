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
            name: 'el2',
            path: 'https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fjsonfiles%2Fcodigo1.json?alt=media&token=6699133a-bbb0-41de-adb2-8278756b7549' // the path to the animation json
        })
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('el2')
        },
        stop(){
            lottie.setDirection(-1)
            lottie.stop('el2')
        }
    }
}
</script>

<style scoped>
.tam {
    width: 200px;
}
</style>