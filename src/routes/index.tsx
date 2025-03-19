import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getDefaultResultOrder } from "dns";

export default component$(() => {
  return <>
    <div class="text-blue-700 md:text-red-700 h-screen">Bonjour je test tailwind</div>
  </>
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
