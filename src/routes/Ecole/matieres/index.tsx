import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const tableau1 = [
    { nom: "Mécanique", annee1: 5, annee2: "" },
    { nom: "Physique", annee1: 5, annee2: "" },
    { nom: "Mathématiques", annee1: 5, annee2: 5 },
    { nom: "Informatique", annee1: 5, annee2: 5 },
    { nom: "Sciences Humaines", annee1: 3, annee2: 3 },
    { nom: "Anglais", annee1: 2, annee2: 2 },
    { nom: "Option Dév ou Éco", annee1: 5, annee2: 5 },
    { nom: "Électronique", annee1: "", annee2: 5 },
  ];

  const tableau2 = [
    { nom: "Optique", annee1: 5, annee2: "" },
    { nom: "Physique", annee1: 5, annee2: 5 },
    { nom: "Mathématiques", annee1: 5, annee2: 5 },
    { nom: "Informatique", annee1: 5, annee2: 5 },
    { nom: "Sciences Humaines", annee1: 3, annee2: 3 },
    { nom: "Anglais ", annee1: 2, annee2: 2 },
    { nom: "Biologie", annee1: 5, annee2: 5 },
    { nom: "Électronique Numérique", annee1: "", annee2: 5 },
  ];
  const tableau3 = [
    { nom: "Mathématiques", annee1: 5, annee2: 5 },
    { nom: "Physique", annee1: 5, annee2: 5 },
    { nom: "Sciences de l'ingénieur", annee1: 3, annee2: 4 },
    { nom: "Informatique", annee1: 5, annee2: 5 },
    { nom: "Français - Philo", annee1: 2, annee2: 2 },
    { nom: "Anglais", annee1: 2, annee2: 2 },
    { nom: "EPS", annee1: 2, annee2: 2 },
    { nom: "LV2 (facultatif)", annee1: 1, annee2: 1 },
  ];
  const tableau4 = [
    { nom: "Électronique Analogique", annee1: 6, annee2: 5 },
    { nom: "Systèmes élémentaires", annee1: 3, annee2: "" },
    { nom: "Informatique", annee1: 5, annee2: 3 },
    { nom: "Mathématiques", annee1: 4, annee2: "" },
    { nom: "Développement personnel", annee1: 5, annee2: 5 },
    { nom: "Anglais", annee1: 2, annee2: 2 },
    { nom: "UE spécifique", annee1: 5, annee2: "" },
    { nom: "Physique appliquée", annee1: "", annee2: 5 },
    { nom: "Garage Week", annee1: "", annee2: 2 },
    { nom: "Intelligence artificielle", annee1: "", annee2: 3 },
    { nom: "Développement", annee1: "", annee2: 5 },
  ];
  
  const tableau5 = [
        { nom: "Intelligence Artificielle", annee1: 5, annee2: 5 },
        { nom: "Développement Système", annee1: 5, annee2: "" },
        { nom: "Déploiement Cloud", annee1: 5, annee2: "" },
        { nom: "Projet Technique", annee1: 10, annee2: "" },
        { nom: "SHES", annee1: 6, annee2: 3 },
        { nom: "Anglais", annee1: 4, annee2: 2 },
        { nom: "Sécurité", annee1: 5, annee2: 5 },
        { nom: "Bureau d'Études", annee1: "", annee2: 10 },
        { nom: "Stage d'Application Ingénieur", annee1: 5, annee2: "" },
        { nom: "Projet de fin d'études / Contrat Pro", annee1: "", annee2: 30 },
  ];

  const renderTable = (form: string, title: string, data: any[]) => (
    <div class="mb-12">
      <h1 class="mb-4 text-center text-white text-5xl font-bold">{form}</h1>
      <h2 class="mb-4 text-2xl text-white font-semibold">{title}</h2>
      <div class="overflow-x-auto rounded shadow">
        <table class="w-full border border-gray-300 bg-white">
          <thead class="bg-blue-100">
            <tr>
              <th class="border px-4 py-2">Matière</th>
              <th class="border px-4 py-2">Année 1 (ECTS)</th>
              <th class="border px-4 py-2">Année 2 (ECTS)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m, i) => (
              <tr key={i} class="odd:bg-gray-50">
                <td class="border px-4 py-2">{m.nom}</td>
                <td class="border px-4 py-2">{m.annee1 || "-"}</td>
                <td class="border px-4 py-2">{m.annee2 || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div class="p-8">
      <div class="m-6 mt-32 mx-auto max-w-4xl">
        <div class="mb-12 bg-white text-center">
          <h2 class="text-4xl font-bold md:text-5xl">
            Découvrez toute <span class="text-red-600">nos matières</span>
            <span class="text-black">  !</span>
          </h2>
          <p class="mx-auto mt-4 max-w-3xl text-lg text-gray-800 md:text-xl">
            Découvrez la richesse des matières enseignées et la variété des
            emplois du temps proposés à l'ISEN adapté à votre avenir
            professionnel.
          </p>
        </div>
        <h1 class="mt-32 mb-10 rounded-4xl bg-gradient-to-b from-red-800 to-red-600 p-2 text-center text-3xl font-bold text-white">
          Nos Matières et Programmes
        </h1>
        <div class="my-7 p-5 shadow-xs transition-all duration-500 border-2 border-transparent hover:border-4 hover:border-black bg-gradient-to-b from-blue-600 to-blue-400 rounded-4xl">
        {renderTable("CIN 1/2", "Tronc commun - Années 1 & 2", tableau1)}
        </div>
        <div class="my-7 p-5 shadow-xs transition-all duration-500 border-2 border-transparent hover:border-4 hover:border-black bg-gradient-to-b from-blue-600 to-blue-400 rounded-4xl">
        {renderTable("BIOST 1/2", "Tronc commun - Années 1 & 2", tableau2)}
        </div>
        <div class="my-7 p-5 shadow-xs transition-all duration-500 border-2 border-transparent hover:border-4 hover:border-black  bg-gradient-to-b from-blue-600 to-blue-400 rounded-4xl">
        {renderTable(
          "Prepa CPGE MPSI/PSI",
          "Tronc commun - Années 1 & 2",
          tableau3,
        )}
        </div>
        <div class="my-7 p-5 shadow-xs transition-all duration-500 border-2 border-transparent hover:border-4 hover:border-black bg-gradient-to-b from-red-600 to-red-500 rounded-4xl">
        {renderTable(
          "Cycle ingénieur 1 e (BAC +3)",
          "Parcours ingénieur - Année 3",
          tableau4,
        )}
        </div>
        <div class="my-7 p-5 shadow-xs transition-all duration-500 border-2 border-transparent hover:border-4 hover:border-black bg-gradient-to-b from-red-600 to-red-500 rounded-4xl">
        {renderTable(
          "Cycle ingénieur 2 & 3 (BAC +4 & +5)",
          "Parcours de spécialisations - Année 4 & 5",
          tableau5,
        )}
        </div>
      </div>

      <div class="m-20 rounded-3xl  transition-all duration-500 border-2 border-transparent hover:border-4 hover:border-black shadow-xl bg-[#fef8f7] p-4">
        <h2 class="text-center text-4xl font-bold">
          Une force de <span class="text-red-600">L'ISEN</span>
          <span class="text-black">!</span>
        </h2>
        <h3 class="m-3 font-bold text-4xl">
          c'est quoi la <span class="text-blue-600">SHES</span>
          <span class="text-black"> ?</span>
        </h3>
        <div class="flex flex-col items-center px-4 text-center">
          <div class="mt-5 w-max p-5 bg-lime-400 rounded-4xl">
            <iframe
              class="rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yngAhWnVpE8?si=hxM0cxHnaJD4XtsP"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe>
          </div>
          <p class="mt-6 max-w-3xl text-lg">
            Être ingénieur, ce n’est pas seulement maîtriser la technique. C’est
            aussi savoir collaborer, communiquer, comprendre les enjeux humains,
            économiques et sociaux.<br></br>
            C’est pourquoi l’ISEN intègre pleinement les <strong>
              SHES
            </strong>{" "}
            (Sciences Humaines, Économiques et Sociales) dans sa pédagogie. Ces
            enseignements permettent aux étudiants d’élargir leur culture, de
            renforcer leur esprit critique et de mieux appréhender leur rôle
            dans la société. <br></br>
            Par le biais de projets concrets, réalisés en petits groupes, les
            étudiants développent leurs soft skills : travail en équipe,
            créativité, communication orale, autonomie. Tout au long du cursus,
            ils construisent ainsi un profil complet, capable d’allier
            compétences techniques et humaines, des qualités aujourd’hui
            essentielles pour un ingénieur recherché et adaptable.
          </p>
          <p class="mt-12 max-w-3xl text-lg">
            <em>" Nous voulons former des ingénieurs à la fois responsables et
            ingénieux. Pour cela nous utilisons des pédagogies réellement
            innovantes pour amener à nos étudiants les réflexes pour bien
            appréhender la complexité du monde "</em> Guillaume Perocheau
          </p>
        </div>
      </div>
    </div>
  );
});
