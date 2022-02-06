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
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20orak%2Fcapa%201.png?alt=media&token=2322e0b1-04cc-43b8-95a3-841d0bfdadbf',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20orak%2Fcapa%202.png?alt=media&token=842d7aa1-361f-4f56-841a-53ca4cf07355',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20orak%2Fcapa%203.png?alt=media&token=9a76d171-30e9-4586-8304-e12d7f25f7ba',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20orak%2Fcapa%204.png?alt=media&token=941fcc40-9a28-4f5f-910e-18e8987a29f8',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20orak%2Fcapa%205.png?alt=media&token=ad0cf6cc-0c34-4f2b-9edf-bd39bc57c2b1',
          }
        ],
      }
    },
  }
</script>