import { component$, useSignal } from "@builder.io/qwik";
import BDA  from "~/components/vie_etudiante/association/bda/bda";
import IE  from "~/components/vie_etudiante/association/ie/index";
import BDS  from "~/components/vie_etudiante/association/bds/index";
import PARTAGE  from "~/components/vie_etudiante/association/partage/index";
import PROMO  from "~/components/vie_etudiante/association/promo/index";
import REPAIR  from "~/components/vie_etudiante/association/repair/index";
import BDE  from "~/components/vie_etudiante/association/bde/index";

type Association = 'bda' | 'ie' | 'bde' | 'bds' | 'partage' | 'promo' | 'repair'


export default component$(() => {
    const association = useSignal<Association>('bda')
    return <>
        <div class="overflow-x-hidden">
            <div class="flex flex-row w-screen overflow-x-scroll snap-x snap-mandatory">
                <div id="div_bda" class="w-screen h-screen bg-amber-600 snap-center ml-90">
                    <div class="w-xl flex"></div>
                </div>
                <div id="div_bde" class="w-screen h-screen bg-blue-200 snap-center">
                    <div class="w-xl flex"></div>
                </div>
                <div id="div_bds" class="w-screen h-screen bg-blisen-500 snap-center">
                    <div class="w-xl flex"></div>
                </div>
                <div id="div_ie" class="w-screen h-screen bg-isen-900 snap-center">
                    <div class="w-xl flex"></div>
                </div>
                <div id="div_partage" class="w-screen h-screen bg-blisen-900 snap-center">
                    <div class="w-xl flex"></div>
                </div>
                <div id="div_promo" class="w-screen h-screen bg-isen-500 snap-center">
                    <div class="w-xl flex"></div>
                </div>
                <div id="div_repair" class="w-screen h-screen bg-red-300 snap-center mr-90">
                    <div class="w-xl flex"></div>
                </div>
            </div>

            {/* {
                association.value === 'bda' && <BDA/>
            } */}
            <IE/>
            
        </div>
    </>
});