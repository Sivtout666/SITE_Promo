import { component$ } from "@builder.io/qwik";

import Carte from "~/components/Carte"
import Partenaire from "~/components/Carte/partenaire"

export default component$(() => {
    return <section>
        <div class="h-52 w-full"/>
        <div class="w-full h-[60vh] relative">
            <Carte/>
            <Partenaire/>
        </div>
        <div class="h-52 w-full"/>
    </section>
});