import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuInstagram, LuLinkedin, LuYoutube } from "@qwikest/icons/lucide";
import Logo from "~/assets/isen/logo-blanc.png?jsx"
import { LienFondu } from "./lien";

const categories = [
    {
        nom: "Accueil",
        lien: "/",
        liens: {
            "Qui sommes-nous ?": '/#qui',
            "Qu'est-ce qu'on y fait ?": '/#contenu',
            'Pour qui ?': '/#pour-qui'
        }
    },
    {
        nom: "L'école",
        lien: "/ecole",
        liens: {
            "Formations": '/ecole/formation',
            "International": '/ecole/international',
            "Matières": '/ecole/matieres',
            "Partenaires": '/ecole/partenaires',
            "Master spécialisé": '/ecole/recherches',
        }
    },
    {
        nom: "Vie étudiante",
        lien: "/vie_etudiante",
        liens: {
            "Evenements": '/vie_etudiante/Evenements',
            "Associations": '/vie_etudiante/Associations',
            "Projets": '/vie_etudiante/Projets',
            "Ville/ Logements": '/vie_etudiante/Ville'
        }
    }
]

export default component$(() => {
    return <footer class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div class="bg-gradient-to-br from-isen-500 to-isen-900 text-white 
            relative p-6 md:p-12 w-full overflow-hidden flex flex-col gap-4 justify-between">
            <div class="absolute md:block bg-white -rotate-12 -top-16 -right-16 w-40 h-96 hidden"/>
            <Logo class="md:max-w-3/4 max-w-full"/>
            <p class="text-xs max-w-4/5 text-white/50">
                Ce site est un projet étudiant, il n'est pas officiel.<br/>
                Projet d'SHES CIN1 groupe A (LTMEECC)
            </p>
            <div class="flex flex-row gap-4">
                <p class="font-medium">
                    Suivez-nous
                </p>
                <Link target="_blank" class="group"
                    href="https://www.instagram.com/isenmediterranee/">
                    <LuInstagram class="w-6 h-6 group-hover:stroke-white/75 transition-colors"/>
                </Link>
                <Link target="_blank" class="group"
                    href="https://www.linkedin.com/company/isen-mediterranee/">
                    <LuLinkedin class="w-6 h-6 group-hover:stroke-white/75 transition-colors"/>
                </Link>
                <Link target="_blank" class="group"
                    href="https://www.youtube.com/channel/UCpVrAR52BwO_utn1PGdxhDg">
                    <LuYoutube class="w-6 h-6 group-hover:stroke-white/75 transition-colors"/>
                </Link>
            </div>
        </div>
        <div class="p-6 md:p-12 lg:col-span-2 w-full
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2">
            {
                categories.map(({ nom, lien, liens }) => <div key={nom}>
                    <Link class="text-lg font-medium" href={lien}>
                        { nom }
                    </Link>
                    <ul class="px-2 py-1 flex flex-col gap-1">
                        {
                            Object.entries(liens).map(([nom, lien]) => <li key={nom}>
                                <LienFondu href={lien}>
                                    {nom}
                                </LienFondu>
                            </li>)
                        }
                    </ul>
                </div>)
            }
            <div class="flex flex-col gap-1">
                <Link href="/blog" class="text-lg font-medium">
                    Blog
                </Link>
                <Link href="#not-yet" class="text-lg font-medium">
                    Politique de confidentialité
                </Link>
                <Link target="_blank" href="https://isen-mediterranee.fr" class="text-lg font-medium">
                    Site officiel
                </Link>
                <Link href="#not-yet" class="text-lg font-medium">
                    Mentions légales
                </Link>
            </div>
        </div>
    </footer>
}); 