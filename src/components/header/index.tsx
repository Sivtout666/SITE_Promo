import { component$ } from "@builder.io/qwik";
import { Link, useDocumentHead } from "@builder.io/qwik-city";

interface ParametesHeader {
    absolute?: boolean // passe au dessus de la page ?
    color?: string, // couleur du texte
    fond?: string // couleur du fond des sous-menus
}

export default component$(() => {
    const meta = useDocumentHead()
    const parametes = meta.frontmatter as ParametesHeader

    return <>
        <div class={["h-20 w-screen flex flex-row justify-around items-center", 
            "bg-transparent z-[9999] text-isen-900 transition-all",
            parametes.absolute ? 'absolute top-0 left-0' : 'relative',
            parametes.color ? parametes.color : 'text-isen-900']}>
            <div class="text-2xl font-bold">ISEN Méditerranée</div>
            <div class="flex flex-row gap-15">
                <div class="hover:underline underline-offset-5 text-xl">
                    <Link href="/" class="py-6">Accueil</Link>
                </div>

                <div class="hover:underline underline-offset-5 hover:border-isen-900 text-xl group relative">
                    <Link class="py-6">L'école</Link>
                    <div class={["p-3 absolute top-10 hidden right-0 group-hover:block border-1",
                        parametes.fond ? parametes.fond : 'bg-white']}>
                        <div class="flex flex-row w-xl gap-10 p-3 pl-2">  {/* Dropdown*/}
                            <div class="flex flex-col gap-2"> {/* Partie gauche du dropdown*/}
                                <Link href="/ecole/formation" class="hover:underline">Formation</Link>
                                <Link href="/ecole/matieres" class="hover:underline">Matières / Emploi du temps</Link>
                                {/* <Link href="/ecole/partenaires" class="hover:underline">Partenaires / Entreprises</Link> */}
                            </div>
                            <div class="flex flex-col gap-2">{/* Partie droite du dropdown*/}
                                <Link href="/ecole/international" class="hover:underline">International</Link>
                                <Link href="/ecole/recherches" class="hover:underline">Recherches / Master spécialisé</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hover:underline underline-offset-5 text-xl group relative">
                    <Link class="py-6">Vie étudiante</Link>
                    <div class={["p-3 absolute top-10 hidden right-0 group-hover:block border-1",
                        parametes.fond ? parametes.fond : 'bg-white']}>
                        <div class="flex flex-row w-xl gap-20 p-3 pl-10">  {/* Dropdown*/}
                            <div class="flex flex-col gap-2"> {/* Partie gauche du dropdown*/}
                                <Link href="/vie_etudiante/Evenements" class="hover:underline">Évènements</Link>
                                <Link href="/vie_etudiante/Associations" class="hover:underline">Associations</Link>
                            </div>  
                            <div class="flex flex-col gap-2">{/* Partie droite du dropdown*/}
                                <Link href="#" class="hover:underline">Projets</Link>
                                <Link href="#" class="hover:underline">Ville / Logements</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hover:underline underline-offset-5
                text-xl">
                    <Link href="/blog">Blog</Link>
                </div>  
            </div>
        </div>
    </>
}); 