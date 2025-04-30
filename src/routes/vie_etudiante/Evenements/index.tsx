import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import NDI from "~/assets/evenements/PHOTO_FIN_NDI25.jpg?jsx";
import Soiree from "~/assets/evenements/soiree.jpg?jsx";
import Caddie from "~/assets/evenements/caddie.jpeg?jsx";
import RDD from "~/assets/evenements/rdd.jpeg?jsx";
import Galac from "~/assets/evenements/gala.jpg?jsx";
import Halloween from "~/assets/evenements/Halloween.jpg?jsx";
import AGL from "~/assets/evenements/AGL.jpg?jsx";
import WEI from "~/assets/evenements/WEI.jpg?jsx";
import SKI from "~/assets/evenements/ski.jpg?jsx";


export default component$(() => {
    return <>
        <div class="grid">
            <div class="h-50 flex justify-center items-center text-4xl ">
                <p class="bg-gradient-to-r from-isen-500 bg-clip-text text-transparent to-isen-900">Évènements</p>
            </div>
            <div class="grid grid-cols-6 grid-rows-6">
                
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <RDD class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        Remise des diplômes
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <WEI class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        WEI
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <NDI class="w-full h-full group-hover:blur-xs transition-all" />
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        NDI
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <Halloween class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        Halloween
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <Caddie class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        Caddies
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <SKI class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        SKI'SEN
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <Soiree class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        Soirées
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <AGL class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        All Game Long
                    </div>
                </Link>
                <Link class="hover:cursor-pointer col-span-2 row-span-2 group relative">
                    <Galac class="w-full h-full group-hover:blur-xs transition-all"/>
                    <div class="hidden group-hover:flex absolute top-0 left-0 font-medium w-full h-full justify-center items-center text-white text-2xl">
                        Gala
                    </div>
                </Link>
                
            </div>
        </div>
    </>
});