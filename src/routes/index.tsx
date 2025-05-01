import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { animate, scroll } from "motion"
import Landing from "~/components/Accueil/Landing";
import Quoi from "~/components/Accueil/Quoi";
import Qui from "~/components/Accueil/Qui";
import Ou from "~/components/Accueil/Ou";
import Contenu from "~/components/Accueil/Contenu";

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
        <Landing/>
        <Quoi/>
        <Contenu/>
        <Qui/>
        <Ou/>
        <dialog class="backdrop-blur-sm">

        </dialog>
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
    frontmatter: {
        absolute: true,
        color: 'text-white',
        fond: 'bg-white/25 rounded backdrop-blur-sm'
    }
};
