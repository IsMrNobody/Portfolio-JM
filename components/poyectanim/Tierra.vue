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
            name: 'tierra',
            path: 'https://assets4.lottiefiles.com/packages/lf20_rm0lkgbp.json' // the path to the animation json
        })
    },
    methods: {
        play(){
            lottie.setDirection(1)
            lottie.play('tierra')
        },
        stop(){
            // lottie.setDirection(-1)
            lottie.stop('tierra') 
        }
    }
}
</script>

<style scoped>
.tam {
    width: 300px;
}
</style>