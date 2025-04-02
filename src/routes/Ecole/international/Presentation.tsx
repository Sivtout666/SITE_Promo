import Avion from "~/assets/avions/avions4.png?jsx"

export default () => <div class="px-16 py-64 relative">
    <h1 class="text-5xl font-semibold my-8">
        Une expérience <span class="text-isen-500 font-bold">international</span>!
    </h1>
    <p class="text-3xl font-extralight max-w-1/2">
        Pendant votre cursus, vous aurez la chance de partir 
        à l'étudier à l'occasion de stages ou d'études.
    </p>
    <div class="pointer-events-none absolute grid items-center justify-end px-32 h-full w-screen top-0 left-0">
        <Avion/>
    </div>
</div>