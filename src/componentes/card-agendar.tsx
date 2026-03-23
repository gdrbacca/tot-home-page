import Button from "./ui/button";
import Text from "./ui/text";


export function CardAgendar() {
    return (
        <section className=" bg-orange-500 p-12">
            <div className="flex flex-col gap-2 lg:gap-8 items-center px-10 md:px-32 lg:px-42">
                <Text variant={'card-fluid-to-black'} className="text-center">Soluções educativas, entrega de conhecimento e conexão para a sua organização.</Text>
                <Text variant={'card-fluid-sm'} className="text-center">Conteúdos estratégicos, desenvolvidos para a sua realidade, adaptados para os seus colaboradores e personalizados para sua empresa. <strong>Com a TOT, o cliente nunca anda sozinho.</strong></Text>

                <Button 
                    variant={'button-card-beige-black'} 
                    text="button-body-black"
                    rounded={'full'}
                    className="hidden sm:block"
                >
                    Agendar demonstração
                </Button>
                <Button 
                    variant={'button-card-orange-black'} 
                    text="button-form-beige"
                    rounded={'full'}
                    className="block sm:hidden"
                >
                    Quero saber mais
                </Button>
            </div>
        </section>
    )
}