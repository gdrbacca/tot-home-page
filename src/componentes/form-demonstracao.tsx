import InputText from "./ui/input";
import Text from "./ui/text";

import Button from "./ui/button";
import { useState, type ChangeEvent, type FocusEvent } from "react";

export function FormDemonstracao() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        empresa: '',
        mensagem: '',
    });

    const [touched, setTouched] = useState({
        nome: false,
        email: false,
        empresa: false,
        mensagem: false,
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>) {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    }

    const hasError = (campo: string) => touched[campo] && !form[campo].trim();

    return (
        <div className="flex items-center mt-8 mx-auto w-full max-w-[80%]">
            <div className="flex flex-col items-center lg:px-[min(4em,8%)] px-12 py-8 gap-6 w-full mx-2 bg-black-800 rounded-2xl overflow-hidden">
                <Text variant={'title-1-white'}>Agende uma demonstração</Text>
                
                <form action="" className="flex flex-col items-center gap-4 mb-6 w-full">
                    <InputText name="nome" value={form.nome} onChange={handleChange} onBlur={handleBlur} variant={hasError('nome') ? 'error' : 'secondary'} placeholder="Nome" required/>
                    <InputText name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} variant={hasError('email') ? 'error' : 'secondary'} placeholder="Seu email corporativo" required/>
                    <InputText name="empresa" value={form.empresa} onChange={handleChange} onBlur={handleBlur} variant={hasError('empresa') ? 'error' : 'secondary'} placeholder="Qual empresa você trabalha?" required/>
                    <InputText name="mensagem" value={form.mensagem} onChange={handleChange} onBlur={handleBlur} variant={hasError('mensagem') ? 'error' : 'secondary'} placeholder="Digite aqui como podemos te ajudar" required/>

                    <Button variant={'button-form-orange'} text="button-form-orange" className="mt-4">Enviar</Button>
                </form> 
            </div>
        </div>
    )
}