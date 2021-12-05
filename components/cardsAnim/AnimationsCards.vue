<template>
    <v-row class="mb">
        <v-col class="mt" cols="12">
            <h3 class="text-center orange--text mb-5">CHARACTERS</h3>
            <p class="text-center mb-5">Design and Animation of the NFT's Elements game mascots</p>
        </v-col>
        <v-col align="center" cols sm="6" md="4" lg="3">
            <TierraCard />
        </v-col>
        <v-col cols sm="6" md="4" lg="3">
            <FuegoCard />
        </v-col>
        <v-col cols sm="6" md="4" lg="3">
            <AguaCard />
        </v-col>
        <v-col cols sm="6" md="4" lg="3">
            <AireCard />
        </v-col>
    </v-row>
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
.mb {
    margin-bottom: 200px;
}
p {
  font-family: "Lucida Console", "Courier New", monospace;
}
h3 {
    font-family: 'Outfit', sans-serif;
    font-size: 2em;
}
</style>