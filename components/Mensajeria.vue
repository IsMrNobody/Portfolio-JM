<template>
  <v-card flat class="transparent mx-auto" max-width="800">
    <v-card-title class="headline">
    Let's get in touch today
    </v-card-title>
    <v-form
      @submit.prevent="submit"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="name"
              color="orange darken-2"
              label="Name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="email"
              color="orange darken-2"
              label="Email"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="mensaje"
              color="orange darken-2"
            >
              <template #label>
                <div>
                  Message
                </div>
              </template>
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn
          light
          color="orange"
          class="mx-auto"
          @click="enviar()"
        >
          Enviar
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
// import lottie from 'lottie-web'
  export default {
    data: () => ({
        name: '',
        email: '',
        mensaje: ''
      }),    

    methods: {
      enviar() {
          if(this.mensaje){
              try {
              this.$fire.firestore.collection("mensajes").doc().set({
                name: this.name,
                email: this.email,
                mensaje: this.mensaje
              })
              this.$store.dispatch('alert/activAlert', true)
              this.name = ''
              this.email = ''
              this.mensaje = ''
            } catch (error) {
                console.log(error.message); 
            }
          } else {
            alert('Plesea send a message')
          }
        },
    },
  }
</script>
