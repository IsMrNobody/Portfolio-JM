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

        <iframe width="100%" height="330" src="https://www.youtube.com/embed/GQ15PRhhYZI?autoplay=1" title="Animation NFT Cards" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <!-- <div class="text-center black">
          <nuxt-link to="/elements" class="deco">
              <v-btn outlined color="white" class="mt-2 mb-2">ver mas</v-btn>
          </nuxt-link>        
        </div> -->
      </v-dialog>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
  }
</script>

<style scoped>
.deco {
  text-decoration: none;
}
</style>
