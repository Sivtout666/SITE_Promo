import Toulon from "~/assets/formation/toulon.jpg?jsx";
import Eespig from "~/assets/formation/EESPIG.png?jsx";
import Cti from "~/assets/formation/cti-removebg-preview.png?jsx";
import Alpha from "~/assets/formation/alpha-removebg-preview.png?jsx";
import Loi from "~/assets/formation/association-loi-1901-removebg-preview.png?jsx";
import Tpm from "~/assets/formation/TPM-removebg-preview.png?jsx";

export default () => (
  <>
    <div class="bg-gray-100">
      <div class="relative h-[400px] w-full">
        <Toulon class="h-full w-full object-cover "/>
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
          <h1 class="mb-4 text-5xl font-semibold text-white md:text-6xl">
            Nos <span class="text-isen-500 font-bold">Formations</span> !
          </h1>
          <p class="max-w-2xl text-2xl font-light text-white md:text-3xl">
            Découvrez toutes nos formations proposées à l’ISEN Méditerranée.
          </p>
        </div>
      </div>

      <div class="relative bg-orange-500 py-4">
        
        <div class="flex items-center bg-amber-50 justify-around">
          <Cti class="h-16 w-16" />
          <Loi class="h-16 w-16" />
          <Alpha class="h-24 w-28" />
          <Eespig class="h-16 w-28" />
          <Tpm class="h-16 w-20"/>
        </div>
      </div>
    </div>
  </>
);
