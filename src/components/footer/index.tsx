import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuInstagram, LuLinkedin, LuYoutube } from "@qwikest/icons/lucide";
import Logo from "~/assets/isen/logo-blanc.png?jsx"
import { LienFondu } from "./lien";

const categories = [
    {
        nom: "Accueil",
        lien: "",
        liens: {
            'Partie 1': '#1',
            'Partie 2': '#2',
            'Partie 3': '#3'
        }
    },
    {
        nom: "L'école",
        lien: "",
        liens: {
            "Formations": '',
            "Matières": '',
            "Partenaires": '',
            "International": '',
            "Master spécialisé": ''
        }
    },
    {
        nom: "Vie étudiante",
        lien: "",
        liens: {
            "Evenements": '',
            "Associations": '',
            "Projets": '',
            "Ville/ Logements": ''
        }
    }
]

export default component$(() => {
    return <footer class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div class="bg-gradient-to-br from-isen-500 to-isen-900 text-white 
            relative p-6 md:p-12 w-full overflow-hidden flex flex-col gap-4 content-between">
            <div class="absolute md:block bg-white -rotate-12 -top-16 -right-16 w-40 h-96 hidden"/>
            <Logo class="md:max-w-3/4 max-w-full"/>
            <div class="flex flex-row gap-4">
                <Link target="_blank" 
                    href="https://www.instagram.com/isenmediterranee/">
                    <LuInstagram class="w-6 h-6"/>
                </Link>
                <Link target="_blank" 
                    href="https://www.linkedin.com/company/isen-mediterranee/">
                    <LuLinkedin class="w-6 h-6"/>
                </Link>
                <Link target="_blank" 
                    href="https://www.youtube.com/channel/UCpVrAR52BwO_utn1PGdxhDg">
                    <LuYoutube class="w-6 h-6"/>
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
                <Link href="" class="text-lg font-medium">
                    Blog
                </Link>
                <Link href="" class="text-lg font-medium">
                    Blabla 1
                </Link>
                <Link href="" class="text-lg font-medium">
                    Blabla 2
                </Link>
                <Link href="" class="text-lg font-medium">
                    Blabla 3
                </Link>
            </div>
        </div>
    </footer>
}); 