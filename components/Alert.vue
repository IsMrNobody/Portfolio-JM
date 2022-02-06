<template>
    <div>
        <Rayos v-if="aler" class="pos" />
    </div>
</template>

<script>
import Rayos from '@/components/Rayos'
export default ({
    components: {
        Rayos
    },
    computed: {
        aler(){
            return this.$store.state.alert.alert
        }
    }


})
</script>

<style scoped>
.pos {
    position: absolute;
    bottom: 180px;
    z-index: 2;
    left: 50%;
    /* top: 50%; */
    transform: translate(-50%, -50%);
}
</style>