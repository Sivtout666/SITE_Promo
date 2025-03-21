import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return <>
        <div class="h-20 bg-amber-600 flex flex-row justify-around items-center">
            <div id="logo">IDENTITé</div>
            <div id="jspl'autrecotequoi" class="flex flex-row gap-15">
                <Link href="/">Accueil</Link>
                <Link href="/">L'école</Link>
                <Link href="/">Vie étudiante</Link>
                <Link href="/">Blog</Link>  
            </div>
        </div>
    </>
}); 