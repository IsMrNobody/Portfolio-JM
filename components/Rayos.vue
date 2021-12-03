<template>
    <div
        ref="Container"
        class="tam mx-auto"
        @mouseenter="play()"
        @mouseleave="stop()"
        @scroll="play()"
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
            name: 'perfil',
            path: '/rayos.json' // the path to the animation json
        })
        setTimeout(() => {
            this.play()
        }, 3000);
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('perfil')
        },
        stop(){
            lottie.stop('perfil')
        }
    }
}
</script>

<style scoped>
.tam {
    width: 200px;
}
</style>