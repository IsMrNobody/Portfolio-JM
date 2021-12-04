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
            name: 'water3',
            path: 'https://assets2.lottiefiles.com/packages/lf20_rwu0zr8i.json' // the path to the animation json
        })
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('water3')
        },
        stop(){
            // lottie.setDirection(-1)
            lottie.stop('water3') 
        }
    }
}
</script>

<style scoped>
.tam {
    width: 92%;
}
</style>