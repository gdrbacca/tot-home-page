import Icon from "./ui/icon";
import InputText from "./ui/input";
import Text from "./ui/text";

import Facebook from '../assets/facebook.svg?react'
import Linkedin from '../assets/linkedin.svg?react'
import Whatsapp from '../assets/whatsapp.svg?react'
import Instagram from '../assets/instagram.svg?react'
import Button from "./ui/button";

export function Footer() {
    return (
        <footer className="flex flex-col w-full mt-4 px-28 py-12 pb-8 bg-orange-500  bottom-0 inset-x-0">
            <div className="grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-[60%_40%]">
                <section className="flex flex-col gap-4 items-start">
                    <Text as="h1" variant={'title-1-sm-white'}>Contato</Text>
                    <div>
                        <Text as="p" variant={'body-md-normal'}>R. Antônio da Veiga, 419, Sala 10 - Victor Konder, Blumenau - SC - 89012-500</Text>
                    </div>

                    <div>
                        <a className="cursor-pointer">
                            <Text as="p" variant={'body-md-normal'}>(47) 96427-5326</Text>
                        </a>
                        <a className="cursor-pointer">
                            <Text as="p" variant={'body-md-normal'}>Konder, Blumenau - SC - 89012-500</Text>
                        </a>
                    </div>
                    <div>
                        <a className="cursor-pointer">
                            <Text as="p" variant={'body-md-normal'}>contato@toteduca.com.br</Text>
                        </a>
                    </div>
                    <div className="flex mt-2 gap-2 bg-orange-200">
                        <a className="cursor-pointer">
                            <Icon svg={Instagram} variant='secondary' />
                        </a>
                        <a className="cursor-pointer">
                            <Icon svg={Linkedin} variant='secondary'/>
                        </a>
                        <a className="cursor-pointer">
                            <Icon svg={Facebook} variant='primary' />
                        </a>
                        <a className="cursor-pointer">
                            <Icon svg={Whatsapp} variant='secondary' />
                        </a>
                    </div>

                </section>
                <section className="pl-8">
                    <form action="" className="flex flex-col gap-6">
                        <Text as="h2" variant={'title-1-sm-white'}>Se inscreva para receber novidades</Text>
                        
                        <InputText variant={'primary'} placeholder="Escreva o seu nome aqui"/>
                        <InputText variant={'primary'} placeholder="Escreva o seu melhor email aqui"/>
                        <Button variant={'button-form-beige-orange'} text={'button-form-beige'} rounded={'xl'} className="mt-3">OK</Button>
                    </form>
                </section>
            </div>
            <div className="flex flex-col border-solid mt-12 py-4 border-t-[0.1px] border-beige-100/20 items-center gap-2">
                <Text variant={'body-md'}>COPYRIGHT ® 2025. TOT EDUCAÇÃO CORPORATIVA. TODOS OS DIREITOS RESERVADOS</Text>
            </div>
        </footer>
    )
}