/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva(`
        font-sans text-gray-400 transition
`, {
    variants: {
        variant: {
            'title-1-white': 'leading-8 font-bold text-[2.5rem] text-white',
            'title-1-sm-white': 'leading-6 font-bold text-2xl text-white',
            'title-2-beije': 'leading-6 font-semibold text-2xl text-beige-100',

            'title-3-orange': 'leading-6 font-bold text-3xl text-orange-400',
            'card-big-orange': 'leading-6 font-bold text-3xl text-orange-500',

            'body-md-serif': 'leading-5 font-normal text-base font-serif text-white',
            'body-md-normal': 'leading-5 font-light text-base font-sans text-white',
            'body-md': 'leading-5 font-normal text-sm text-white',

            'body-card-normal': 'leading-5 font-normal text-base font-sans',
            'body-card-bold': 'leading-5 font-semibold text-base font-sans text-black-800',
            'card': 'leading-8 font-light text-lg text-white',

            'card-fluid': 'leading-10 font-bold text-white text-[clamp(2rem,calc(2vw+1rem),3rem)]',

            'card-fluid-to-black': 'leading-10 font-bold sm:text-white text-black-800 text-[clamp(2rem,calc(2vw+1rem),3rem)]',
            'card-fluid-sm': 'leading-6 sm:leading-8 font-normal sm:text-white text-black-800 text-[clamp(1rem,calc(1vw+1rem),1.5rem)]',

            'button-menu': 'font-serif leading-4 text-base group-hover:text-white',
            'button-body-black': 'font-bold leading-4 text-sm text-black-800 group-hover:text-white',
            'button-card-green': 'font-bold leading-6 text-base text-orange-500 group-hover:text-black-800',
            'button-form-beige': 'font-semibold text-base text-beige-100 group-hover:text-white',
            'button-form-orange': 'font-semibold text-black-800'
         }
    },
    defaultVariants: {
        variant: 'body-md'
    }
})

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements
    className?: string
    children?: React.ReactNode
}

export default function Text({
    as = 'span',
    variant,
    className, 
    children,
    ...props
}: TextProps) {
    return React.createElement(
        as, 
        { className: textVariants({ variant, className }), ...props },
        children
    )
}