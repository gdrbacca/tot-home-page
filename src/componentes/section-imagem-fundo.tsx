import Text from "./ui/text";


export function SectionImagemFundo() {
    return (
        <section className="flex p-18 w-full h-140 bg-[url(/imagem-galera.png)] bg-cover bg-center">
            <div className="flex flex-col justify-end gap-2 px-12 md:px-8 sm:px-4 h-[80%]">
                <Text variant={'card-fluid'}>O conteúdo é estratégico.</Text>
                <Text variant={'card-fluid'}>A entrega, humana.</Text>
            </div>
        </section>
    )
}