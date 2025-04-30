import Nuage1 from "~/assets/nuages/nuage1.png?jsx"
import Nuage2 from "~/assets/nuages/nuage2.png?jsx"
import Nuage3 from "~/assets/nuages/nuage3.png?jsx"

export default () => <div class="w-full h-full absolute top-0 left-0 pointer-events-none">
    <Nuage1 class="absolute top-16 left-1/3 w-2/5"/>
    <Nuage2 class="absolute -left-32 top-64 sm:-left-96 sm:-top-16"/>
    <Nuage3 class="absolute bottom-32 left-1/3 w-2/5 opacity-75"/>
</div>