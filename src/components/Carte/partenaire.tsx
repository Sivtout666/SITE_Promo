import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { Partenaire } from "~/lib/leaflet/partenaires";
import { LuLanguages, LuLink } from "@qwikest/icons/lucide"

export default component$(() => {
    const partenaire = useSignal<Partenaire>()
    const div = useSignal<HTMLDivElement>()

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        document.addEventListener('open-partenaire', (event) => {
            const partenaire_entrant: Partenaire = (event as CustomEvent).detail;
            partenaire.value = partenaire_entrant;
        })

        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement | null;
            if(!div.value) return

            if(document.contains(div.value) && !div.value.contains(target)) {
                partenaire.value = undefined
            }
        })
    })

    return partenaire.value && <div ref={div} class="z-[500] md:absolute top-0 right-0 md:w-fit md:max-w-[50vw] md:h-full p-8 
        bg-white/25 backdrop-blur-sm border-l border-white overflow-y-auto w-full h-fit">
        <h3 class="text-red-600 text-sm font-semibold my-1">
            {partenaire.value.pays}
        </h3>
        <h1 class="text-2xl font-semibold">
            {partenaire.value.nom}
        </h1>
        <div class="flex flex-row gap-2 items-center my-3">
            {
                partenaire.value.anglais && <div
                    class="flex flex-row px-3 py-1 gap-2 items-center bg-black/10 w-fit
                        select-none">
                    <LuLanguages/>
                    {
                        partenaire.value.anglais
                    }
                </div>
            }
            {
                partenaire.value.lien && <a target="_blank" href={partenaire.value.lien}
                    class="flex flex-row px-3 py-1 gap-2 items-center w-fit
                    bg-red-600 hover:bg-red-600/50 text-white transition-colors">
                    <LuLink/>
                    Site internet
                </a>
            }
        </div>
    </div>
})