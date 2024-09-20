<template>
    <div class="Cases-habitat-animaux">

        <img class="savane" title="savane"
           src="src/savane.jpg" />

        <img class="jungle" title="jungle"
           src="src/jungle.jpg"/>

        <img class="marais" title="marais"
           src="src/marais.jpg"/>

    </div>

</template>

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

 /* Penser à mettre en Grid de façon à ce que les cases soient empilées en catégories différentes,
 Et rajouter un petit effet sur chaque catégories  */
 
.Cases-habitat-animaux{
    display: flex;
    gap: 60px;
    position: absolute;
    left: 150px;
    top: 910px;
    align-items: center;
    
}

</style>