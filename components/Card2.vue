<template>
<div>
    <transition name="carta">
        <v-card v-if="show" class="bg ma-5" outlined>
            <v-card-actions class="black">
              <v-row>
                  <v-card-text>
                    <v-card-title>
                      <h2>About Me</h2>
                    </v-card-title>
                    <v-card-subtitle>
                      <span class="orange--text">(Artist, Designer, Developer)</span>
                    </v-card-subtitle>
                  <p>I have the ability to adapt to the requirements of the client to help you create
                      what you really want, I solve the needs of visual communication on different platforms.</p>
                  </v-card-text>
              </v-row>
            </v-card-actions>
        </v-card>
        </transition>
          <transition name="carta">
        <v-card v-if="show" class="ma-5 bg" outlined>
            <v-card-text class="black">
                <v-card-title class="title">Tools</v-card-title>
                    <Tools />
                    <Tools1 />
                    <Tools2 />
            </v-card-text>
        </v-card>
    </transition>
</div>
</template>

<script>
// import DialogMoralis from '@/components/DialogMoralis'
import Tools from '@/components/Tools'
import Tools1 from '@/components/Tools1'
import Tools2 from '@/components/Tools2'
export default {
    components: {
        // DialogMoralis
        Tools,
        Tools2,
        Tools1
    },
      data: () => ({
        show: false
      }),
    beforeMount() {
    setTimeout(() => {
      this.show = true
    }, 1000)
  },
}
</script>

<style scoped>
h2 {
  font-family: 'Outfit', sans-serif;
  /* color: orange; */
}
.bg {
transition: 1s;
background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 79%, rgba(255,154,45,1) 93%, rgba(255,188,0,1) 98%);
}
.txto:hover {
color: orange;
}
p {
  font-family: "Lucida Console", "Courier New", monospace;
}
.gry:hover {
    background-color: #161616;
}
.carta-enter-active {
  animation: bounce-in .3s;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.title {
  color: orange;
  font-family: 'Outfit', sans-serif;
}
</style>