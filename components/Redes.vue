<template>
  <v-row class="text-center transparent">
    <v-col v-for="(log, i) in logos" :key="i">
      <!-- <v-img class="mx-auto" :src="log.img" width="40"></v-img> -->
      <a :href="log.link" style="text-decoration:none; color:white;" target="_blank">
      <v-icon color="orange" size="40" class="hov">{{log.icon}}</v-icon>
        <p>{{log.text}}</p>
      </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    logos: [
      {
        img: 'icon.png',
        icon: 'mdi-github',
        text: 'Github',
        link: "https://github.com/IsMrNobody"
      },
      {
        img: 'icon.png',
        icon: 'mdi-linkedin',
        text: 'Linkedin',
        link: "https://www.linkedin.com/in/jamquintana/"
      },
      {
        img: 'icon.png',
        icon: 'mdi-instagram',
        text: 'Instagram',
        link: "https://www.instagram.com/ismrnobody/"
      }
    ]
  })
}
</script>

<style scoped>
.hov:hover {
  top: -10px;
  transform: scale(1.2);
}
.hov {
  top: 0px;
  animation: 1s;
}
p {
  font-family: "Lucida Console", "Courier New", monospace;
}
</style>