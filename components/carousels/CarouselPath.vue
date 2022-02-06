<template>
  <v-carousel hide-delimiters height="300">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%202.png?alt=media&token=1f16b041-f14f-42a6-9609-694264a2292b',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%203.png?alt=media&token=2aaabc96-dd43-4e5d-92c9-b05d88752665',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%204.png?alt=media&token=f6dac9c8-bf74-430a-bc7a-861ad32401b0',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%205.png?alt=media&token=dfb4f70b-7ba8-41f2-927b-dfee11cea8af',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%206.png?alt=media&token=953484f9-dd88-4cb8-9dcd-1598414ac834',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20path%2Fcapa%201.png?alt=media&token=d32dbca7-ddf7-4203-b0c5-354608d8e904',
          }
        ],
      }
    },
  }
</script>