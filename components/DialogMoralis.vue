<template>
  <v-row justify="center" align="center" class="pa-5">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="390"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-img
          class="text-center">
          <Animation />
          <!-- <v-img class="mx-auto" width="280" src="/icon.png"></v-img> -->
          <v-btn
            color="#ff9a2d"
            light
            v-bind="attrs"
            v-on="on"
            @click="play()"
          >
            Invite me a Coffe
          </v-btn>
        </v-img>
      </template>
      <v-card>
        <v-card-title class="text-h6">
          Gracias por el Cafe!
            <v-spacer></v-spacer>
            <v-btn
                color="white darken-1"
                text
                v-if="!account"
                @click="loguear()"
            >
                Conect
            </v-btn>
            <v-btn @click="logOut()" v-if="account">logout</v-btn>
        </v-card-title>
        <v-col v-show="account" class="text-center">
            <v-avatar>
                <img src="data:image/png;base64,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" alt="">
            </v-avatar>
            <p>{{this.nameUser}}</p>
            <p>BNB: {{this.balanceBnb}}</p>
            <p>Eth: {{this.balanceEth}}</p>
            <v-card-text>
              {{account}}
            </v-card-text>
        </v-col>
        <v-card-actions>
            <v-form>
                <v-row>
                    <v-text-field
                        label="My Account"
                        v-model="sendAccount"
                        placeholder="Num"
                        filled
                        disabled
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-if="!account"
                        label="Your Name"
                        v-model="name"
                        placeholder="This is a special person, thanks!"
                        filled
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-if="account"
                        label="Monto"
                        v-model="AmountValue"
                        placeholder="0"
                        filled
                        dense
                    ></v-text-field>
                </v-row>
            </v-form>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Salir
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="yellow darken-1"
            text
            v-if="AmountValue > 0"
            @click="enviarTransact()"
          >
            Send
          </v-btn>
          <!-- <v-spacer></v-spacer> -->
          <!-- <v-btn
            color="green darken-1"
            text
            :disabled="!account"
            @click="saveUser()"
          >
            Save
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Animation from '@/components/Animation'
const Moralis = require('moralis');
// Moralis.initialize("mFLjnyyrCOq9VWQnkSZpF3kktocQjaT0ltL6jPRV");
// Moralis.serverURL = "https://itrmpv4dxk31.usemoralis.com:2053/server"
const serverUrl = "https://itrmpv4dxk31.usemoralis.com:2053/server"
const appId = "mFLjnyyrCOq9VWQnkSZpF3kktocQjaT0ltL6jPRV"
Moralis.start({ serverUrl, appId});

  export default {
    components: {
      Animation
    },
    data () {
      return {
        dialog: false,
        account: '',
        sendAccount: '0x157dEE9A4bD1620A38c804e0f08219695Cf12aD5',
        AmountValue: '',
        mostrar: true,
        name: '',
        nameUser: '',
        user: [],
        balanceBnb: '',
        balanceEth: ''
      }
    },
    async created() {
      const isWeb3Active = Moralis.ensureWeb3IsInstalled()
        if (!isWeb3Active && !Moralis.User.current()) {
          console.log("No registrado");
        } else {
          try {
            await Moralis.enableWeb3();
            const user = Moralis.User.current()
            this.account = user.get('ethAddress')
            this.getBalance()
          } catch (error) {
            console.log('No hay usuario guardado')
          }
        }
    },
    methods: {
      play(){
        this.$store.dispatch('userLog/play', true)
      },
        async loguear() {
          try {
            const user = await Moralis.Web3.authenticate({ signingMessage: "Welcome to Orionet" })
            const chainId = "0x1";
            Moralis.switchNetwork(chainId)
            if(user){
                console.log(user.get('ethAddress'))
                this.account = user.get('ethAddress')
                this.nameUser = user.attributes.name
                if(this.name){
                  user.set("name", this.name)
                  user.save()
                  this.nameUser = user.attributes.name
                }
                this.getBalance()
                const chainId = await Moralis.getChainId()
                console.log(chainId)
            }
          } catch (error) {
            console.log(error)
            alert('Nos vemos pronto')
          }
        },
        enviarTransact() {
          try {
            if(Number(this.AmountValue) <= 0) {
              alert('Valor no permitido')
            }
            Moralis.transfer({
              type: "native",
              receiver: this.sendAccount,
              amount: Moralis.Units.ETH(`${this.AmountValue}`),
            })
            this.AmountValue = ''
          } catch (error) {
            console.log(error)       
          }
        },
        async getBalance() {
          // NATIVE BALANCE
          if(Moralis.User.current()){
            const chainlink = 'bsc'
            const balance = await Moralis.Web3API.account.getNativeBalance({chain: chainlink})
            this.balanceBnb = balance.balance
            console.log(balance)
          }
          if(Moralis.User.current()){
            const chainlink = 'eth'
            const balance = await Moralis.Web3API.account.getNativeBalance({chain: chainlink})
            this.balanceEth = balance.balance
            console.log(balance)
          }
          
          // NFT
          // const nft = await Moralis.Web3API.account.getNFTs({chain: chainlink})
          // console.log(nft)
        },
        saveUser() {
          const currentUser = Moralis.User.current();
          if(currentUser) {
            currentUser.set("name", this.name)
            currentUser.save()
            this.name = ''
            this.nameUser = currentUser.attributes.name
            console.log(currentUser)
          }
        },
        async logOut() {
          await Moralis.User.logOut().then(() => {
            this.dialog = false
            this.account = ''
            this.name = ''
          });
        }
    }
  }
</script>
