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
            path: '/codigo1.json' // the path to the animation json
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