<template>
    <div>
        <v-col class="text-center">
            <h2>Desing and Animations</h2>
            <p>Diseño y animacion 2D para aplicaciones web y videojuegos</p>
        </v-col>
        <v-col class="marg">
            <v-parallax
                height="250"
                :class="{parall: parallAct}"
                src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/banner-rion.png?alt=media&token=30a84d25-c5c8-499e-b4c1-4d7a3b09035f"
            >
                <div class="posFot text-center">
                    <Orion />
                    <!-- <v-img class="ma-2 margen" src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/logorion_1.png?alt=media&token=ac86e0a3-f49f-4d1a-9451-63322ff72246"></v-img> -->
                </div>
                <div class="bgbl"></div>
                <v-col class="posFot2">
                    <p class="justify">Orion gallery <br> Proyecto de Arte y Diseño digital, creaciòn web personal como portafolio web</p>
                    <Carousel />
                    <!-- <v-btn @click="vergalery(), parallAct = !parallAct" class="mt-5" outlined color="white">ver</v-btn> -->
                </v-col>
            </v-parallax>
        </v-col>

        <v-col class="marg">
            <v-parallax
                height="250"
                :class="{parall: parallAct}"
                src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/banner-path-2.png?alt=media&token=4693c254-0940-4f24-a1f8-0b9243bcc59e"
            >
                <div class="posFot text-center">
                    <!-- <v-row justify="center"> -->
                        <v-img class="ma-2 posi" src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fgoldenhat3d-APNG.png?alt=media&token=2e0bffe1-e9b1-44bd-bd50-a3ee4e2b10a7"></v-img>
                    <!-- </v-row> -->
                </div>
                <div class="bgbl"></div>
                <v-col class="posFot2">
                    <p class="justify">Path <br> Diseño y animación de complementos gráficos 2D y 3D para videojuego de alquimia</p>
                    <CarouselPath />
                    <!-- <v-btn @click="vergaleryPath(), parallAct = !parallAct" class="mt-5" outlined color="white">ver</v-btn> -->
                </v-col>
            </v-parallax>
        </v-col>
        
        <v-col class="marg">
            <v-parallax
                height="250"
                :class="{parall: parallAct}"
                src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/banner-orakler.png?alt=media&token=c8149f84-ea8b-461a-aa8c-1a67ef53f3fb"
            >
                <div class="posFot text-center">
                    <Orak />
                </div>
                <div class="bgbl"></div>
                <v-col class="posFot2">
                    <p class="justify">Orakler <br>Animaciòn de Tarjetas NFT con personajes del videojuego</p>
                    <CarouselOrak />
                    <!-- <v-btn @click="vergaleryOrak(), parallAct = !parallAct" class="mt-5" outlined color="white">ver</v-btn> -->
                </v-col>
            </v-parallax>
        </v-col>

        <v-col class="marg">
            <v-parallax
                height="250"
                :class="{parall: parallAct}"
                src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fbanner-element.png?alt=media&token=3369fe67-e2e9-40ea-b495-954687043038"
            >
                <div class="posFot text-center">
                    <v-row justify="center">
                        <Tierra />
                        <!-- <v-img class="ma-2 posi" src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2FTierra%20element_8.png?alt=media&token=31ec3dc6-49ba-4681-83e3-f16bee09a477"></v-img> -->
                    </v-row>
                </div>
                <div class="bgbl"></div>
                <v-col class="posFot2">
                    <p class="justify">Elements <br> Diseño y animación de mascotas NFT`s para viedeojuego blockchain</p>
                    <CarouselTierra />
                    <!-- <v-btn @click="vergaleryTierra(), parallAct = !parallAct" class="mt-5" outlined color="white">ver</v-btn> -->
                </v-col>
            </v-parallax>
        </v-col>

        <Animation4 class="mt-5 mb-5" />
        <Redes />
        
    </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import CarouselPath from '@/components/carousels/CarouselPath'
import CarouselTierra from '@/components/carousels/CarouselTierra'
import CarouselOrak from '@/components/carousels/CarouselOrak'
import Redes from '@/components/Redes'
import Animation4 from '@/components/Animation4'
import Tierra from '@/components/poyectanim/Tierra'
import Orak from '@/components/poyectanim/Orak'
import Orion from '@/components/poyectanim/Orion'

export default ({
    components: {
        Tierra,
        Orak,
        Orion,
        Redes,
        Animation4,
        Carousel,
        CarouselPath,
        CarouselOrak,
        CarouselTierra
    },
    data: () => ({
        galery: false,
        galeryPath: false,
        galeryOrak: false,
        galeryTierra: false,
        parallAct: false
    }),
    methods: {
        vergalery() {
            this.galery = !this.galery
            this.galeryPath = false
            this.galeryOrak = false
            this.galeryTierra = false
        },
        vergaleryPath() {
            this.galeryPath = !this.galeryPath
            this.galery = false
            this.galeryOrak = false
            this.galeryTierra = false
        },
        vergaleryOrak() {
            this.galeryOrak = !this.galeryOrak
            this.galery = false
            this.galeryPath = false
            this.galeryTierra = false
        },
        vergaleryTierra() {
            this.galeryTierra = !this.galeryTierra
            this.galeryOrak = false
            this.galery = false
            this.galeryPath = false
        }
    },
})
</script>


<style scoped>
.marg {
    margin-top: 200px;
    margin-bottom: 200px;
}
.posFot {
    position: absolute;
    margin-top: -10px;
    width: 250px;
    height: 250px;
    z-index: 2;
    /* background: rgba(0, 0, 0, 0.164);
    backdrop-filter: blur(20px); */
    transition: 1s;
}
.posFot2 {
    position: absolute;
    margin: 0 0% 350px;
    width: 250px;
    height: 250px;
    z-index: 2;
    transition: 1s;
}
.marg:hover .posFot {
    /* margin-left: -12%; */
    opacity: 0.2;
    margin-top: 10%;
}
.marg:hover .posFot2 {
    margin: 0 0% 0%;
}
.margin {
    top: 100px;
}
.margen {
    top: 30px;
}
.margen1 {
    top: 15px;
}
.bgbl {
    height: 250px;
    width: 250px;
    background: black;
    background: rgba(0, 0, 0, 0.164);
    backdrop-filter: blur(20px);
}
.caro {
    position: absolute;
    width: 600px;
    z-index: 2;
    /* right: 25%; */
    left: 50%;
    /* transform: translate(-50%, -50%); */
    margin-top: -11%;
}
.cent {
    position: absolute;
    z-index: 2;
}
.galery-enter-active {
    transform: translate(-50%, -50%);
  animation: card 1s;
}
.galery-leave-active {
    transform: translate(-50%, -50%);
  animation: card2 1s;
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
@keyframes card2 {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.parall {
    /* width: 70%; */
    transition: 1s;
    opacity: 0.5;
}
.txt {
    text-decoration: none;
}
.deco {
    text-decoration: none;
}
</style>