import Ebook from '../assets/ebook_psd.png'
import Button from './ui/button'
import Text from './ui/text'

export function CardBaixeAgora() {

    return (
        <section className="flex flex-col items-center my-8 gap-4 lg:flex-row justify-between bg-orange-400 mx-auto max-w-[85%] lg:max-w-[75%] rounded-2xl p-2">
            <div className="flex flex-col gap-6 items-center lg:items-start pl-10 py-6 ">
                <Text variant={'title-1-white'} className='mt-2'>Material Gratuito</Text>
                <Text as='p' variant={'card'} className='mt-2'>Conheça o nosso Manual da Universidade Corporativa. Nele, você encontrará os 6 passos para uma implantação de sucesso na sua empresa. Aproveite!</Text>
                <Button variant={'button-card-white-green'} text={'button-card-green'} rounded={'full'} className="w-48">BAIXE AGORA</Button>
            </div>
            <div className='flex items-center w-full mr-4'>
                <img src={Ebook} alt="ebook" className='w-full h-auto aspect-auto'/>
            </div>

        </section>
    )
}