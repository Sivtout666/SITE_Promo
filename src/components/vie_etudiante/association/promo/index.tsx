import { component$ } from "@builder.io/qwik";
import Gala from "~/assets/isen/gala.jpg?jsx";
import RG from "~/assets/associations/robin_gauche.png?jsx";
import Promo from "~/assets/associations/photos_asso/promo_po.jpg?jsx";

export default component$(() => {

    return <>
        <div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">ISEN Promo</div>  
                <div class="bg-black w-5xl h-0.5"></div> 
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-isen-500 w-3xl h-100 flex flex-col p-8 text-white rounded-3xl">
                        <div class="mb-3 mt-3">L’ISEN Promo est <strong>l’association pour promouvoir l’école</strong> lors d’événements extérieurs ainsi que de représenter l’école sur différents <strong>forums</strong>.</div>
                        <div class="mb-3">Ses membres sont présents <strong>tout au long de l’année</strong> pour :</div>
                        <ul class="list-disc ml-20 mb-3">
                            <li>les salons étudiants (Studyrama, L’Etudiant, …)</li>
                            <li>la remise de diplômes</li>
                            <li>les journées portes ouvertes</li>
                            <li>le Digital Native Forum</li>
                        </ul>
                        <div class="mb-10">La Promo gère aussi le <strong>serveur Discord</strong> de l’école.</div>
                        <div><strong>Easter Egg</strong> : La mascotte sur le côté est Robin, la représentation du président 2024-2026 de ISEN Promo !</div>
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="flex flex-row justify-evenly items-center w-svw">
                    <div class="w-100 h-120 mb-5">
                        <Promo class="w-full h-full object-cover"/>
                    </div>
                    <div class="w-150 h-100">
                        <Gala class="w-full h-full object-cover"/>
                    </div>
                </div> 
            </div>

            <div class="p-8 md:p-16 lg:p-32 flex items-center justify-center">
            <iframe class="w-full h-full min-h-[75vh] rounded-md"
                src="https://www.youtube.com/embed/Wbe7dpK6JQo?si=NN4_-3GWZpGaPn1S" title="YouTube video player" 
                />
            </div>
        </div>

    </>

});