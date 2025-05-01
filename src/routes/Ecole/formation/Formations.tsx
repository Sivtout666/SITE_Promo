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
  details: string;
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
      details:
        "La prépa ingénieur informatique et numérique est une formation pluridisciplinaire destinée aux élèves issus de filières scientifiques ou économiques. Elle propose un enseignement approfondi en mathématiques, physique, informatique et électronique. Deux parcours sont proposés : • Développement (focalisé sur les nouvelles technologies, la programmation et les systèmes logiciels) ; • Économie (axé sur l’analyse de données, l'économie numérique et les dynamiques de marché). La formation est structurée en semestres de 30 ECTS selon le modèle LMD, avec un suivi pédagogique renforcé, des contrôles réguliers, des activités extra-académiques valorisant le savoir-être, et des cours de soutien accessibles à tous. Elle permet une poursuite directe vers le cycle ingénieur.",
      location: "Toulon",
      tag: "CIN",
    },
    {
      img: Biost,
      title: "Prépa ingénieur biologie, sciences et technologies",
      description:
        "Formation pluridisciplinaire à l’interface du vivant, des sciences et des technologies, préparant aux enjeux de la santé, de la biotechnologie et de l’innovation numérique.",
      details:
        "La prépa ingénieur biologie, sciences et technologies prépare les étudiants à aborder les défis actuels de la santé, de la bio-informatique, des biotechnologies et de l’innovation numérique. Elle combine enseignements en biologie, chimie, mathématiques, physique et informatique, en intégrant des problématiques liées au vivant et aux technologies émergentes. Cette formation favorise l’analyse critique, la rigueur scientifique, la conduite de projets pluridisciplinaires, et permet une orientation vers des cycles ingénieur spécialisés dans les domaines de la santé et des technologies du vivant.",
      location: "Toulon",
      tag: "BIOST",
    },
    {
      img: Inge,
      title: "Cycle ingénieur Bac+3 à Bac+5",
      description:
        "Formation d'ingénieurs experts et polyvalents, prêts à relever les défis technologiques actuels et futurs grâce à un large choix de spécialisations.",
      details:
        "Le cycle ingénieur permet aux étudiants de devenir des ingénieurs compétents, polyvalents et tournés vers l'innovation. Il s'appuie sur une pédagogie par projet, une forte interaction avec les entreprises, et un accompagnement individualisé. Les spécialisations proposées couvrent des domaines variés comme l’intelligence artificielle, la cybersécurité, les systèmes embarqués, la robotique, les data sciences, ou encore l’ingénierie logicielle. Cette formation développe les compétences scientifiques, techniques, managériales et humaines nécessaires pour intégrer un monde professionnel en constante mutation.",
      location: "Toulon",
      tag: "Cycle ingé",
    },
    {
      img: Gaming,
      title: "Bachelor Développement de Systèmes Numériques Immersifs",
      description:
        "Formation axée sur la création de systèmes interactifs et immersifs, mêlant développement logiciel, technologies XR et innovation numérique pour répondre aux nouveaux usages du virtuel.",
      details:
        "Ce bachelor forme des spécialistes de la conception de systèmes interactifs et immersifs : réalité virtuelle (VR), réalité augmentée (AR), jeux vidéo, simulateurs. Le cursus met l’accent sur le développement logiciel, l’interaction homme-machine, le design UX/UI, les moteurs de rendu 3D (Unity, Unreal), ainsi que les méthodologies agiles. Il prépare à des métiers dans le divertissement numérique, l’industrie, la santé ou la formation professionnelle, avec une forte composante d’innovation.",
      location: "Marseille",
      tag: "Bach DSNI",
    },
    {
      img: Cyber,
      title: "Bachelor Cybersécurité",
      description:
        "Formation spécialisée en cybersécurité offrant une expertise solide en protection des systèmes informatiques, analyse de vulnérabilités et gestion des risques numériques.",
      details:
        "Le bachelor Cybersécurité forme des experts capables d’identifier, analyser et contrer les menaces informatiques. Il aborde les fondamentaux des réseaux, systèmes et protocoles, les techniques d’audit, de pentest, de cryptographie, ainsi que la gestion des risques et la conformité réglementaire (RGPD, ISO 27001). Grâce à des projets pratiques et des mises en situation, les étudiants acquièrent les compétences nécessaires pour intégrer des équipes de sécurité informatique dans tous les secteurs d'activité.",
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
                <div class="rounded-lg bg-white px-7 py-1 text-sm font-bold text-black shadow">
                  {formation.tag}
                </div>
                <div class="rounded-xl bg-blue-700 px-1 py-1 text-sm font-semibold text-white shadow">
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
  class={`fixed top-0 right-0 h-full w-[36rem] transform bg-white shadow-lg transition-transform duration-700 ease-in-out ${
    state.infoPageVisible
      ? 'translate-x-0'
      : 'pointer-events-none translate-x-full'
  }`}
>
  {state.selectedFormation && (
    <div class="p-6 font-sans text-[#001a57] overflow-y-auto h-full">
      {/* Titre */}
      <div class="bg-gradient-to-r from-red-700 to-red-500 text-white px-6 py-3 rounded-full text-center mb-6 shadow-md">
        <h1 class="text-xl font-bold">
          {state.selectedFormation.title}
        </h1>
      </div>
      {state.selectedFormation.img && (
        <img
          src={state.selectedFormation.img}
          alt="Illustration"
          class="rounded-xl w-md mb-4 shadow-lg"
        />
      )}

      <div class="text-sm space-y-4">
        <p>{state.selectedFormation.details}</p>

      </div>

      {/* Bouton Fermer */}
      <button
        id="close-btn"
        class="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
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
