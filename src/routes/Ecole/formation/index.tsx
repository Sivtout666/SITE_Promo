import { component$ } from "@builder.io/qwik";


export default component$(() => {
    return <section class="flex flex-col gap-16">
        <Presentation/>
        <Formations/>
        <Chiffres/>
    </section>
});