import Batiment from "~/assets/batiment.png?jsx"

// J'utilise seulement du jsx (pas de component$) parce qu'ici
// je veux que la page ne soit pas fragmenté en plusieurs parties.
// https://qwik.dev/docs/advanced/dollar/

import Clouds from "./clouds"
import Logo from "~/assets/isen/logo-blanc.png?jsx"
export default () => <section id="landing" 
    class="w-screen h-auto md:h-screen relative overflow-hidden
    from-blisen-500 to-blisen-900 bg-gradient-to-b">
    <div id="soleil" class="w-96 h-96 absolute
        -top-80 left-16 bg-white blur-3xl"/>
    <div class="flex flex-col justify-center
        w-full h-auto md:w-1/2 md:h-screen text-white
        px-8 py-32 md:p-8">
        <Logo class="max-w-1/2"/>
        <h1 class="text-5xl font-black my-4">
            Rejoignez la génération qui transforme le monde
        </h1>
        <p class="text-xl font-normal text-white/50">
            Deviens acteur du monde numérique avec une formation d’ingénieur en phase avec ton époque.
            ISEN Méditerranée, c’est bien plus qu’une école, c’est un tremplin vers l’avenir.
        </p>
        <Batiment id="batiment"
            class="bottom-0 right-0 w-auto md:absolute
                ml-auto mt-32 -mx-8 -my-32 md:m-0 
                h-[60vw] md:h-[55vh] lg:h-[80vh]"/>
        <Clouds/>
    </div>
</section>