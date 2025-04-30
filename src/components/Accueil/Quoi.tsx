import Chapeau1 from "~/assets/chapeaux/chapeau1.png?jsx"

export default () => <section id="qui"
    class="bg-white py-64 px-8 md:p-16 lg:p-32
    md:grid grid-cols-3 gap-2 items-center justify-center">
    <div class="col-span-2">
        <h3 class="text-lg md:text-2xl text-black/25 uppercase font-black">
            Qui sommes-nous ?
        </h3>
        <div class="text-2xl md:text-4xl/normal font-medium">
            Les ingénieurs formés à l’ISEN disposent d’une solide 
            formation <span class="font-bold text-isen-500">technique</span> et
            <span class="text-blisen-500 font-bold"> humaine </span> 
            et d'une maîtrise du <span class="font-bold">numérique</span>.
        </div>
    </div>
    <Chapeau1 class="p-16 sm:p-8 md:p-4 lg:p-0"/>
</section>