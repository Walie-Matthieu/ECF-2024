<template>
    <!-- Partie HTML: description des elemennts du site -->
    
    <div class="page-entree-body" >

        
         <h1>Parc zoologique Arcadia</h1>

         <p>Depuis 1960</p>
   
        <!-- <div>
            <img class="photo-singes" 
                 src="src/info-singe.png"/>
        </div> -->

        <h2>Bienvenu à vous sur le site du Zoo Arcadia 
            <br>
            Veuillez trouver la liste de tout nos animaux 
            <br>
            De la Savane, jusqu'au Marais en passant par la Jungle
            <br>
            Nos animaux n'attendent que vous !

        </h2>

        <h3>
            <!-- Slogan -->
            VIVEZ L'ETAT SAUVAGE EN MILIEUX URBAIN
        </h3>
<!-- Utilisez le composant Cases -->
            <Cases />
     </div>
 
</template>

<script>
import Cases from './Cases.vue';

export default {
  name: 'PageEntree',
  components: {
    Cases
  }
}
</script>

<style scoped>
    /* Partie CSS: description des styles visuels */

         /* Titre du site */
    h1{  
        position: absolute;
        top: -10px; left: 20px;
        color: aliceblue;

        background-color: rgb(42, 63, 159);
        padding: 5px;
        z-index: 1;
    }
    
         /* Texte de presentation du Zoo */
    h2{

        position: absolute;
        top: 340px; left: 590px;
        color: aliceblue;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

        padding: 35px;
        border-radius: 10px 20px 30px 40px;
        background-color: rgb(107, 45, 10); 
        
    }

    p{
        position: absolute;
        top: 45px; left: 280px;
        font-family: fantasy;
        z-index: 1;
    }

    .photo-singes{
        position: absolute;
        width: 100%; height: 600px;
        top: 0px; left: 0px;

    }

    * {
  outline: 1px solid red; /* Met une bordure autour de tous les éléments */
}

    .page-entree-body {
        background-color: rgb(21, 143, 41);
        background-size: cover;
        min-height: 100vh;
        min-width: 100%;
     }



    h3{
        position: absolute;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        color: aliceblue;
        font-family: cursive;
        font-size: large;
        z-index: 1;
        left: 520px;
        top: 582px;

        /* Faire en sorte que le background puisse faire toute la longueur  */
        background-color: rgb(24, 90, 11);
        padding: 5%
    }

    /* Media Queries pour les écrans plus petits */
@media (max-width: 768px) {
    .page-entree-body {
        padding: 10px;
    }

    h1, h2, h3 {
        font-size: 1.2em;
    }

    .photo-singes {
        max-height: 300px;
    }
}

/* Media Queries pour les écrans moyens */
@media (min-width: 769px) and (max-width: 1024px) {
    .page-entree-body {
        padding: 15px;
    }

    h1, h2, h3 {
        font-size: 1.5em;
    }

    .photo-singes {
        max-height: 400px;
    }
}

/* Media Queries pour les grands écrans */
@media (min-width: 1025px) {
    .page-entree-body {
        padding: 20px;
    }

    h1, h2, h3 {
        font-size: 2em;
    }

    .photo-singes {
        max-height: 600px;
    }
}
</style>