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
    return <>
        <div class="h-50 bg-blue-950"></div>
    </>
}); 