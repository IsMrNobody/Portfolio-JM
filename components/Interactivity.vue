<template>
    <!--  1. Create a lottie player with a reference -->
    <lottie-player id="firstLottie"
                    ref="lottie"
                    mode="normal"
                    speed="1"
                    hover="true"
                    src="/monkey.json"
                    style="width: 320px;">
    </lottie-player>
</template>

<script>
  import '@lottiefiles/lottie-player';
  import { create } from '@lottiefiles/lottie-interactivity';

  export default {
  name: 'App',

  mounted() {
    // 2. listen for player load. See lottie player repo for other events
    this.$refs.lottie.addEventListener('load', function() {
      // 3. configure the interactivity library
      create({
        mode: 'scroll',
        player: '#firstLottie',
        actions: [
          {
            visibility: [0, 1],
            type: 'seek',
            frames: [0, 100],
          },
        ],
      });
    })
  }
}
</script>

<style scoped>
.fix {
  position: fixed;
}
</style>