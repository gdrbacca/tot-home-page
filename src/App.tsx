import { CardAgendar } from "./componentes/card-agendar"
import { CardBaixeAgora } from "./componentes/card-baixe-agora"
import { Carousel } from "./componentes/carousel"
import { Footer } from "./componentes/footer"
import { FormDemonstracao } from "./componentes/form-demonstracao"
import { Header } from "./componentes/header"
import { SectionCardsSmall } from "./componentes/section-cards-small"
import { SectionImagemFundo } from "./componentes/section-imagem-fundo"
import { SectionNossosClientes } from "./componentes/section-nossos-clientes"
import { SectionProposito } from "./componentes/section-proposito"

function App() {

  return (
      <main>
  
        <Header />
  
        <CardAgendar />
  
        <SectionImagemFundo />
  
        <SectionNossosClientes />
  
        <SectionProposito />
  
        <SectionCardsSmall />
  
        <CardBaixeAgora />
  
        <Carousel />
  
        <FormDemonstracao />
  
        <Footer />
      </main>
    )
}

export default App
