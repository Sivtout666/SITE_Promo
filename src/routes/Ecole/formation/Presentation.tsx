import Toulon from "~/assets/formation/toulon.jpg";
import Eespig from "~/assets/formation/EESPIG.png";
import Cti from "~/assets/formation/cti-removebg-preview.png";
import Alpha from "~/assets/formation/alpha-removebg-preview.png";
import Loi from "~/assets/formation/association-loi-1901-removebg-preview.png";
import Tpm from "~/assets/formation/TPM-removebg-preview.png";

export default () => (
  <>
    <div class="bg-gray-100">
      <div class="relative h-[400px] w-full">
        <img src={Toulon} alt="Toulon" class="h-full w-full object-cover" />
        <div class="bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center bg-black px-4 text-center">
          <h1 class="mb-4 text-5xl font-semibold text-white md:text-6xl">
            Nos <span class="text-isen-500 font-bold">Formations</span> !
          </h1>
          <p class="max-w-2xl text-2xl font-light text-white md:text-3xl">
            Découvrez toutes nos formations proposées à l’ISEN Méditerranée.
          </p>
        </div>
      </div>

      <div class="relative bg-orange-500 py-4">
        <div class="flex items-center justify-around">
          <img src={Cti} alt="CTI" class="h-16" />
          <img src={Loi} alt="Loi 1901" class="h-16" />
          <img src={Alpha} alt="Alpha" class="h-16" />
          <img src={Eespig} alt="EESPIG" class="h-16" />
          <img src={Tpm} alt="TPM" class="h-16" />
        </div>
      </div>
    </div>
  </>
);
