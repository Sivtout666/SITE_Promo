import { component$ } from "@builder.io/qwik";
import Etudiant from "~/assets/formation/etudiants.jpg?jsx";
import Groupe from "~/assets/formation/groupe.jpg?jsx";

export default component$(() => {
  return (
    <div class="px-6 md:px-16 py-12 bg-[#fef8f7] rounded-3xl flex items-center justify-center">

      <h2 class=" text-5xl font-semibold mb-12"> Chiffres clés 💰</h2>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        
        <div class="bg-orange-300 rounded-xl p-6 text-white col-span-1 flex flex-col justify-center items-start h-40">
          <div class="text-4xl font-bold">98%</div>
          <div class="text-sm mt-2 leading-snug">de taux d’insertion<br />5 mois après le diplôme.</div>
        </div>
        
        <div class="md:col-span-2">
          <Etudiant class="rounded-xl object-cover w-full h-60" />
        </div>
       
        <div class="bg-red-600 rounded-xl p-6 text-white col-span-1 flex flex-col justify-center items-start h-40">
          <div class="text-3xl font-bold">40 700€</div>
          <div class="text-sm mt-2 leading-snug">de salaire brut annuel<br />d'embauche</div>
        </div>
        
        <div class="md:col-span-2">
          <Groupe class="rounded-xl object-cover w-full h-60" />
        </div>
       
        <div class="bg-blue-900 rounded-xl p-6 text-white col-span-1 flex flex-col justify-center items-start h-40">
          <div class="text-3xl font-bold">100%</div>
          <div class="text-sm mt-2 leading-snug">des diplômés ont une<br />expérience à l’international</div>
        </div>
        
        <div class="bg-blue-300 rounded-xl p-6 text-white col-span-1 flex flex-col justify-center items-start h-40">
          <div class="text-3xl font-bold">10 000</div>
          <div class="text-sm mt-2 leading-snug">Ingénieurs ISEN</div>
        </div>
      </div>
    </div>
  );
});
