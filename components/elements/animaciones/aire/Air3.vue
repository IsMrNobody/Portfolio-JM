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
            name: 'air3',
            path: 'https://assets8.lottiefiles.com/packages/lf20_5jgzu6zp.json' // the path to the animation json
        })
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('air3')
        },
        stop(){
            // lottie.setDirection(-1)
            lottie.stop('air3') 
        }
    }
}
</script>

<style scoped>
.tam {
    width: 92%;
}
</style>