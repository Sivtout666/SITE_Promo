
import Toulon from "~/assets/toulon.jpg?jsx"
import Marseille from "~/assets/marseille.jpg?jsx"
export default () => <section class="w-svw h-svh 
    flex flex-col md:flex-row group">
    <div class="w-full h-[50svh] hover:h-[60svh] group-hover:h-[40svh]
        md:hover:h-full md:group-hover:h-full
        md:w-[50svw] md:h-full md:hover:w-[60svw] md:group-hover:w-[40svw]
        relative transition-all duration-500
        group-hover:bg-black/50 hover:bg-black/0
        p-4 md:p-16">
        <Toulon class="w-full h-full absolute top-0 left-0
            -z-10 object-cover object-top md:object-left"/>
        <p class="text-white font-black text-5xl text-right">
            <span class="text-xl text-white/50"> à </span>
            Toulon
        </p>
    </div>
    <div class="w-full h-[50svh] hover:h-[60svh] group-hover:h-[40svh]
        md:hover:h-full md:group-hover:h-full
        md:w-[50svw] md:h-full md:hover:w-[60svw] md:group-hover:w-[40svw]
        relative transition-all duration-500
        group-hover:bg-black/50 hover:bg-black/0
        p-4 md:p-16">
        <Marseille class="w-full h-full absolute bottom-0 left-0
            -z-10 object-cover object-bottom md:object-right"/>
        <p class="text-white font-black text-5xl">
            <span class="text-xl text-white/50 mr-2"> à </span>
            Marseille
        </p>
    </div>
</section>