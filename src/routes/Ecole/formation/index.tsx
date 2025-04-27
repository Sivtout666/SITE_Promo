import { component$ } from "@builder.io/qwik";

import Presentation from "./Presentation";
import Formations from "./Formations";
import Chiffres from "./Chiffres";

export default component$(() => {
    return <section class="flex flex-col gap-16">
        <Presentation/>
        <Formations/>
        <Chiffres/>
    </section>
});