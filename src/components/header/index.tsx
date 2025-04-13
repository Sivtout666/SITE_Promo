import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {

    return <>
        <div class="h-20 w-screen flex flex-row justify-around items-center bg-transparent z-[9999] relative text-isen-900 ">
            <div id="logo" class="text-2xl">ISEN Méditerranée</div>
            <div id="jspl'autrecotequoi" class="flex flex-row gap-15">
                <div class="hover:underline underline-offset-5
                text-xl">
                    <Link href="/" class="py-6">Accueil</Link>
                </div>

                <div class="hover:underline underline-offset-5 hover:border-isen-900 text-xl group relative">
                    <Link class="py-6">L'école</Link>
                    <div class="p-3 absolute top-10 hidden right-0 group-hover:block border-1 bg-white">
                        <div class="flex flex-row w-xl gap-10 p-3 pl-2">  {/* Dropdown*/}
                            <div class="flex flex-col gap-2"> {/* Partie gauche du dropdown*/}
                                <Link href="/ecole/formation" class="hover:underline">Formation</Link>
                                <Link href="/ecole/matieres" class="hover:underline">Matières / Emploi du temps</Link>
                                <Link href="/ecole/partenaires" class="hover:underline">Partenaires / Entreprises</Link>
                            </div>
                            <div class="flex flex-col gap-2">{/* Partie droite du dropdown*/}
                                <Link href="/ecole/international" class="hover:underline">International</Link>
                                <div class="flex flex-col pl-6 text-sm">
                                    <Link>- Destinations</Link>
                                </div>
                                <Link href="/ecole/recherches" class="hover:underline">Recherches / Master spécialisé</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hover:underline underline-offset-5 text-xl group relative">
                    <Link class="py-6">Vie étudiante</Link>
                    <div class="p-3 absolute top-10 hidden right-0 group-hover:block border-1 bg-white">
                        <div class="flex flex-row w-xl gap-20 p-3 pl-10">  {/* Dropdown*/}
                            <div class="flex flex-col gap-2"> {/* Partie gauche du dropdown*/}
                                <Link href="/vie_etudiante/Evenements" class="hover:underline">Événements</Link>
                                <div class="flex flex-col pl-6 text-sm w-60">
                                    <Link>En cliquant ici vous pouvait voir des événements comme les week end d'integration et plus encore</Link>
                                </div>
                                <Link href="/vie_etudiante/Associations" class="hover:underline">Associations</Link>
                            </div>  
                            <div class="flex flex-col gap-2">{/* Partie droite du dropdown*/}
                                <Link href="/vie_etudiante/Projets" class="hover:underline">Projets</Link>
                                <div class="flex flex-col pl-6 text-sm">
                                    <Link>- Tide</Link>
                                    <Link>- Drone</Link>
                                    <Link>- Garage Week</Link>
                                    <Link>- Innovation Week</Link>
                                </div>
                                <Link href="/vie_etudiante/Ville" class="hover:underline">Ville / Logements</Link>
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