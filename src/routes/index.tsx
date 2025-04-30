import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { animate, scroll } from "motion"
import Landing from "~/components/Accueil/landing";
import Clouds from "~/components/Accueil/clouds";
import Chapeau1 from "~/assets/chapeaux/chapeau1.png?jsx"
import Livre1 from "~/assets/livres/livre1.png?jsx"

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

        <section class="bg-white py-64 px-8 md:p-16 lg:p-32
            md:grid grid-cols-3 gap-2 items-center justify-center">
            <div class="col-span-2">
                <h3 class="text-lg md:text-2xl text-black/25 uppercase font-black">
                    Qui sommes-nous ?
                </h3>
                <div class="text-2xl md:text-4xl/normal font-medium">
                    Les ingénieurs formés à l’ISEN disposent d’une solide 
                    formation <span class="font-bold text-isen-500">technique</span> et
                     <span class="text-blisen-500 font-bold"> humaine </span> 
                    et d'une maîtrise du <span class="font-bold">numérique</span>.
                </div>
            </div>
            <Chapeau1 class="p-16 sm:p-8 md:p-4 lg:p-0"/>
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
        <section class="bg-white py-64 px-8 md:p-16 lg:p-32
            md:grid grid-cols-3 gap-2 items-center justify-center">
            <Livre1 class="p-16 sm:p-8 md:p-4 lg:p-0"/>
            <div class="col-span-2">
                <h3 class="text-lg md:text-2xl text-black/25 uppercase font-black">
                    Pour qui ?
                </h3>
                <div class="text-2xl md:text-4xl/normal font-medium">
                    Vous pouvez entrer à l'ISEN Méditerranée dès la sortie du Lycée 🏫 ! 
                    <br/>
                    <ul class="list-[square] pl-12 uppercase font-semibold
                        text-isen-500/75 text-2xl my-4">
                        <li>
                            BAC Générale ou Technologique
                        </li>
                        <li>
                            Prépa CPGE
                        </li>
                        <li>
                            BUT, BTS, License <span
                                class="text-isen-500/35 hover:text-isen-500/75 transition-colors">
                                (Info, Math, Elec ou Réseau)
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
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
