import { component$ } from "@builder.io/qwik";
import Tableau from "~/assets/isen/recherche.jpeg?jsx"
import Chat from "~/assets/isen/chat-gadenne.png?jsx"

export default component$(() => {
    return <section class="flex flex-col gap-32
        p-8 md:p-16 lg:p-32 xl:p-48">
        <div class="w-full relative isolate">
            <Tableau class="hidden md:block -z-10 absolute -bottom-32 -left-40 w-2/5 rounded-md rotate-3"/>
            <h3 class="text-black text-4xl font-medium">
                La recherche renforce la qualité de 
                l’enseignement
            </h3>
            <p class="text-black/50 text-2xl">
                et contribue à la résolution 
                de défis technologiques majeurs
            </p>
            <p class="text-black/50 text-2xl my-4 text-right ml-auto max-w-3/4">
                En intégrant les avancées scientifiques dans les programmes pédagogiques, 
                elle permet aux étudiants de se former au contact des connaissances 
                les plus récentes et des technologies de pointe.
            </p>

        </div>
        <div class="w-full grid md:grid-cols-3 min-h-[50vh] my-16 relative">
            <iframe  class="w-full h-full rounded-md col-span-2"
                src="https://www.youtube.com/embed/5PDB6Q9hfRk?si=BhpRWYfKnvCXbzhO&amp;controls=0" />
            <Chat class="absolute -top-16 -right-20 h-32 w-auto"/>
        </div>
    </section>
});