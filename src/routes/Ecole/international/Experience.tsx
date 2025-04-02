import Avion3 from "~/assets/avions/avions3.png?jsx"

export default () => <div class="px-16 py-32 grid grid-cols-5 my-16">
    <div class="col-span-2 p-8">
        <h2 class="text-4xl font-medium my-4">
            Retours d'expériences
        </h2>
        <p class="text-xl font-light">
            Nos étudiants répondent aux questions qu’on peut se 
            poser avant de partir étudier à l'étranger 🌏
        </p>
        <Avion3 class="py-8 max-h-72 object-contain float-right w-auto"/>
    </div>
    <iframe
        class="w-full h-full min-h-96 rounded-lg col-span-3"
        src="https://www.youtube.com/embed/JdkzkIyt0MM?si=oVRxH1MrItf36mjl"
        title="Expérience d'étudiant en Malaisie" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share"
        />
</div>