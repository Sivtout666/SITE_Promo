import Cin from "~/assets/formation/cin-etudiants.jpg"
import Biost from "~/assets/formation/biost-etudiants.jpg"
import Inge from "~/assets/formation/cycle-inge.jpg"
import Cyber from "~/assets/formation/cyber.png"
import Gaming from "~/assets/formation/gaming.jpg"


export default () => <> <div class="flex flex-col gap-12 max-w-6xl mx-auto p-6 mt-12">
  
  
  <div class="relative rounded-xl overflow-hidden shadow-lg">
  <img src={Cin} alt="Prépa Ingénieur" class="w-full h-64 object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-red-800 via-red-700 to-transparent p-6 flex flex-row space-x-32 mt-32 text-white"> 
      <div class="flex flex-col items-start space-y-2 my-5">
        <div class="bg-white text-black text-sm font-bold rounded-lg px-3 py-1 shadow">
          CIN
        </div>
        <div class="bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-xl shadow">
          📍 Toulon
        </div>
      </div>
      <div class="flex flex-col">
        <h2 class="text-lg font-semibold mb-2">Prépa Ingénieur informatique et numérique</h2>
        <p class="text-sm max-w-md">
          Formation préparatoire offrant une solide base scientifique et en informatique pour poursuivre des études d'ingénieur.
        </p>
      </div>
    </div>
  </div>

      <div class="relative rounded-xl overflow-hidden shadow-lg">
      <img src={Biost} alt="Prépa Bio" class="w-full h-64 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-red-800 via-red-700 to-transparent p-6 flex flex-row space-x-32 mt-32 text-white">
          <div class="flex flex-col items-start space-y-2 my-5">
            <div class="bg-white text-black text-sm font-bold rounded-lg px-3 py-1 shadow">
              BIOST
            </div>
            <div class="bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-xl shadow">
              📍 Toulon
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold mb-2">Prépa ingénieur biologie, scinces et technologies</h2>
            <p class="text-sm  max-w-md">
              Formation pluridisciplinaire à l’interface du vivant, des sciences et des technologies, préparant aux enjeux de la santé, de la biotechnologie et de l’innovation numérique.            </p>
          </div>
        </div>
      </div>

      <div class="relative rounded-xl overflow-hidden shadow-lg">
      <img src={Inge} alt="Cycle Ingénieur" class="w-full h-64 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-red-800 via-red-700 to-transparent p-6 flex flex-row space-x-32 mt-32 text-white">
          <div class="flex flex-col items-start space-y-2 my-5">
            <div class="bg-white text-black text-sm font-bold rounded-lg px-3 py-1 shadow">
              Cycle ingé
            </div>
            <div class="bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-xl shadow">
              📍 Toulon
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold mb-2">Cycle ingénieur Bac+5</h2>
            <p class="text-sm  max-w-md">
              Formation d'ingénieurs experts et polyvalents, prêts à relever les défis technologiques actuels et futurs grâce à un large choix de spécialisations.
            </p>
          </div>
        </div>
      </div>


      <div class="relative rounded-xl overflow-hidden shadow-lg">
      <img src={Gaming} alt="bach gaming" class="w-full h-64 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-red-800 via-red-700 to-transparent p-6 flex flex-row space-x-32 mt-32 text-white">
          <div class="flex flex-col items-start space-y-2 my-5">
            <div class="bg-white text-black text-sm font-bold rounded-lg px-3 py-1 shadow">
              Bach DSNI
            </div>
            <div class="bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-xl shadow">
              📍 Marseille
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold mb-2">Bachelor Développement de Systèmes Numériques Immersifs</h2>
            <p class="text-sm  max-w-md">
              Formation axée sur la création de systèmes interactifs et immersifs, mêlant développement logiciel, technologies XR et innovation numérique pour répondre aux nouveaux usages du virtuel.            </p>
          </div>
        </div>
      </div>


      <div class="relative rounded-xl overflow-hidden shadow-lg">
      <img src={Cyber} alt=" bach cyber" class="w-full h-64 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-red-800 via-red-700 to-transparent p-6 flex flex-row space-x-32 mt-32 text-white">
          <div class="flex flex-col items-start space-y-2 my-5">
            <div class="bg-white text-black text-sm font-bold rounded-lg px-3 py-1 shadow">
              Bach Cyber
            </div>
            <div class="bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-xl shadow">
              📍 Toulon
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold mb-2">Bachelor Cybersécurité  </h2>
            <p class="text-sm  max-w-md">
              Formation spécialisée en cybersécurité offrant une expertise solide en protection des systèmes informatiques, analyse de vulnérabilités et gestion des risques numériques.            </p>
          </div>
        </div>
      </div>
</div>
</>