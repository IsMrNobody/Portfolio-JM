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
            autoplay: true,
            name: 'el',
            path: 'https://assets5.lottiefiles.com/packages/lf20_dxfgfpmu.json' // the path to the animation json
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