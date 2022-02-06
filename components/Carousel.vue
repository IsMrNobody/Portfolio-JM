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
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/banner-rion.png?alt=media&token=30a84d25-c5c8-499e-b4c1-4d7a3b09035f',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcorousel%20orion%2FCapa%201.png?alt=media&token=273c3a1e-c3a5-4530-866d-85bdeb18b23d',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcorousel%20orion%2FCapa%202.png?alt=media&token=9c51fb52-11ff-4ef6-be99-06efd62c0817',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcorousel%20orion%2FCapa%203.png?alt=media&token=92d36af7-51c7-4134-8221-3ba1031ead8a',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcorousel%20orion%2Fcapa%204.png?alt=media&token=89518b1f-357b-49ff-9368-c92d64ff0c86',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcorousel%20orion%2Fcapa%205.png?alt=media&token=d581dc1c-2922-4c1f-91d3-7e64373bda81',
          }
        ],
      }
    },
  }
</script>