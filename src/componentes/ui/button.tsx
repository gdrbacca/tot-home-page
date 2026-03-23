/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

const buttonTextVariants = {
    'button-card-green': 'button-card-green',
    'button-body-black': 'button-body-black',
    'button-form-beige': 'button-form-beige',
    'button-form-orange': 'button-form-orange',
    'button-menu': 'button-menu'
} as const

type buttonTextVariantsType = keyof typeof buttonTextVariants

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer transition duration-300 group
`, {
    variants: {
        variant: {
            'button-form-orange': 'bg-orange-400 py-4 px-8 w-52',
            'button-form-beige-orange': 'bg-beige-100 py-3 px-4 hover:bg-orange-400',

            'button-card-white-green': 'bg-white px-4 py-3 hover:bg-green-300',
            'button-card-beige-black': 'bg-beige-200 px-4 py-3 hover:bg-black-800',

            'button-card-orange-black': 'bg-orange-300 px-4 py-3 min-w-32 hover:bg-black-800',

            'button-menu-beige-black': 'bg-beige-200 max-h-12 p-3 hover:bg-black-800 cursor-pointer'
        },
        rounded: {
            full: 'rounded-full',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            sm: 'rounded-sm'
        }
    },
    defaultVariants: {
        variant: 'button-form-beige-orange',
        rounded: 'md'
    }
})

interface ButtonProps extends VariantProps<typeof buttonVariants>,
    Omit<React.ComponentProps<'button'>, 'rounded'>
    {
        text?: buttonTextVariantsType
    }


    export default function Button({
    variant,
    rounded,
    text = 'button-menu',
    className,
    children,
    ...props
}: ButtonProps) {
    return <button className={buttonVariants({className, variant, rounded})} {...props}>
        <Text variant={text}>{children}</Text>
    </button>
}