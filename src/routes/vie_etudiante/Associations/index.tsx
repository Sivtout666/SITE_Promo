import { component$, useSignal } from "@builder.io/qwik";

import BDA  from "~/components/vie_etudiante/association/bda/bda";
import IE  from "~/components/vie_etudiante/association/ie/index";
import BDS  from "~/components/vie_etudiante/association/bds/index";
import PARTAGE  from "~/components/vie_etudiante/association/partage/index";
import PROMO  from "~/components/vie_etudiante/association/promo/index";
import REPAIR  from "~/components/vie_etudiante/association/repair/index";
import BDE  from "~/components/vie_etudiante/association/bde/index";

import LOGO_IE from "~/assets/associations/LogoIE-Circle.png?jsx";
import LOGO_BDE from "~/assets/associations/Hippisen.png?jsx";
import LOGO_BDA from "~/assets/associations/logo_BDA.png?jsx";
import LOGO_BDS from "~/assets/associations/bds_rond.png?jsx";
import LOGO_Promo from "~/assets/associations/promo.png?jsx";
import LOGO_partage from "~/assets/associations/LOGO_Sans_Fond.png?jsx";
import LOGO_repair from "~/assets/associations/repair.png?jsx";

type Association = 'bda' | 'ie' | 'bde' | 'bds' | 'partage' | 'promo' | 'repair'


export default component$(() => {
    const lastScroll = useSignal(0)
    const association = useSignal<Association>('bda')
    return <>
        <div>
            <div id="associations-slider" class="flex flex-row w-screen overflow-x-auto snap-x snap-mandatory box-border" onScroll$={(event, t) => {
            lastScroll.value = event.timeStamp;

            // le setTimeout execute la fonction 
            // qu'on lui passe 50 millisecondes après qu'on l'execute
            setTimeout(() => {
                // Cette condition assure qu'on n'execute pas 
                // la fonction toutes les millisecondes
                if(lastScroll.value != event.timeStamp) {
                    return
                } 

                // On récupère tous les éléments
                const item = [...document.querySelectorAll('#associations-slider > div')]
                    // On récupère leur position sur l'écran et leur nom
                    .map(item => ({
                        rect: item.getBoundingClientRect(), 
                        id: item.id
                    }))
                    // On enlève ceux hors de l'écran
                    .filter(item => item.rect.left >= 0)
                    // On récupère le plus proche de la gauche.
                    .reduce((previous, value) => previous.rect.left > value.rect.left ? value : previous)
                
                    if(item.id) {
                        association.value = item.id as Association
                    }
            }, 50)
        }}>
                <div id="bda" class="w-screen h-screen snap-center ml-[25vw]">
                    <div class="w-[50vw] h-screen flex justify-center items-center">
                        <LOGO_BDA class="w-80 h-90"/>
                    </div>
                </div>
                <div id="bde" class="w-screen h-screen snap-center">
                    <div class="w-[50vw] h-screen flex justify-center items-center">
                        <LOGO_BDE class="w-80 h-80"/>
                    </div>
                </div>
                <div id="bds" class="w-screen h-screen snap-center">
                    <div class="w-[50vw] h-screen flex justify-center items-center">
                        <LOGO_BDS class="w-80 h-80"/>
                    </div>
                </div>
                <div id="ie" class="w-screen h-screen snap-center ">
                    <div class="w-[50vw] h-screen flex justify-center items-center">
                        <LOGO_IE class="w-60 h-60"/>
                    </div>
                </div>
                <div id="partage" class="w-screen h-screen snap-center">
                    <div class="w-[50vw] h-screen flex justify-center items-center">
                        <LOGO_partage class="w-60 h-60"/>
                    </div>
                </div>
                <div id="promo" class="w-screen h-screen snap-center">
                    <div class="w-[50vw] h-screen flex justify-center items-center">
                        <LOGO_Promo class="w-60 h-60"/>
                    </div>
                </div>
                <div id="repair" class="w-screen h-screen snap-center mr-[25vw]">
                    <div class="w-[50vw] h-screen flex justify-center items-center">
                        <LOGO_repair class="w-60 h-60"/>
                    </div>
                </div>
            </div>
            
            
            {
                association.value === 'bda' && <BDA/>
            }
            {
                association.value === 'bde' && <BDE/>
            }
            {
                association.value === 'bds' && <BDS/>
            }
            {
                association.value === 'ie' && <IE/>
            }
            {
                association.value === 'partage' && <PARTAGE/>
            }
            {
                association.value === 'promo' && <PROMO/>
            }
            {
                association.value === 'repair' && <REPAIR/>
            }
            
            
        </div>
    </>
});