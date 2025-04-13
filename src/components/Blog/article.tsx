import { component$, PropsOf } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Amphi from "~/assets/isen/amphi.jpg?jsx"
import Gala from "~/assets/isen/gala.jpg?jsx"
import Sud from "~/assets/isen/sud.jpg?jsx"


type Props = {
    titre: string,
    description: string,
    image: 'amphi' | 'gala'| 'sud'
} & PropsOf<'article'>
export default component$(({ titre, description, image, ...props }: Props) => {
    return <Link>
        <article {...props} class={["w-full h-full rounded cursor-pointer p-4",
                "flex flex-col gap-2 bg-white text-white relative group", props.class]}>
            <h2 class="text-2xl font-semibold z-20">
                { titre }
            </h2>
            <p class="z-20">
                { description }
            </p>
            <div class="z-10 bg-gradient-to-br from-black/75 via-black/75 via-20% to-black/25 group-hover:to-black/0
                w-full h-full absolute top-0 left-0 transition-colors duration-500 rounded"/>

            {
                image === 'amphi' && 
                <Amphi class="z-0 absolute top-0 left-0 w-full h-full object-cover rounded"/>
            }
            {
                image === 'gala' && 
                <Gala class="z-0 absolute top-0 left-0 w-full h-full object-cover rounded"/>
            }
            {
                image === 'sud' && 
                <Sud class="z-0 absolute top-0 left-0 w-full h-full object-cover rounded"/>
            }
        </article>
    </Link>
})