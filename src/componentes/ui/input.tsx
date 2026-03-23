/* eslint-disable react-refresh/only-export-components */
import { cva, cx, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

export const inputTextVariants = cva(`
        block w-full text-black-800 outline-none min-w-3xs
`, {
    variants: {
        variant: {
            primary: 'bg-white py-6 border-2 border-orange-300 text-orange-300 placeholder-black-800/30 hover:border-2 hover:border-black-800 focus:border-2 focus:border-black-800',
            secondary: 'bg-white border border-solid border-black-800 text-gray-400/80 placeholder-gray-400/80 focus:bg-white/90 rounded-md',
            error: 'border border-solid border-black-800 text-gray-400/80 placeholder-gray-400/80 bg-red-100 rounded-md'
        },
        size: {
            md: 'px-8 py-4 pr-10'
        },
        disabled: {
            true: 'pointer-events-none',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        disabled: false
    }
})


interface InputTextProps extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<'input'>, 'size' | 'disabled'>
    {
        icon?: React.ComponentProps<typeof Icon>['svg']
    }

export default function InputText({
        icon,
        variant,
        size,
        disabled,
        className,
        ...props
    }: InputTextProps) {
        return (
            <div className="flex justify-between items-center w-full relative">
                <input className={cx(
                        inputTextVariants({variant, size, disabled, className}), 
                        className)
                    } {...props} />
                {icon && <Icon svg={icon} variant={'input-icon'} size={'small'}/>}
            </div>
        )
    }