interface CardPropositoProps {
    img: string
}

export function CardProposito({ img }: CardPropositoProps) {
    return (
        <div className="group overflow-hidden rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl cursor-pointer">
            <img 
                src={img} 
                alt="cursos personalizados" 
                className=" inset-0 w-full h-full object-fit transition-transform duration-500 ease-out group-hover:scale-110"
            />
        </div>
    )
}