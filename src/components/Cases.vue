<template>
    <div class="Cases-habitat-animaux">

        <img class="savane" title="savane"
           src="src/savane.jpg" 
           alt="Accès à Savane" 
           @click="goToSavane"
           style="cursor: pointer; width: 200px;" />

        <img class="jungle" title="jungle"
           src="src/jungle.jpg"
           style="cursor: pointer; width: 200px;" />

        <img class="marais" title="marais"
           src="src/marais.jpg"
           style="cursor: pointer; width: 200px;" />

    </div>

</template>

<script>
export default {
  methods: {
    goToSavane() {
      this.$router.push('/savane');
    }
  }
}
</script>

<style scoped>


img{
    width: 380px;
    transition: 1s;
}

img:hover{
   transition: 1s;
   color: none;
   width: 400px;
}
 
.Cases-habitat-animaux{
    display: flex;
    flex-direction: row;
    gap: 60px;
    position: relative;
    left: 420px;
    top: 750px !important;
    align-items: center;
}


/* Media Queries pour les écrans plus petits */
@media (max-width: 768px) {
    .Cases-habitat-animaux {
        flex-direction: row;
        gap: 10px;
        left: 0;
        top: 0;
    }

    img {
        max-width: 100%;
        width: auto;
    }
}

/* Media Queries pour les écrans moyens */
@media (min-width: 769px) and (max-width: 1024px) {
    .Cases-habitat-animaux {
        gap: 30px;
        left: 0;
        top: 0;
    }

    img {
        max-width: 80%;
    }
}

/* Media Queries pour les grands écrans */
@media (min-width: 1025px) {
    .Cases-habitat-animaux {
        gap: 40px;
        left: 0;
        top: 0;
    }

    img {
        max-width: 60%;
    }
}
</style>