import type { JSXOutput } from "@builder.io/qwik"
import { Link, type LinkProps } from "@builder.io/qwik-city"

export const LienFondu = ({ children, ...props}: LinkProps & { children: JSXOutput }) => <Link {...props} 
    class={[props.class && props.class, "relative w-fit group px-2 py-1",
        'hover:text-white transition-colors duration-300']}>
    <div class="absolute -z-10 top-0 left-0 h-full w-0 group-hover:w-full 
        transition-all duration-300 bg-isen-500"/>
    {
        children
    }
</Link>