import { CarouselNossosClientes } from "./carousel-nossos-clientes";
import Text from "./ui/text";


export function SectionNossosClientes() {
    return (
        <section className="flex flex-col items-center lg:items-start gap-6 w-full p-12 px-18 bg-beige-100">
            <div className="flex flex-col gap-4 px-8">
                <Text variant={'title-3-orange'}>Nossos clientes</Text>
                <Text variant={'button-menu'}>As empresas que geramos as experiências desejadas!</Text>
            </div>

            <CarouselNossosClientes />
        </section>
    )
}