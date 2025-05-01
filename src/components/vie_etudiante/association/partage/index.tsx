import { component$ } from "@builder.io/qwik";
import Bee from "~/assets/associations/photos_asso/bee.jpg?jsx";
import RG from "~/assets/associations/robin_gauche.png?jsx";
import RD from "~/assets/associations/robin_droite.png?jsx";
import Muco from "~/assets/associations/photos_asso/muco.png?jsx";

export default component$(() => {

    return <>
        <div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">ISEN Partage</div>  
                <div class="bg-black w-5xl h-0.5"></div> 
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-isen-500 w-3xl h-100 flex flex-col p-8 rounded-2xl text-white">
                        <div class="mb-3 mt-3">L' <strong>ISEN Partage</strong> a pour objectif d’organiser des évènements humanitaires et bénévoles dans le but de récolter des fonds, reversés à des associations caritatives extérieures à l’école. Composée d’un bureau général, elle se décompose en divers « clubs » :</div>
                        <ul class="list-disc ml-20 mb-4"><strong>
                            <li>Abeilles</li>
                            <li>Mucofoot</li>
                            <li>Maraudes</li>
                            </strong>
                        </ul>
                        <div class="mb-3">Le bureau s’assure du bon fonctionnement des projets et organise des évènements tout au long de l’année tels que la banque alimentaire, la récolte de jouets…</div>
                        <div>Plus qu’une association, ISEN Partage est aussi le moyen <strong>d’échanger</strong>, de <strong>se réunir</strong> pour une même cause et de mettre en commun <strong>l’envie de soutenir les actions humanitaires</strong></div>
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>    
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-blisen-900 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl text-white">Mucofoot</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="w-50 h-100">
                        <RD class="w-50 h-100 object-cover"/>    
                    </div>  {/* image de robin pixelisé*/}
                    <div class="bg-white w-3xl h-100 grid grid-cols-2 p-1 gap-x-1  rounded-2xl">
                        <div>
                            <Muco class="w-full h-98 rounded-2xl"/>
                        </div>
                        <div class="rounded-2xl p-3">
                            <div class="mb-3">Mucofoot est un événement <strong>sportif caritatif</strong> organisé chaque année par <strong>l'ISEN Partage</strong>.</div>
                            <div class="mb-3">Il s'agit d'un <strong>tournoi de football</strong> dont l'intégralité des bénéfices est reversée à <strong>l'Association Grégory Lemarchal</strong>, œuvrant pour la lutte contre la <strong>mucoviscidose</strong>.</div>
                            <div class="mb-3">L'objectif principal du Mucofoot est de <strong>sensibiliser la communauté étudiante</strong> à la mucoviscidose et de <strong>collecter des fonds</strong> pour soutenir la <strong>recherche et l'accompagnement</strong> des patients.</div>
                            <div>Grâce à l'engagement des participants et au soutien des sponsors, le Mucofoot a permis de récolter plus de <strong>4 000 €</strong>.</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Abeilles</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="w-xl h-100 flex flex-col">
                        <Bee class="w-full h-full object-cover"/>
                    </div>
                    <div class="w-xl h-100">
                        <iframe src="https://www.youtube.com/embed/neUcgSe5OcE" class="w-xl h-100"></iframe>
                    </div>  
                </div> 
            </div>
        </div>

    </>

});