import Avion from "~/assets/avions/avions4.png?jsx"

export default () => <div class="px-8 md:px-16 py-32 md:py-64 relative">
    <h1 class="text-5xl font-semibold my-8">
        Une expérience <span class="text-isen-500 font-bold">international</span>!
    </h1>
    <p class="text-3xl font-extralight md:max-w-1/2">
        Pendant votre cursus, vous aurez la chance de partir 
        à l'étudier à l'occasion de stages ou d'études.
    </p>
    <Avion class="md:absolute 
        lg:top-32 lg:right-32
        md:top-48 md:right-16 md:h-2/3 md:w-fit
        h-64 w-32 right-0 object-contain
    "/>
</div>