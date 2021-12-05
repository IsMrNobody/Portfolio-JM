<template>
    <div>
        <Banner />
        <AnimationsCards />
        <Video1 />
    </div>
</template>

<script>
import Banner from '@/components/elements/Banner'
import Video1 from '@/components/elements/videos/Video1'
import AnimationsCards from '@/components/cardsAnim/AnimationsCards'

export default ({
    components: {
        Banner,
        AnimationsCards,
        Video1
    }
})
</script>
s