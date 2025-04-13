import { component$ } from "@builder.io/qwik";
import Avion from "~/assets/avions/avions2.png?jsx"
import Avion2 from "~/assets/avions/avions3.png?jsx"
import Article from "~/components/Blog/article";

export default component$(() => {
    return <section class="p-4">
        <div class="grid grid-cols-2 px-16 py-32">
            <div class="p-4 relative">
                <h1 class="text-6xl font-bold">
                    Blog
                </h1>
                <p class="text-xl p-4">
                    Lisez les derniers articles écrits par des étudiants!
                </p>
                <Avion class="-scale-x-100 w-1/2 absolute bottom-0 -left-48 -rotate-12"/>
            </div>
            <div class="min-h-96 relative">
                <Article
                    class="shadow-xl shadow-isen-500 hover:shadow-isen-500/50
                        transition-shadow duration-500 p-8"
                    titre="Une vie associative dynamique"
                    description="Clubs, événements, compétitions : la vie étudiante à l’ISEN Méditerranée est rythmée et enrichissante."
                    image="gala"/>
                <div class="w-full h-full absolute top-0 left-0 -z-10 -rotate-3
                    bg-gradient-to-br from-isen-500 to-isen-900"/>
                <Avion2 class="absolute -top-10 right-2 z-20 h-4/5 w-auto"/>
            </div>
        </div>
        <div class="grid grid-cols-3 px-8 py-16 gap-8 *:min-h-64">
            <Article
                titre="Des campus entre mer et technologies"
                description="Située à Toulon et Marseille, l’ISEN Méditerranée offre un cadre d’études unique, au cœur de la tech et du soleil."
                image="sud"/>
            <Article
                titre="Une pédagogie active et innovante"
                description="Projets concrets, travaux en équipe, enseignements par problèmes : une méthode adaptée aux ingénieurs de demain."
                image="amphi"/>
            <Article
                titre="L’international au cœur de la formation"
                description="Stages, échanges et doubles diplômes dans plus de 30 pays : l’ISEN prépare ses étudiants à un monde globalisé."
                image="sud"/>
            <Article
                titre="Le Gala de l’ISEN, un moment inoubliable"
                description="Chaque année, le Gala réunit étudiants, diplômés et enseignants pour une soirée prestigieuse et festive."
                image="gala"/>
            
            <Article
                titre="Des partenariats avec l’industrie"
                description="L’école travaille main dans la main avec les entreprises pour proposer des stages et projets professionnels concrets."
                image="amphi"/>
            <Article
                titre="L’innovation au service de l’environnement"
                description="Des projets étudiants portés sur l’énergie verte, la mobilité durable et la protection des océans."
                image="sud"/>
            <Article
                titre="Devenir ingénieur… et bien plus encore"
                description="À l’ISEN, on forme des ingénieurs curieux, engagés et ouverts, prêts à transformer le monde."
                image="amphi"/>
        </div>
    </section>
});