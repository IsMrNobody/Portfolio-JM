<template>
    <div
        ref="Container"
        class="tam mx-auto"
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
            name: 'el2',
            path: 'https://assets8.lottiefiles.com/packages/lf20_hsowzqmc.json' // the path to the animation json
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
    position: absolute;
    transition: 1s;
    left: 0px;
    top: 0px;
    width: 200px;
}
.tam:hover {
    left: 0px;
    top: 10px;
    width: 250px;
}
</style>