import { component$ } from "@builder.io/qwik";
import Article, { Placeholder  } from "~/components/blog/article";
import Entete from "./Entete";

export default component$(() => {
    return <section class="p-4">
        <Entete/>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 px-8 py-16 gap-8 *:min-h-64">
            <Article
                href="/blog/ingenieur"
                titre="Devenir ingénieur… et bien plus encore"
                description="L'ingénieur de demain ne peut plus se contenter de maîtriser les sciences"
                image="amphi"/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
        </div>
    </section>
});