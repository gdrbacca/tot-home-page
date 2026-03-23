import iconCard1 from '../assets/aprendizes_impactados.png'
import iconCard2 from '../assets/projetos_entregues.png'
import iconCard3 from '../assets/engajamento_conclusao.png'
import { CardSmall } from './card-small'

export function SectionCardsSmall() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-16 auto-rows-fr mx-auto max-w-[85%]">
          <CardSmall 
            icon={iconCard1} 
            textLarge="+ de 2,5 milhões" 
            textSmall="de aprendizes impactados com os nossos cursos." 
          />
          <CardSmall 
            icon={iconCard2} 
            textLarge="+ de 1200" 
            textSmall="projetos entregues para os nossos clientes." 
          />
          <CardSmall 
            icon={iconCard3} 
            textLarge="97%" 
            textSmall="de engajamento e conclusão dos cursos desenvolvidos pela TOT" 
          />
        </div>
    )
}