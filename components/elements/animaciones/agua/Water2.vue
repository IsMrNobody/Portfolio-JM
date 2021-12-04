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
            name: 'water2',
            path: 'https://assets6.lottiefiles.com/packages/lf20_jdz8tien.json' // the path to the animation json
        })
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('water2')
        },
        stop(){
            // lottie.setDirection(-1)
            lottie.stop('water2') 
        }
    }
}
</script>

<style scoped>
.tam {
    width: 92%;
}
</style>