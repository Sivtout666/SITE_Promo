import { component$ } from "@builder.io/qwik";
import RepairSalle from "~/assets/associations/photos_asso/repair_salle.jpg?jsx";
import Repair from "~/assets/associations/photos_asso/ordi_repair.jpg?jsx";
import RG from "~/assets/associations/robin_gauche.png?jsx";


export default component$(() => {

    return <>
        <div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">ISEN Repair</div>  
                <div class="bg-black w-5xl h-0.5"></div> 
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-isen-500 w-3xl h-100 flex flex-col p-8 text-white rounded-3xl justify-center">
                        <div class="mb-3">L’ISEN Repair est une association dédiée à <strong>la réparation d’ordinateur et de matériel informatique.</strong></div>
                        <div class="mb-3">Elle a pour but de <strong>venir en aide aux associations, écoles et autres structures</strong> qui manquent de matériel et d’équipement informatique.</div>
                        <div class="mb-3">Les activités de l’association permettent aux membres de gagner en compétences <strong> Hardware</strong> et <strong>Software</strong> tout en faisant une bonne action !</div>
                        <div><strong>" Quelles sont les actions menées cette année par votre association ? Et quel bilan dressez-vous de celles-ci ?</strong></div>
                        <div>Cette année a été marquée notamment par un partenariat international nous ayant permis d’envoyer des machines au Togo avec l’aide de notre partenaire Electriciens sans frontières. Cette collaboration nous a permis d’étendre notre portée à une nouvelle échelle. "</div>
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class=" w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="flex flex-row justify-evenly items-center w-svw">
                    <div class="w-140 h-80 mb-5">
                        <RepairSalle class="w-full h-full object-cover"/>
                    </div>
                    
                </div> 
            </div>
        </div>

    </>

});