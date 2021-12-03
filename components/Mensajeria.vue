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
// import firebase from 'firebase/app'
// import { db } from '@/plugins/firebase'
  export default {
    //  firebase: {
        // post: datosRef
      // },
    data: () => ({
        name: '',
        email: '',
        mensaje: ''
      }),    

    methods: {
      enviar() {
        // const data = [this.name, this.email, this.mensaje, ]
          try {
            // datosRef.push([data])
            // updates['/posts/'] = data;
          } catch (error) {
               console.log(error.message); 
          }
          console.log(this.data)
        },
    },
  }
</script>
