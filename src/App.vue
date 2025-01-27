<!-- Ce fichier est le fichier d'entree du site, celui qui est lu par le navigateur -->
<!-- C'est ici que tu vas placer tous tes composants (les fichiers que tu as créé) -->

<template>
  <!-- Partie HTML: description des elements du site -->
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<!-- <script setup>
  // Partie code javascript
  import PageEntree from './components/PageEntree.vue';
  import Cases from './components/Cases.vue';
  import Savane from './components/Savane.vue';
</script> -->

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  /* Partie CSS - scoped: seulement ce fichier */
  .app-container {
    color: rgb(0, 0, 0);
    align-items: center;
   }
</style>

<style scoped>
  /* Partie CSS non-scoped: s'applique partout */
  /* Background */
  body {
    background-color: rgb(21, 143, 41);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 170vh;
    min-width: 50vw;
    max-width: 100vw;
     }
</style>

<style>
@import './style.css';
</style>
