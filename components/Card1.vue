<template>
    <transition name="cart">
      <v-card v-if="show" elevation="10" class="ma-5 bg" outlined max-width="600">
          <div class="black">
            <!-- <Animation2 class="posi" /> -->
            <v-img src="https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/JM%2Fmarco.png?alt=media&token=5d02f6a7-e0b9-4981-8e0d-9cb16e7a3e01" class="posi" height="100%"></v-img>
            <v-col class="abs">
              <div class="text-center">
                <v-row justify="center mt-4">
                  <Rayos class="pos" />
                </v-row>
                <v-col justify="center" class="mt-5 mx-auto">
                  <v-avatar size="170">
                    <v-img
                        width="300"
                        src="https://res.cloudinary.com/dku13l2ep/image/upload/v1680556795/nobody/descarga_17_ryc35v.png"
                    >
                    </v-img>
                  </v-avatar>
                  <h1>Josè Millan</h1>
                  <p>Front-end Developer
                    <br>
                    and Graphic Art
                  </p>
                  <hr class="orange my-3">
                </v-col>
              </div>
              <v-card-text class="text-center">
                <v-col>
                  <v-row justify="center">
                      <p class="tx">I am a graphic artist dedicated to digital art,
                        I live creating projects from simple sketches to complex designs,
                        I am dedicated to grow professionally offering very creative results.
                      </p>
                      <v-col>
                        <Redes />
                        <p>millanquintana9@gmail.com</p>
                      </v-col>
                  </v-row>
                </v-col>
              </v-card-text>
          </v-col>
        </div>
      </v-card>
    </transition>
</template>

<script>
// import Animation2 from '@/components/Animation2'
import Rayos from '@/components/Rayos'
export default ({
  components: {
    Rayos,
    // Animation2
  },
  data: () => ({
    show: false
  }),
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 500);
  },
})
</script>


<style scoped>
.bg {
background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 79%, rgba(255,154,45,1) 93%, rgba(255,188,0,1) 98%);
}
.mar {
  margin-top: 80px;
}
p {
  font-family: "Lucida Console", "Courier New", monospace;
}
.pos {
  position: absolute;
  z-index: 1;
  height: 200px;
  mix-blend-mode: hard-light;
  /* background-color: hotpink; */
}
.posi{
  position: absolute;
  width: 100%;
  opacity: 0.3;
}
.abs {
  z-index: 10;
}
h1 {
  font-family: 'Outfit', sans-serif;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; 
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

.cart-enter-active {
  animation: bounce-in .2s;
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
</style>