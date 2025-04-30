import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import RG from "~/assets/associations/robin_gauche.png?jsx";


export default component$(() => {

    return <>
        <div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Bureau des Étudiants</div>  
                <div class="bg-black w-5xl h-0.5"></div>
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-isen-500 w-3xl h-100 flex flex-col p-8 rounded-2xl text-white">
                        <div class="mb-3">Le Bureau des Etudiants ou BDE est une association composée d'étudiants volontaires et motivés. Il est bien plus qu’une simple organisation, c’est le <strong>pilier de la vie étudiante</strong>, c’est la plus grande association de l’école!</div>
                        <div class="mb-3">Le principal but du BDE est <strong>d’animer la vie étudiante</strong>. Il organise ainsi de nombreux évènements (soirées, journées, repas…) tels que le fameux Gala, la soirée d’Halloween, la Saint-Patrick…</div>
                        <div class="mb-3">Mais le BDE ce n’est pas que des soirées, c’est aussi <strong>une plateforme d’entraide</strong> qui permet d’assurer l’intégration de chacun au mieux. Il permettra de profiter <strong>d’un Week-end d’intégration</strong>, d’une <strong>journée de cohésion</strong> ou encore de <strong>soirées parrainages</strong> qui permettront aux étudiants de se sentir comme chez eux à l’ISEN</div>
                        <div>De plus, il est aussi l’interface entre l’administration et les étudiants. Présent au <strong>conseil d’administration de l’ISEN Yncréa Méditerranée</strong>, le BDE est là pour porter la voix des élèves.</div>
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>    
                    </div>  {/* image de robin pixelisé*/}
                </div> 
                <Link href="/vie_etudiante/Evenements" class="bg-white w-5xl h-10 rounded-3xl flex justify-center items-center text-xl border-black border-1 hover:bg-isen-500 hover:text-white">Aller à la page d'évènement </Link> 
            </div>
        </div>

    </>

});