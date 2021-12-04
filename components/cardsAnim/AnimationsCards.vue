<template>
    <v-col class="mt">
        <h3 class="text-center orange--text mb-5">CHARACTERS</h3>
        <v-row>
            <v-col cols sm="6" md="4">
                <TierraCard />
            </v-col>
            <v-col cols sm="6" md="4">
                <FuegoCard />
            </v-col>
            <v-col cols sm="6" md="4">
                <AguaCard />
            </v-col>
            <v-col cols sm="6" md="4">
                <AireCard />
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import TierraCard from '@/components/cardsAnim/TierraCard'
import FuegoCard from '@/components/cardsAnim/FuegoCard'
import AguaCard from '@/components/cardsAnim/AguaCard'
import AireCard from '@/components/cardsAnim/AireCard'
export default {
    components: {
        TierraCard,
        FuegoCard,
        AguaCard,
        AireCard


    },
    data: () => ({ }),
    methods: { }
}
</script>

<style scoped>
.mt {
    margin-top: 100px;
    margin-bottom: 100px;
}
p {
  font-family: "Lucida Console", "Courier New", monospace;
}
h3 {
    font-family: 'Outfit', sans-serif;
    font-size: 2em;
}
</style>