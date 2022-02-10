<template>
  <div>
    <transition name="cart">
      <v-row v-if="show">
          <Skills />
      </v-row>
    </transition>
    <v-row>
      <Alert />
    </v-row>
    <v-row>
      <v-col cols sm="6">
        <Card1 />
      </v-col>
      <v-col cols sm="6">
        <Card2 />
      </v-col>
    </v-row>
    <transition name="cart">
      <v-col cols="12">
        <Slider />
      </v-col>
    </transition>
    <transition name="cart">
      <v-col v-if="show" cols>
        <Mensajeria />
        <v-col cols sm="9" class="mx-auto mt-5">
          <Animation4 class="mt-5 mb-5" />
          <Redes />
        </v-col>
        <p class="text-center">millanquintana9@gmail.com</p>
      </v-col>
    </transition>
  </div>
</template>

<script>
import Alert from '@/components/Alert'
import Skills from '@/components/Skills'
import Redes from '@/components/Redes'
import Animation4 from '@/components/Animation4'
// import Inter0activity from '@/components/Interactivity'
import Card1 from '@/components/Card1'
import Card2 from '@/components/Card2'
import Slider from '@/components/Slider'
import Mensajeria from '@/components/Mensajeria'
// import DialogMoralis from '@/components/DialogMoralis'
export default {
  components: {
    Card1,
    Card2,
    Slider,
    Mensajeria,
    Skills,
    Redes,
    Animation4,
    Alert
    // DialogMoralis,
    // Interactivit0y
  },
  data: () => ({
    show: false
  }),
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 1000);
  },
}
</script>

<style scoped>
p {
  opacity: 0.7;
  font-family: "Lucida Console", "Courier New", monospace;
}
.cart-enter-active {
  animation: card 2s;
}
@keyframes card {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>