import { component$ } from "@builder.io/qwik";
import Article from "~/components/blog/article";
import Entete from "./Entete";

export default component$(() => {
    return <section class="p-4">
        <Entete/>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 px-8 py-16 gap-8 *:min-h-64">
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