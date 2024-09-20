<!-- Ce fichier est le fichier d'entree du site, celui qui est lu par le navigateur -->
<!-- C'est ici que tu vas placer tous tes composants (les fichiers que tu as créé) -->

<template>
  <!-- Partie HTML: description des elements du site -->
  <div class="de-jolies-couleurs-avec-le-nom-que-tu-veux-mais-qui-devrait-aumoins-correspondre-aux-balises">
    <PageEntree/>
    <cases/>
  </div>
</template>

<script setup>
  // Partie code javascript
  import PageEntree from './components/PageEntree.vue';
  import Cases from './components/Cases.vue';
</script>

<style scoped>
  /* Partie CSS - scoped: seulement ce fichier */
  .de-jolies-couleurs-avec-le-nom-que-tu-veux-mais-qui-devrait-aumoins-correspondre-aux-balises {
    color: rgb(0, 0, 0);
    align-items: center;
   }
</style>

<style>
  /* Partie CSS non-scoped: s'applique partout */
  /* Background */
  body {
    background-color: rgb(16, 126, 34);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 170vh;
    min-width: 50vw;
    max-width: 100vw;
    
   }
</style>
