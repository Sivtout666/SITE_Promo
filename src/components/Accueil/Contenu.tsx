import { Link } from "@builder.io/qwik-city";

export default () => <section id="contenu"
    class="w-svw relative py-32 overflow-x-hidden overflow-y-auto isolate">
    <div class="-z-10 absolute top-24 -left-[5%] w-[110%] h-8 bg-isen-500/25 rotate-2"/>
    <div class="-z-10 absolute top-28 -left-[5%] w-[110%] h-8 bg-isen-500/50 rotate-2"/>
    <div class="-z-10 absolute top-32 -left-[5%] w-[110%] h-8 bg-isen-500/75 rotate-2"/>
    <div class="-z-10 absolute top-36 -left-[5%] w-[110%] h-32 bg-isen-500 rotate-2"/>
    <div class="my-12 pt-8 pb-16 bg-gradient-to-b from-isen-500 to-isen-900 text-white
        px-8 md:px-16 lg:px-32">
        <h3 class="text-lg md:text-2xl text-white/50 uppercase font-black">
            Qu'est-ce qu'on y fait ?
        </h3>
        <h1 class="text-4xl font-semibold">
            8 Options en accord avec un monde qui change. 
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  py-4 items-center justify-center
            *:px-8 *:py-4 text-center text-3xl font-semibold">
            <div>
                Smart-énergie 📡
            </div>
            <div>
                Cybersécurité 👨‍💻
            </div>
            <div>
                Développement Logiciel 💻
            </div>
            <div>
                Internet Of Things 🌍
            </div>
            <div>
                E-Santé 🩻
            </div>
            <div>
                Robotique 🦾
            </div>
            <div>
                Ingénieur d'affaire 💡
            </div>
            <div>
                Systèmes embarqués ⌚️
            </div>
        </div>

        <Link class="max-w-xl text-xl font-light text-white/75
            hover:text-white/100 transition-colors"
            href="/">
            Plus d'informations sur les différentes formations
        </Link>
    </div>
    <div class="-z-10 absolute bottom-36 -left-[5%] w-[110%] h-32 bg-isen-900 rotate-2"/>
    <div class="-z-10 absolute bottom-32 -left-[5%] w-[110%] h-8 bg-isen-900/75 rotate-2"/>
    <div class="-z-10 absolute bottom-28 -left-[5%] w-[110%] h-8 bg-isen-900/50 rotate-2"/>
    <div class="-z-10 absolute bottom-24 -left-[5%] w-[110%] h-8 bg-isen-900/25 rotate-2"/>
</section>