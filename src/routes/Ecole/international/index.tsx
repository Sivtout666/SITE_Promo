import { component$ } from "@builder.io/qwik";

import Presentation from "./Presentation";
import Experience from "./Experience";
import Partenaires from "./Partenaires";

export default component$(() => {
    return <section class="flex flex-col gap-16">
        <Presentation/>
        <Partenaires/>
        <Experience/>

        {/* 
        - Erasmus
        - Séjour linguistique
        - Projet personnels
        */}
    </section>
});