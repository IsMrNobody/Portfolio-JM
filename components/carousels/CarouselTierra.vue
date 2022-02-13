<template>
  <div>
      <v-dialog
        v-model="dialog"
        width="750"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            outlined
            dark
            v-bind="attrs"
            v-on="on"
          >
            Gallery
          </v-btn>
        </template>

        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <div class="text-center black">
          <nuxt-link to="/elements" class="deco">
              <v-btn outlined color="white" class="mt-2 mb-2">ver mas</v-btn>
          </nuxt-link>        
        </div>
      </v-dialog>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcap%201.png?alt=media&token=245a79d5-659a-4160-8a8e-8e235e77d090',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcap%202.png?alt=media&token=5965b14d-4f2e-411f-a047-19176a3109aa',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcap%203.png?alt=media&token=13946b63-919b-4d09-93be-a00312bdcd3d',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcap%204.png?alt=media&token=912250f7-dc98-4979-bee0-ee87ad4c3f0f',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcapa%205.png?alt=media&token=f01d0a21-7317-476c-87f1-69d74019f064',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcapa%206.png?alt=media&token=52f82481-e567-473b-87aa-c9837bb53682',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcapa%207.png?alt=media&token=fd785ae3-4f67-458f-a23d-0b94f7dc8707',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/portfolio%2Fcarousel%20elements%2Fcap%208.png?alt=media&token=54b1c262-7d77-4829-a211-4acb418df974',
          }
        ],
      }
    },
  }
</script>

<style scoped>
.deco {
  text-decoration: none;
}
</style>