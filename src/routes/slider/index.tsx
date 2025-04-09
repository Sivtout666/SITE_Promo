import { component$, useSignal, type JSXOutput } from "@builder.io/qwik";

type ObjetProp = {
    children: JSXOutput,
    name: string,
    class?: string
}
const Objet = (props: ObjetProp) => <div 
    class={"w-[60vw] snap-center flex items-center justify-center text-4xl text-white font-semibold " 
        + (props.class && props.class)} 
    data-name={props.name}>
    { props.children }
</div>

export default component$(() => {
    const lastScroll = useSignal(0)
    const selection = useSignal('object-1');
    return <section class="w-screen h-screen">
        <div class="h-2/3 w-screen overflow-x-scroll snap-x snap-mandatory" onScroll$={(event, t) => {
            lastScroll.value = event.timeStamp;

            // le setTimeout execute la fonction 
            // qu'on lui passe 50 millisecondes après qu'on l'execute
            setTimeout(() => {
                // Cette condition assure qu'on n'execute pas 
                // la fonction toutes les millisecondes
                if(lastScroll.value != event.timeStamp) {
                    return
                } 

                // On récupère tous les éléments
                const item = [...document.querySelectorAll('div[data-name]')]
                    // On récupère leur position sur l'écran et leur nom
                    .map(item => ({
                        rect: item.getBoundingClientRect(), 
                        name: item.getAttribute('data-name')
                    }))
                    // On enlève ceux hors de l'écran
                    .filter(item => item.rect.left >= 0)
                    // On récupère le plus proche de la gauche.
                    .reduce((previous, value) => previous.rect.left > value.rect.left ? value : previous)
                
                    if(item.name) {
                    selection.value = item.name
                }
            }, 50)
        }}>
            <div class="h-full w-max flex flex-row">
                <Objet class="bg-lime-600 ml-[20vw]" name="object-1">
                    Objet 1
                </Objet>
                <Objet class="bg-fuchsia-600" name="object-2">
                    Objet 2
                </Objet>
                <Objet class="bg-cyan-600" name="object-3">
                    Objet 3
                </Objet>
                <Objet class="bg-purple-600" name="object-4">
                    Objet 4
                </Objet>
                <Objet class="bg-emerald-600" name="object-5">
                    Objet 5
                </Objet>
                <Objet class="bg-red-600" name="object-6">
                    Objet 6
                </Objet>
                <Objet class="bg-orange-600 mr-[20vw]" name="object-7">
                    Objet 7
                </Objet>
            </div>
        </div>
        <div class="w-screen h-1/3 bg-black text-white flex justify-center items-center text-3xl">
            Objet sélectionné : <span class="font-semibold ml-2"> {selection.value}</span>
        </div>
    </section>
})