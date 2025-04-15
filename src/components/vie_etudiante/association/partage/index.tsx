import { component$ } from "@builder.io/qwik";


export default component$(() => {

    return <>
        <div>
            <div class="h-screen w-screen flex flex-col items-center bg-amber-100 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Bureau des Arts</div>  
                <div class="bg-black w-5xl h-0.5"></div> 
                <div class="flex flex-row justify-evenly w-screen">
                    <div class="bg-amber-400 w-xl h-100 flex flex-col p-8">
                        Le BDA (Bureau des ARTS........)
                    </div>
                    <div class="bg-amber-400 w-xs h-100"></div>  {/* image de robin pixelisé*/}
                </div> 
            </div>
            <div class="h-screen w-screen flex flex-col items-center bg-amber-900 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Maraudes</div>   
                <div class="flex flex-row justify-evenly w-screen">
                    <div class="bg-amber-400 w-xs h-100"></div>  {/* image de robin pixelisé*/}
                    <div class="bg-amber-400 w-xl h-100 flex flex-col p-8">
                        Le BDA (Bureau des ARTS........)
                    </div>
                </div> 
            </div>
            <div class="h-screen w-screen flex flex-col items-center bg-amber-100 justify-evenly"> {/* Div global du BDA */}
                <div class="text-3xl">Abeilles</div>   
                <div class="flex flex-row justify-evenly w-screen">
                    <div class="bg-amber-400 w-xs h-100"></div>  {/* image de robin pixelisé*/}
                    <div class="bg-amber-400 w-xl h-100 flex flex-col p-8">
                        Le BDA (Bureau des ARTS........)
                    </div>
                </div> 
            </div>
        </div>

    </>

});