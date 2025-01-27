<template>
    <div class="body">
      <h1>Bienvenue à la Savane</h1>
      <p>Voici la page dédiée à la Savane.</p>
      <!-- Ajoutez plus de contenu ici pour vérifier que le composant est bien rendu -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Savane',
    data() {
      return {
      };
    },
    methods: {
    }
  }
  </script>
  
  <style scoped>
  .body {
     background-color: rgb(203, 183, 8);
    background-size: cover;
    min-height: 70vh; /* Assurez-vous que le conteneur occupe toute la hauteur de la fenêtre */
    width: 70vw; /* Assurez-vous que le conteneur occupe toute la largeur de la fenêtre */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Media Queries pour les écrans plus petits */
@media (max-width: 768px) {
    .body {
        padding: 10px;
    }

    h1, p {
        font-size: 1.2em;
    }
}

/* Media Queries pour les écrans moyens */
@media (min-width: 769px) and (max-width: 1024px) {
    .body {
        padding: 15px;
    }

    h1 {
        font-size: 1.5em;
    }

    p {
        font-size: 1.3em;
    }
}

/* Media Queries pour les grands écrans */
@media (min-width: 1025px) {
    .body {
        padding: 20px;
    }

    h1 {
        font-size: 2em;
    }

    p {
        font-size: 1.5em;
    }
}
  </style>