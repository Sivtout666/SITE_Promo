import { component$, useStore, $ } from "@builder.io/qwik";
import Cin from "~/assets/formation/cin-etudiants.jpg";
import Biost from "~/assets/formation/biost-etudiants.jpg";
import Inge from "~/assets/formation/cycle-inge.jpg";
import Cyber from "~/assets/formation/cyber.png";
import Gaming from "~/assets/formation/gaming.jpg";
import { slideIn, slideOut } from "./animations";


interface Formation {
  img: string;
  title: string;
  description: string;
  location: string;
  tag: string;
}

export const Formations = component$(() => {
  const state = useStore({
    infoPageVisible: false,
    selectedFormation: null as Formation | null,
  });

  const handleCardClick = $((formation: Formation) => {
    console.log("Card clicked:", formation); 
    const infoPage = document.getElementById("info-page");
    if (infoPage) {
      slideIn(infoPage);
      state.selectedFormation = formation;
      state.infoPageVisible = true;
    } else {
      console.error("info-page element not found"); 
    }
  });

  const handleCloseClick = $(() => {
    const infoPage = document.getElementById("info-page");
    if (infoPage) {
      slideOut(infoPage);
      setTimeout(() => {
        state.infoPageVisible = false;
        state.selectedFormation = null;
      }, 1000);
    }
  });

  const formations: Formation[] = [
    {
      img: Cin,
      title: "Prépa Ingénieur informatique et numérique",
      description:
        "Formation préparatoire offrant une solide base scientifique et en informatique pour poursuivre des études d'ingénieur.",
      location: "Toulon",
      tag: "CIN",
    },
    {
      img: Biost,
      title: "Prépa ingénieur biologie, sciences et technologies",
      description:
        "Formation pluridisciplinaire à l’interface du vivant, des sciences et des technologies, préparant aux enjeux de la santé, de la biotechnologie et de l’innovation numérique.",
      location: "Toulon",
      tag: "BIOST",
    },
    {
      img: Inge,
      title: "Cycle ingénieur Bac+5",
      description:
        "Formation d'ingénieurs experts et polyvalents, prêts à relever les défis technologiques actuels et futurs grâce à un large choix de spécialisations.",
      location: "Toulon",
      tag: "Cycle ingé",
    },
    {
      img: Gaming,
      title: "Bachelor Développement de Systèmes Numériques Immersifs",
      description:
        "Formation axée sur la création de systèmes interactifs et immersifs, mêlant développement logiciel, technologies XR et innovation numérique pour répondre aux nouveaux usages du virtuel.",
      location: "Marseille",
      tag: "Bach DSNI",
    },
    {
      img: Cyber,
      title: "Bachelor Cybersécurité",
      description:
        "Formation spécialisée en cybersécurité offrant une expertise solide en protection des systèmes informatiques, analyse de vulnérabilités et gestion des risques numériques.",
      location: "Toulon",
      tag: "Bach Cyber",
    },
  ];

  return (
    <>
      <div
        class={`mx-auto mt-12 flex max-w-6xl flex-col gap-12 p-6 ${state.infoPageVisible ? "blur-sm" : ""}`}
      >
        {formations.map((formation) => (
          <div
            key={formation.tag}
            class="relative transform cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            onClick$={() => handleCardClick(formation)}
          >
            <img
              src={formation.img}
              alt={formation.title}
              class="h-64 w-full object-cover"
            />
            <div class="absolute inset-0 mt-32 flex flex-row space-x-32 bg-gradient-to-t from-red-800 via-red-700 to-transparent p-6 text-white">
              <div class="my-5 flex flex-col items-start space-y-2">
                <div class="rounded-lg bg-white px-3 py-1 text-sm font-bold text-black shadow">
                  {formation.tag}
                </div>
                <div class="rounded-xl bg-blue-700 px-3 py-1 text-sm font-semibold text-white shadow">
                  📍 {formation.location}
                </div>
              </div>
              <div class="flex flex-col">
                <h2 class="mb-2 text-lg font-semibold">{formation.title}</h2>
                <p class="max-w-md text-sm">{formation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        id="info-page"
        class={`fixed top-0 right-0 h-full w-[36rem] transform bg-white shadow-lg transition-transform duration-700 ease-in-out ${state.infoPageVisible ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
      >
        {state.selectedFormation && (
          <div class="p-6">
            <h2 class="mb-4 text-2xl font-bold">
              {state.selectedFormation.title}
            </h2>
            <p class="text-gray-700">{state.selectedFormation.description}</p>
            <button
              id="close-btn"
              class="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
              onClick$={handleCloseClick}
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </>
  );
});
