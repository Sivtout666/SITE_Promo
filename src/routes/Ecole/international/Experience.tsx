import Globe from "~/assets/globe.png?jsx"

export default () => <div class="p-8 sm:p-16 md:py-32 my-8 sm:my-16
    grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-5">
    <div class="col-span-2 py-4 sm:p-8">
        <h2 class="text-4xl font-medium my-4">
            Retours d'expériences
        </h2>
        <p class="text-xl font-light">
            Nos étudiants répondent aux questions qu’on peut se 
            poser avant de partir étudier à l'étranger 🌏
        </p>
        <Globe class="p-8 max-h-72 object-contain float-right w-auto rotate-12"/>
    </div>
    <iframe
        class="w-full h-full min-h-96 rounded-lg col-span-3"
        src="https://www.youtube.com/embed/JdkzkIyt0MM?si=oVRxH1MrItf36mjl"
        title="Expérience d'étudiant en Malaisie" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share"
        />
</div>