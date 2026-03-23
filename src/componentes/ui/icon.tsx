/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from 'class-variance-authority'


export const iconVariants = cva(`
    
`, {
    variants: {
        variant: {
            primary: 'bg-orange-500 fill-white',
            secondary: 'bg-white fill-orange-500 p-1',
            tertiary: 'bg-transparent fill-black-800 p-1',
            'input-icon': 'bg-transparent fill-black-800 absolute right-2 flex items-center hover:cursor-pointer'
        },
        size: {
            big: 'h-10 w-10',
            medium: 'h-8 w-8',
            small: 'h-6, w-6'
        }
    },
    defaultVariants: {
        variant: 'secondary',
        size: 'medium'
    }
})

interface IconProps extends React.ComponentProps<'svg'>, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<'svg'>>
}

export default function Icon({ svg: SvgComponent, variant, size, className, ...props }: IconProps) {
    return (
        <div className='flex items-center mx-auto rounded-full overflow-hidden '>
            <SvgComponent className={iconVariants({variant, size, className})} {...props} />
        </div>
    )
    
}