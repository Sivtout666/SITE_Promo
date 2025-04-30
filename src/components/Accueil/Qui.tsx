import Livre1 from "~/assets/livres/livre1.png?jsx"

export default () => <section id="pour-qui"
    class="bg-white py-64 px-8 md:p-16 lg:p-32
    md:grid grid-cols-3 gap-2 items-center justify-center">
    <Livre1 class="p-16 sm:p-8 md:p-4 lg:p-0"/>
    <div class="col-span-2">
        <h3 class="text-lg md:text-2xl text-black/25 uppercase font-black">
            Pour qui ?
        </h3>
        <div class="text-2xl md:text-4xl/normal font-medium">
            Vous pouvez entrer à l'ISEN Méditerranée dès la sortie du Lycée 🏫 ! 
            <br/>
            <ul class="list-[square] pl-12 uppercase font-semibold
                text-isen-500/75 text-2xl my-4">
                <li>
                    BAC Générale ou Technologique
                </li>
                <li>
                    Prépa CPGE
                </li>
                <li>
                    BUT, BTS, License <span
                        class="text-isen-500/35 hover:text-isen-500/75 transition-colors">
                        (Info, Math, Elec ou Réseau)
                    </span>
                </li>
            </ul>
        </div>
    </div>
</section>