import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {

    return <>
        <div>
            <div class="h-screen w-screen flex flex-col items-center bg-amber-100 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Bureau des Étudiants</div>  
                <div class="flex flex-row justify-evenly w-screen">
                    <div class="bg-amber-400 w-xl h-100 flex flex-col p-8">
                        Le BDA (Bureau des ARTS........)
                    </div>
                    <div class="bg-amber-400 w-xs h-100"></div>  {/* image de robin pixelisé*/}
                </div> 
                <Link href="/vie_etudiante/Evenements" class="bg-white w-5xl h-10 rounded-3xl flex justify-center items-center text-xl">Aller a la page Événement </Link> 
            </div>
        </div>

    </>

});