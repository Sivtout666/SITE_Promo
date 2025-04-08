import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Batiment from "~/assets/batiment.png?jsx"
import { animate, scroll } from "motion"

export const Landing = () => <section id="landing"
    class="w-screen h-screen relative
    from-blisen-500 to-blisen-900 bg-gradient-to-b">
    <div id="soleil" class="w-96 h-96 absolute
        -top-80 left-16 bg-white blur-3xl"/>
    <Batiment id="batiment"
        class="fixed bottom-0 right-0 w-[85vh]"/>
    <div class="flex flex-col justify-center 
        w-1/2 h-screen text-white
        p-8">
        <h1 class="text-5xl font-black my-4">
            Gros titre, bien comme il le faut.
        </h1>
        <p class="text-xl font-normal text-white/50">
            et le sous titre, moins imposant mais present.
            Il donne un minimum d'informations 
            sur qu'est-ce que cette page
        </p>
    </div>
</section>

export default component$(() => {
    useVisibleTask$(() => {
        scroll(
            animate('#batiment', {
                translate: [0, '100%']
            }, { ease: 'easeOut' }),
            {
                target: document.getElementById('landing')!,
                offset: ['end end', 'end start']
            }
        )
    })

    return <>
        <Landing/>
        <section class="h-screen bg-fuchsia-800"/>
        <section class="h-screen bg-lime-400"/>
    </>
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
