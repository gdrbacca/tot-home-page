import Text from "./ui/text";

import imgCard1 from '../assets/cursos-personalisados-card.png'
import imgCard2 from '../assets/cursos-de-prateleira-card.png'
import imgCard3 from '../assets/plataforma-de-aprendizagem-card.png'
import imgCard4 from '../assets/consultoria-educacional-card.png'
import { CardProposito } from "./card-proposito";

export function SectionProposito() {

    return (
        <section className=" hidden sm:flex flex-col gap-8 w-full bg-orange-500 p-4 md:p-6">
            <div className="flex flex-col items-center gap-6 md:items-start">
                <Text variant={'title-1-white'}>Soluções com propósito</Text>
                <Text variant={'body-card-bold'}>Entender o contexto, personalizar a jornada e caminhar lado a lado.</Text>
            </div>

            <div className="grid grid-cols-4 gap-2 w-full auto-rows-fr px-12 md:px-18 lg:px-20">
                <CardProposito img={imgCard1} />
                <CardProposito img={imgCard2} />
                <CardProposito img={imgCard3} />
                <CardProposito img={imgCard4} />
            </div>
        </section>
    )
}