<template>
    <v-card class="fixed ma-5" height="320" outlined>
        <v-card-title class="display-3">
          Josè Millan
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="8">
              <p>I am a graphic artist dedicated to digital art,
                I live creating projects from simple sketches to complex designs,
                I am dedicated to grow professionally offering very creative results.</p>
                <Redes class="mar" />
            </v-col>
            <v-col>
              <v-img src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/perfil.png?alt=media&token=cc268878-2d9d-4c72-a398-a51a56a1cd31" width="160"></v-img>
            </v-col>
          </v-row>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions class="black">
          <v-col>
            <v-img src="icon.png" width="120"></v-img>
          </v-col>
          <v-col cols="8">
            <v-card-text>
            <h2>About Me</h2>
            <span>(Artist, Developer, Designer)</span>
            <p>I have the ability to adapt to the requirements of the client to help you create
                what you really want, I solve the needs of visual communication on different platforms</p>
            </v-card-text>
            <!-- <v-btn
              color="primary"
              nuxt
              to="/inspire"
            >
              Continu2
            </v-btn> -->
          </v-col>
          <!-- <v-spacer /> -->
        </v-card-actions>
        <v-col>
          <DialogMoralis />
        </v-col>
        <!-- <Redes class="mar" /> -->
      </v-card>
</template>

<script>
import DialogMoralis from '@/components/DialogMoralis'

export default ({
  components: {
    DialogMoralis
  }
})
</script>


<style scoped>
.fixed {
  position: fixed;
  max-width: 670px;
  background: rgb(0,0,0);
}
.mar {
  margin-top: 80px;
}
</style>