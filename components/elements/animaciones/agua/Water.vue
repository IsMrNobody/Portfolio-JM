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
            name: 'water',
            path: 'https://assets7.lottiefiles.com/packages/lf20_he0piwmk.json' // the path to the animation json
        })
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('water')
        },
        stop(){
            // lottie.setDirection(-1)
            lottie.stop('water') 
        }
    }
}
</script>

<style scoped>
.tam {
    width: 92%;
}
</style>