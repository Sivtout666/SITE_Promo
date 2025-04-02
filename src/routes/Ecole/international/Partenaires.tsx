import Carte from "~/components/Carte"
import Partenaire from "~/components/Carte/partenaire"

export default () => <>
    <div class="px-16">
        <h2 class="text-4xl font-medium my-4">
            Nos écoles partenaires 🤝
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