import { component$, useVisibleTask$ } from "@builder.io/qwik";
import mount from "~/lib/leaflet"

import "./leaflet.css"
export default component$(() => {

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const div = document.getElementById('carte')!;
        const _carte = mount(div);
    })
    
    return <div id="carte" class="w-full h-full"/>
})