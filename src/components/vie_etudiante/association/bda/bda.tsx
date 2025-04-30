import { component$ } from "@builder.io/qwik";
import RG from "~/assets/associations/robin_gauche.png?jsx";
import RD from "~/assets/associations/robin_droite.png?jsx";
import Crochet from "~/assets/associations/photos_asso/crochet.png?jsx";
import Music from "~/assets/associations/music.jpg?jsx";
import Role from "~/assets/associations/role.png?jsx";


export default component$(() => {

    return <>
        <div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Bureau des Arts</div>  
                <div class="bg-black w-5xl h-0.5"></div> 
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="bg-isen-500 w-3xl h-100 flex flex-col p-8 rounded-2xl text-white">
                        <div class="mb-2">Le <strong>Bureau des Arts</strong> est une des associations principales de l’ISEN.</div>
                        <div class="mb-2">Sa mission est de <strong>promouvoir et valoriser</strong> toutes les formes <strong>d’expression artistique</strong> au sein de l’école, en créant un environnement propice à la <strong>créativité et au partage</strong>.</div>
                        <div class="mb-2">Le BDA <strong>accompagne, soutient et coordonne</strong> plusieurs <strong>clubs artistiques dynamiques</strong> qui en font partie :</div>
                        <ul class="list-disc ml-10 mb-2">
                            <li>ISEN Studio, dédié à la <strong>photographie, la vidéo et les arts visuels</strong>.</li>
                            <li>Le club Musique, pour les passionnés de <strong>chant, d’instruments et de performance musicale</strong>.</li>
                            <li>Le club Crochet, qui met en valeur <strong>les arts textiles</strong> à travers la création manuelle.</li>
                            <li>Le club Jeu de rôle, qui plonge les étudiants dans des <strong>mondes imaginaires, entre écriture, improvisation et stratégie</strong>.</li>
                        </ul>
                        <div>Rejoindre le BDA, c’est participer à <strong>une vie étudiante riche, artistique</strong> et pleine de <strong>projets créatifs</strong>.</div>
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-blisen-900 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl text-white">ISEN Studio</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="w-50 h-100">
                        <RD class="w-50 h-100 object-cover"/>
                    </div>  {/* image de robin pixelisé*/}
                    <div class="bg-white w-3xl h-100 flex flex-col p-8 rounded-2xl">
                        <div class="mb-3 mt-3"><strong>ISEN Studios</strong> est le <strong>club audiovisuel</strong> de l’ISEN Toulon.</div>
                        <div class="mb-3">Son objectif principal est de mettre en valeur la vie de l’école en assurant <strong>la couverture médiatique</strong> de ses grands événements : <strong>remise des diplômes, journées portes ouvertes, soirées organisées par le BDE</strong>, et bien d’autres.</div>
                        <div class="mb-3">Mais ISEN Studios, c’est aussi une <strong>aventure créative</strong> : chaque année, le club se lance dans la réalisation <strong>d’un court métrage</strong>, de <strong>l’écriture du scénario au montage final</strong>, pour participer au <strong>Nikon Film Festival</strong>.</div>
                        <div class="mb-3">L’association se structure autour de <strong>deux pôles</strong> complémentaires :</div>
                        <ul class="list-disc mb-3 ml-10">
                            <li><strong>Studios : le pôle vidéo</strong>, spécialisé dans la captation, le tournage et le montage.</li>
                            <li><strong>Pict’ISEN : le pôle photo</strong>, dédié à la photographie artistique.</li>
                        </ul>

                    
                    </div>
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Crochet</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    <div class="w-50 h-100">
                        <RD class="w-50 h-100 object-cover"/>
                    </div>
                    <div class="bg-isen-500 text-white w-3xl rounded-2xl h-100 grid grid-cols-2 p-1 gap-x-1">
                        <div class="p-3">
                            <div class="mb-1">Le <strong>club de crochet</strong> de l'ISEN Méditerranée est un espace où les étudiants <strong>partage leur savoir-faire</strong>, apprennent de <strong>nouvelles techniques</strong> et réaliser des <strong>projets créatifs</strong>.</div>
                            <div class="mb-1">Dans le cadre de ses actions, le club a collaboré avec la marque de <strong>jus Innocent</strong> pour l'opération <strong>"Petits Bonnets, Grande Cause"</strong>.</div> 
                            <div class="mb-1">Cette initiative consiste à crocheter de <strong>petits bonnets</strong> qui sont ensuite placés sur les bouteilles de <strong>jus Innocent vendues en magasin</strong>.</div> 
                            <div> Pour <strong>chaque bouteille</strong> vendue <strong>avec un bonnet</strong>, une partie des bénéfices est reversée à des <strong>associations caritatives</strong> œuvrant pour le bien-être <strong>des personnes âgées</strong>.</div>
                        </div>
                        <div class="rounded-2xl"> 
                            <Crochet class="w-full h-full rounded-2xl"/>
                        </div>
                        {/* partenariat innocent partie fondation
                        collecte noel pour les parents qui ne peuvent pas achter a leur enfants */}
                    </div>
                      {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-blisen-900 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl text-white">Musique</div>   
                <div class="flex flex-row justify-evenly w-svw">
                    
                    <div class="bg-white w-3xl rounded-2xl h-100 grid grid-cols-2 p-1 gap-x-1">
                        <div class="p-3">
                            <div class="mb-3">Le club <strong>Musique de l’ISEN</strong> rassemble les étudiantes et étudiants <strong>passionnés</strong> par la musique, qu’ils soient <strong>débutants, amateurs ou musiciens confirmés</strong>.</div>    
                            <div class="mb-3">C’est un lieu de <strong>rencontre, de partage et de création</strong> où chacun peut exprimer sa <strong>sensibilité artistique</strong>.</div>    
                            <div class="mb-3">Au-delà de la performance, le club encourage aussi la composition, la reprise de morceaux, et l’initiation musicale entre étudiants.</div>    
                            <div> Il incarne une ambiance <strong>conviviale et ouverte</strong>, où la musique est un vecteur de lien social et de <strong>créativité</strong>.</div>    
                         </div>
                        <div class="rounded-2xl"> 
                            <Music class="w-full h-full rounded-2xl object-center"/>
                        </div>
                        {/* partenariat innocent partie fondation
                        collecte noel pour les parents qui ne peuvent pas achter a leur enfants */}
                    </div>
                    <div class="w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>    
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="h-svh w-svw flex flex-col items-center bg-white justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Jeu de rôle</div>   
                <div class="flex flex-row justify-evenly w-svw">
                <div class="bg-isen-500 text-white w-3xl rounded-2xl h-100 grid grid-cols-2 p-1 gap-x-1">
                        <div class="rounded-2xl"> 
                            <Role class="w-full h-98 rounded-2xl "/>
                        </div>
                        <div class="p-3">
                            <div class="mb-1">Le club <strong>Jeu de Rôle</strong> de l’ISEN invite les étudiants à plonger dans des <strong>univers fantastiques, futuristes ou historiques</strong>, à travers des campagnes et des parties épiques animées par <strong>des maîtres du jeu passionnés</strong>.</div>
                            <div class="mb-1">Que vous soyez <strong>novice curieux ou joueur expérimenté</strong>, le club vous propose de vivre des aventures<strong> uniques</strong>, où l’imagination, la stratégie et l’interprétation sont <strong>au cœur de l’expérience</strong>.</div>
                            <div class="mb-1">En incarnant des personnages, les participants développent des compétences en <strong>prise de parole, coopération et résolution de problèmes</strong>.</div>
                            <div>Un vrai moment <strong>d’évasion et de créativité</strong> au sein de la vie étudiante.</div>
                        </div>
                        {/* partenariat innocent partie fondation
                        collecte noel pour les parents qui ne peuvent pas achter a leur enfants */}
                    </div>
                    <div class="bg-white w-50 h-100">
                        <RG class="w-50 h-100 object-cover"/>    
                    </div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
        </div>

    </>

});