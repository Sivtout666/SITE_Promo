import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
    return <>
        <div class="overflow-x-hidden">
            <div class="h-50 w-screen bg-black text-white flex justify-center items-center text-4xl">Évènements</div>
            <div class="h-screen w-screen bg-amber-900">
                <div class="flex flex-row">
                    <Link class="h-59 w-xl bg-amber-400 hover:cursor-pointer"></Link>
                    <Link class="h-59 w-3xs hover:cursor-pointer"></Link>
                    <Link class="h-59 w-110 bg-blisen-500 hover:cursor-pointer"></Link>
                </div>
                <div class="flex flex-row">
                    <Link class="h-60 w-xs bg-blisen-900 hover:cursor-pointer"></Link>
                    <Link class="h-60 w-110 bg-amber-300 hover:cursor-pointer"></Link>
                    <Link class="h-60 w-xl bg-isen-900 hover:cursor-pointer"></Link>
                </div>
                <div class="flex flex-row">
                    <Link class="h-59 w-110 hover:cursor-pointer"></Link>
                    <Link class="h-59 w-xl bg-isen-500 hover:cursor-pointer"></Link>
                    <Link class="h-59 w-xs bg-amber-300 hover:cursor-pointer"></Link>
                </div>
            </div>
        </div>
    </>
});