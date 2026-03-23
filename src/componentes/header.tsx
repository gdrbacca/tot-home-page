import Text from "./ui/text";

import logo from '../assets/logo.png'
import Button from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="w-full bg-orange-500">
                <section className="w-full py-4 px-8 text-center">
                    <Text variant={'card'}>TOT News - A sua nova newsletter sobre Educação Corporativa! <u className="cursor-pointer">Inscreva-se aqui.</u></Text>
                </section>
                <section className="flex items-center justify-between bg-orange-600 py-8 px-12">
                    <img src={logo} alt="logo" className="h-24 cursor-pointer" />

                    <nav className="hidden lg:flex w-full h-full max-h-14 justify-end lg:gap-2 ">
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Cursos Personalizados</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Cursos de Prateleira</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Plataforma de Aprendizagem</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Consultoria</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Blog</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">eBooks</Button>
                    </nav>

                    <button
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Abrir menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-8 w-8" aria-hidden="true" />
                        )}
                    </button>
                </section>
            </header>
            <div
                className={`
                    fixed inset-0 z-40 transition-opacity duration-300 lg:hidden
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
            >
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />

                <div
                    className={`
                        absolute inset-y-0 right-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                <div className="flex h-16 items-center justify-end px-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        aria-label="Fechar menu"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex flex-col gap-2 w-full h-full bg-white">
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Cursos Personalizados</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Cursos de Prateleira</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Plataforma de Aprendizagem</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Consultoria</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">Blog</Button>
                        <Button variant={'button-menu-beige-black'} text={'button-menu'} rounded={'full'} className="shadow-[0_3px_10px_-2px_var(--color-gray-400)]">eBooks</Button>
                    </nav>
                </div>
            </div>
        </>
    )
}