import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { animate, scroll } from "motion"

import Landing from "~/components/accueil/Landing";
import Quoi from "~/components/accueil/Quoi";
import Qui from "~/components/accueil/Qui";
import Ou from "~/components/accueil/Ou";
import Contenu from "~/components/accueil/Contenu";
import Chat from "~/assets/isen/chat-parant.png?jsx"

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
        <div class="p-8 md:p-16 lg:p-32 relative">
            <iframe class="md:w-2/3 min-h-[60vh] rounded-md ml-auto"
                src="https://www.youtube.com/embed/muAkY-7uyds?si=JZHmXTHLJ7q7Hmnp" 
                />
            <Chat class="absolute top-8 left-36 h-32 w-auto"/>

        </div>
    </>
});
export const head: DocumentHead = {
    frontmatter: {
        absolute: true,
        color: 'text-white',
        fond: 'bg-white/25 rounded backdrop-blur-sm'
    }
};
