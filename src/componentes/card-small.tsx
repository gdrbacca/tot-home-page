import Text from "./ui/text"

interface CardSmallProps {
    icon: string
    textLarge: string
    textSmall: string
}

export function CardSmall({
    icon,
    textLarge,
    textSmall
}: CardSmallProps) {
    return (
        <div className="flex flex-1 flex-col h-full items-center gap-4 rounded-3xl p-12 bg-beige-100 shadow-[0_3px_10px_-2px_var(--color-gray-400)]">
            <div className="flex items-center  overflow-hidden bg-transparent">
                <img 
                    src={icon}
                    alt="icone card"
                    className="w-20 h-20  md:w-24 md:h-24 object-contain"
                />
            </div>
            { /* <img src={icon} alt="icone card" className="max-w-26 max-h-22" /> */ }
            <div className="flex flex-col flex-1 gap-2 text-center">
                <Text variant={'card-big-orange'}>{textLarge}</Text>
                <Text variant={'body-card-normal'}>{textSmall}</Text>
            </div>
        </div>
    )
}