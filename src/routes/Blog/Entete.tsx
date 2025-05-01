import Avion from "~/assets/avions/avions2.png?jsx"
import Avion2 from "~/assets/avions/avions3.png?jsx"
import Article from "~/components/Blog/article";

export default () => <div class="grid md:grid-cols-2 px-2 md:px-16 py-32">
    <div class="px-4 pb-32 md:p-4 relative">
        <h1 class="text-6xl font-bold">
            Blog
        </h1>
        <p class="text-xl p-4">
            Lisez les derniers articles écrits par des étudiants!
        </p>
        <Avion 
            class="-scale-x-100 w-1/2 absolute bottom-8 md:bottom-0 -left-24 md:-left-48 -rotate-12 pointer-events-none"/>
    </div>
    <div class="min-h-64 md:min-h-96 relative">
        <Article
            class="shadow-xl shadow-isen-500 hover:shadow-isen-500/50
                transition-shadow duration-500 p-8"
            titre="Toulon, entre mer, culture et nature : une ville aux mille visages"
            description="Explorez Toulon au gré de vos envies : 
            plages ensoleillées, trésors historiques, musées passionnants, 
            spectacles variés et escapades en pleine nature. 
            Entre Méditerranée et montagnes, cette ville du sud de 
            la France vous promet un séjour riche et sur mesure."
            image="toulon"
            href="/blog/toulon"/>
        <div class="w-full h-full absolute top-0 left-0 -z-10 -rotate-3
            bg-gradient-to-br from-isen-500 to-isen-900"/>
        <Avion2 class="absolute -top-10 right-2 z-20 h-1/2 md:h-4/5 w-auto"/>
    </div>
</div>