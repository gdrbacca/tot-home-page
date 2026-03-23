import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimationControls } from 'framer-motion';

import ArrowLeft from '../assets/arrow-sm-left.svg?react';
import ArrowRight from '../assets/arrow-sm-right.svg?react';
import Icon from "./ui/icon";

//usei só algumas
const imagens = import.meta.glob(
    '/src/assets/imagensCarouselNossosClientes/imagem*.png',
    {
        eager: true,
        as: 'url',
    }
)

export function CarouselNossosClientes() {
    const arrayDeImagens = useMemo(() => {
        return Object.values(imagens) as string[];
    }, []);

    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const doubledImages = [...arrayDeImagens, ...arrayDeImagens];

    const imageWidth = 170;   //largura fixa da imagem
    const gap = 32;
    const slideAmount = imageWidth + gap; // quanto mover com seta
    const totalCycleWidth = arrayDeImagens.length * (imageWidth + gap);

    //velocidade auto
    const speed = 60;

    const duration = totalCycleWidth / speed;

    useEffect(() => {
        if (isPaused) {
            controls.stop();
            return;
        }

        controls.start({
            x: ["0%", "-50%"],//[0, -totalCycleWidth],//[0, - (arrayDeImagens.length * slideAmount)], // começa do 0 e vai até -1 ciclo completo
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
            },
        });
                
    }, [isPaused, controls, duration]);

    const moveBy = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;

        const amount = direction === 'right' ? -slideAmount : slideAmount;

        controls.start({
            x: containerRef.current.getBoundingClientRect().left + amount,
            transition: { duration: 0.5, ease: 'easeOut' },
        }); 
    };

    return (
        <div className="flex flex-col items-center mt-4 gap-8 w-full h-fit">
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <button
                    onClick={() => moveBy('left')}
                    className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 hover:bg-black/70 transition-all text-2xl cursor-pointer"
                    aria-label="Anterior"
                >
                    <Icon svg={ArrowLeft} variant={'tertiary'} size={'big'} className="opacity-50" />
                </button>

                <button
                    onClick={() => moveBy('right')}
                    className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-transparent hover:bg-black/70 transition-all text-2xl cursor-pointer"
                    aria-label="Próximo"
                >
                    <Icon svg={ArrowRight} variant={'tertiary'} size={'big'} className="opacity-50" />
                </button>

                <motion.div
                    ref={containerRef}
                    className="flex gap-8 opacity-50 will-change-transform"
                    animate={controls}
                    style={{ x: 0 }}
                >
                    {doubledImages.map((image, index) => {
                        return (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`Imagem ${index + 1}`}
                                className="object-cover shrink-0 rounded"
                                loading="lazy"
                                height={140}
                                decoding="async"
                                draggable={false}
                            />
                        )
                    })}
                </motion.div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-22 bg-beige-100  z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-22 bg-beige-100  z-10" />
            </div>
        </div>
    )
}