import { component$ } from "@builder.io/qwik";
import RG from "~/assets/associations/robin_gauche.png?jsx";
import RD from "~/assets/associations/robin_droite.png?jsx";
import Kart from "~/assets/associations/photo_ie/ISEN-kart.jpg?jsx";
import Dev from "~/assets/associations/photo_ie/dev.png?jsx";
import Innov from "~/assets/associations/photo_ie/arcade.jpg?jsx";


export default component$(() => {

    return <>
        <div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">ISEN Engineering</div>  
                <div class="bg-black w-5xl h-0.5"></div> 
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-isen-500 w-3xl h-110 flex flex-col p-8 gap-4 rounded-2xl text-white">
                        <div class="mb-1">L'ISEN Engineering est <strong>l'association principale</strong> de l'école.</div>
                        <div class="mb-1">Créée en 1996, l’ISEN Engineering est constituée d’un regroupement de clubs et met non seulement à profit <strong>le nom de l’école</strong> mais également <strong>les talents de ses étudiants</strong> autant dans la <strong>créativité</strong> que dans la <strong>motivation qu’ils portent à la réalisation de leurs projets</strong> liés aux nouvelles technologies.</div>
                        <div class="mb-1">Cette année, l’Isen Engineering c’est un <strong>kart en rénovation</strong>, des <strong>bornes d’arcades</strong> à rafraichir, et de la <strong>cybersécurite</strong>. Nous sommes motivés pour vous aider à <strong>développer vos projets</strong> et à développer les projets qui arriveront dans l’année, et que nous vous présenterons à la fin de l’année avec <strong>la semaine de l’IE</strong> !</div>
                        <div>L’IE c’est aussi des évènements comme <strong>la Nuit de l’ISEN</strong>, <strong>un hackathon</strong> réunissant anciens élèves et élèves autour d’un sujet commun <strong>à résoudre en une nuit</strong>. Nous sommes organisés en <strong>pôle</strong>, qui ont tous un ou plusieurs projets actifs. Il y a le pôle <strong>Karting, Serveur, Innovation, Dev et Cyber</strong>. Nous sommes sûrs que parmi tous ces pôles vous trouverez un projet qui vous plaira.</div>
                    </div>
                    <div class="w-50 h-110">
                        <RG class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-blisen-900 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl text-white">Pôle Innovation</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="w-50 h-100">
                        <RD class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                    <div class="bg-white w-3xl h-100 grid grid-cols-2 gap-x-1 rounded-2xl p-1">
                        <div class="p-2">
                            <div class="mb-1">Le pôle Innovation de l’ISEN Engineering incarne <strong>l’esprit d’initiative</strong> et de <strong>créativité des étudiants</strong> de l’ISEN Méditerranée.</div>
                            <div class="mb-1">Qu’il s’agisse de <strong>prototypes électroniques, d’objets connectés, ou de systèmes automatisés</strong>, les projets portés par ce pôle permettent aux membres de mettre en pratique leurs compétences en<strong> électronique, programmation, design et gestion de projet</strong>.</div>
                            <div class="mb-1">Les étudiants y apprennent à <strong>travailler en équipe</strong>, à résoudre des <strong>problèmes concrets</strong>, et à <strong>innover</strong> de manière responsable.</div>
                            <div>Chaque année, de nouvelles idées émergent, encouragées par une <strong>liberté de création, et un accompagnement technique</strong>.</div>
                        </div>
                        <div>
                            <Innov class="w-full h-98 object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Pôle Kart</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="w-50 h-100">
                        <RD class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                    <div class="bg-isen-500 w-3xl h-100 grid grid-cols-2 gap-x-1 text-white rounded-2xl p-1">
                        <div class="p-2">
                            <div class="mb-3">Parmi les projets phares de l’association <strong>ISEN Engineering</strong>, le pôle karting occupe une place centrale. En 2018, l’association reçoit <strong>un kart thermique</strong> offert par un généreux donateur.</div>
                            <div class="mb-3">Initialement utilisé tel quel, le kart suscite dès 2019 un nouvel engouement : celui de le transformer en <strong>véhicule électrique</strong>.</div>
                            <div class="mb-3">Le projet est malheureusement mis en pause en 2020 en raison de la pandémie de COVID-19. Depuis, les membres de l’association redoublent d’efforts pour relancer cette <strong>initiative ambitieuse</strong>.</div>
                            <div>Ils s’emploient à retrouver les <strong>documents techniques</strong> et la <strong>documentation nécessaires à sa réalisation</strong>.</div>
                        </div>
                        <div>
                            <Kart class="w-full h-98 object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-blisen-900 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl text-white">Pôle Developpement</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-white w-3xl h-100 p-1 grid grid-cols-2 gap-x-1 rounded-2xl">
                        <div>
                            <Dev class="w-full h-98 object-cover rounded-2xl"/>
                        </div>
                        <div class="p-2">
                            <div class="mb-1">Le <strong>pôle Développement</strong> d’ISEN Engineering regroupe les <strong>passionnés de programmation, de développement logiciel et de technologies web et mobiles</strong>. </div>
                            <div class="mb-1">Ce pôle a pour objectif de permettre aux étudiants de concevoir des <strong>applications concrètes, utiles et innovantes</strong>, tout en approfondissant leurs <strong>compétences en code et en gestion de projet</strong>.</div>
                            <div class="mb-1">Les membres y travaillent sur une grande variété de projets, <strong>allant de sites web à jeux vidéo</strong>, en passant par des outils internes pour l’école ou des projets open source.</div>
                            <div>Chaque réalisation est l’occasion de <strong>maîtriser de nouvelles technologies</strong>, de collaborer en équipe et de répondre à des <strong>besoins réels</strong>.</div>
                        </div>
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
        </div>

    </>

});