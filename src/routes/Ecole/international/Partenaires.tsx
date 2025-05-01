import Carte from "~/components/carte"
import Partenaire from "~/components/carte/partenaire"

export default () => <>
    <div class="px-16">
        <h2 class="text-4xl font-medium my-4 relative w-fit">
            Nos écoles partenaires 🤝
            <div class=" absolute -bottom-2 left-0 w-full h-1 rounded
                bg-gradient-to-r to-isen-500 from-isen-900/25"/>
        </h2>
        <p class="text-xl font-light lg:max-w-1/2">
            Vous aurez l'opportunité d'étudier dans nos écoles partenaires 
            mais vous pouvez également proposer votre propre projet.
        </p>
    </div>
    <div class="w-full h-[60vh] relative">
        <Carte/>
        <Partenaire/>
    </div>
</>