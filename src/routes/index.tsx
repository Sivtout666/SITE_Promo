import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { animate, scroll } from "motion"
import Landing from "~/components/Accueil/landing";
import Clouds from "~/components/Accueil/clouds";

export default component$(() => {
    // eslint-disable-next-line qwik/no-use-visible-task
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
        <Landing>
            <Clouds/>
        </Landing>

        <section class="h-1/2 bg-lime-600 text-white">
            <p class="p-8">
                Qui nous sommes
            </p>

            {/* 
                Les ingénieurs formés à l’ISEN disposent d’une solide formation scientifique 
                et de la maîtrise du numérique.
            
                grande école, à but non lucratif et labellisée EESPIG.

                 accompagné tout au long de son parcours de formation, un parcours qui correspond 
                 autant à ses envies qu’aux besoins des entreprises et de la société.
            */}
        </section>
        <section class="h-1/2 bg-blue-600 text-white">
            <p class="p-8">
                Qu'est-ce qu'on y fait
            </p>

            {/* 
                Formation BAC+5 Ingénieur 
                options ...

                Bachelor Cybersécurité
                Bachelor truc..
            */}
        </section>
        <section class="h-1/2 bg-emerald-600 text-white">
            <p class="p-8">
                Pour qui
            </p>

            {/* 
                Entrées BAC+2 et Postbac via parcoursup
            */}
        </section>
        <section class="h-1/2 bg-indigo-800 text-white">
            <p class="p-8">
                Où
            </p>

            {/* 
                Campus de Toulon et Marseille
            */}
        </section>
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
