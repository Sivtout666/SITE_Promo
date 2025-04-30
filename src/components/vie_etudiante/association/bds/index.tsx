import { component$ } from "@builder.io/qwik";
import RG from "~/assets/associations/robin_gauche.png?jsx";
import P1 from "~/assets/associations/photo_bds/photo1.png?jsx";
import P2 from "~/assets/associations/photo_bds/photo2.jpg?jsx";
import P3 from "~/assets/associations/photo_bds/photo3.png?jsx";
import P4 from "~/assets/associations/photo_bds/photo4.png?jsx";


export default component$(() => {

    return <>
        <div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Bureau des Sports</div>  
                <div class="bg-black w-5xl h-0.5"></div> 
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-isen-500 w-3xl h-100 flex flex-col p-8 rounded-3xl text-white">
                        <div class="mb-3">Le Bureau Des Sports est l’association étudiante de l’école qui a pour but de proposer aux étudiants des sessions d’entraînements ainsi que des compétitions dans différents sports. </div>
                        <div class="mb-3">Le BDS c’est plus de 100 licenciés, 10 sports proposés toute l’année, une dizaine d’activités différentes et la possibilité d’ouvrir de nouveaux clubs à la condition d’avoir un responsable qui connait ce sport ainsi que 10 participants minimum.</div>
                        <div class="mb-3">Sports pratiqués : <strong>Football, Futsal, Rugby, Volley-ball, Handball, Tennis, Badminton, Course à pied, Pompom girls…</strong></div>
                        <div class="mb-3">Activités mensuelles :  <strong>Bowling, Patinoire, Karting, Paintball, Accrobranche, Laser Game, Randonnée, Tournoi de pétanque, Mini-golf, Bubble foot.</strong></div>
                        <div>Evènement : Le <strong>SKI’SEN</strong>, un séjour en station de ski dans les Alpes se déroulant en février-mars et ouvert aux étudiants de l’ISEN.</div>
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="grid grid-cols-4 gap-x-1 justify-evenly items-center w-svw">
                    <P1 class="w-full h-full"/>
                    <P2 class="w-full h-full"/>
                    <P3 class="w-full h-full"/>
                    <P4 class="w-full h-full"/>
                </div> 
            </div>
        </div>

    </>

});